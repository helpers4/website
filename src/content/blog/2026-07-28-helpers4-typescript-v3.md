---
title: "helpers4 TypeScript v3 — From Complement to Contender"
date: 2026-07-28
author: Bérenger (baxyz)
tags: [typescript, release, helpers4]
excerpt: "v3 ships a breaking cleanup (type predicates move to @helpers4/guard), but the real story is bigger: helpers4 has grown from 'the library you add alongside es-toolkit or radashi' into something that can stand on its own."
---

Back in May, I wrote about [twenty years of copy-pasting the same `capitalize()` function](/blog/2026-05-23-helpers4-typescript-v2) across every project I've worked on. That post is still the fuller origin story, if you want it — go read it. This one is about what happens after you stop apologizing for existing.

---

## The pitch used to be "and"

For most of helpers4's life, the pitch was: *use es-toolkit or radashi for your general-purpose utilities, and add helpers4 for the stuff they deliberately don't cover* — dates, URLs, SemVer, RxJS observables, typed promise guards. A complement. A useful add-on. Never the main event.

v2 already started pushing back on that framing. But v3 is the release that actually backs the claim up: the ground that used to be es-toolkit's alone — `Map`/`Set` utilities, concurrency primitives, statistics — is now genuinely covered here too. "Complement" was the honest word for a while. It isn't anymore.

Here's the actual state of things: helpers4's general-purpose categories alone — array, object, string, number, function, guard — already add up to more functions than radashi ships *in total*. The full count now sits at **300+ functions across 20 categories** (up from 12 categories at v2), comparable in raw coverage to lodash and es-toolkit, while still covering the domain-specific ground neither of them touches.

So the new goal for v3 and beyond is explicit: **helpers4 should be complete enough to replace your general-purpose utility library, not just sit next to it.** Same modular, tree-shakable architecture as always — you still only pay for what you import, category by category, so being broad doesn't mean being heavy.

We rewrote the [comparison pages](/typescript/comparisons/alternatives/) on the site to reflect this. If you've read them before, they're worth a second look.

---

## The breaking change: type predicates move to `@helpers4/guard`

v3's one breaking change is a cleanup, not a redesign. Runtime type guards — `isString`, `isArray`, `isDefined`, and friends — move out of `@helpers4/type` into a new `@helpers4/guard` package:

```diff
-import { isString, isArray } from '@helpers4/type';
+import { isString, isArray } from '@helpers4/guard';
```

`@helpers4/type` now holds *only* compile-time utility types (`DeepPartial`, `Maybe`, `Prettify`, ...) — zero runtime footprint. The distinction driving this: a **type predicate** (`is<Type>`, checks *what something is*) belongs in `guard/`; a **state predicate** (`isEmpty`, `isNonEmpty`, checks *what state a value is in*) belongs in its own category and never lived in `type/` to begin with — that split happened back in v2.0.0. v3 just finishes the job for the type-checking side.

If you only ever imported `type` for its compile-time types, nothing changes for you. If you imported runtime guards, it's a find-and-replace — same behavior, same JSDoc, new package. Full details, including the 6 older removed aliases cleaned up in the same release, are in [MIGRATION.md](https://github.com/helpers4/typescript/blob/main/MIGRATION.md).

---

## What actually closed the gap

The positioning shift above isn't just marketing — it's backed by real new categories that used to be the actual reason someone would reach for es-toolkit *instead of* helpers4.

**`@helpers4/map` and `@helpers4/set`** — the Map/Set operations JavaScript's own `Map`/`Set` don't give you:

```typescript
import { toMapByKey, hasValue } from '@helpers4/map';

const usersById = toMapByKey(users, (u) => u.id);
// Map(3) { 'u1' => {...}, 'u2' => {...}, 'u3' => {...} }

hasValue(usersById, someUser);
// Map.prototype.has only checks keys — this checks values
```

**Concurrency primitives** — `createMutex` and `createSemaphore`, FIFO-queued locks for when "just await everything in parallel" isn't safe:

```typescript
import { createSemaphore } from '@helpers4/promise';

const semaphore = createSemaphore(2); // at most 2 concurrent API calls
await Promise.all(urls.map((url) => semaphore.run(() => fetch(url))));
```

**Async-aware array iteration** — `filterAsync`, `mapAsync`, `forEachAsync`, the async counterparts to `Array.prototype`'s sync methods, with an optional concurrency cap:

```typescript
import { mapAsync } from '@helpers4/array';

await mapAsync(urls, (url) => fetch(url), 2);
// at most 2 concurrent fetch() calls, same idea as the semaphore above
```

**Statistics** — `median`, `percentile`, `meanBy`, `sumBy` for the numeric-summary helpers that kept getting hand-rolled.

**Bulk case-key transforms** — `camelCaseKeys`, `kebabCaseKeys`, `pascalCaseKeys`, `snakeCaseKeys`, `titleCaseKeys`, recursing through nested objects and arrays:

```typescript
import { camelCaseKeys } from '@helpers4/object';

camelCaseKeys({ user_name: 'Alice', home_address: { zip_code: '12345' } });
// => { userName: 'Alice', homeAddress: { zipCode: '12345' } }
```

Plus a new `@helpers4/color` category (`hexToRgb`, `rgbToHsl`, and friends) and 25+ other new helpers along the way. None of this replaces the domain-specific ground helpers4 already owned — it sits alongside `date`, `url`, `version`, `observable`, and typed promise guards, which no general-purpose toolkit covers.

---

## Built to be reached for by AI, not just humans

Here's a bet I made in the v2 post and want to follow up on: **AI coding assistants rewrite the same `debounce` from scratch just as often as humans do.** A well-tested, well-documented, zero-dependency helper is exactly the kind of thing a model should prefer over generating its own — if it can actually find it.

v3 leans into that:

- A dedicated [AI & LLM Support page](/typescript/reference/ai-support/), explaining `llms.txt`, the full machine-readable `llms-full.txt` reference, and [DeepWiki](https://deepwiki.com/helpers4/typescript) for Q&A over the actual codebase.
- Exhaustive per-function contracts (see below) mean a model calling a helpers4 function is calling something with formally tested guarantees, not a black box.

This is still an open axis, not a finished feature. If you've got ideas on making a library more discoverable and trustworthy to an agent specifically, [the issue tracker is open](https://github.com/helpers4/typescript/issues).

---

## The rigor behind the numbers

None of the above matters if it's not actually correct. What "battle-tested" means concretely, as of v3:

- **100% coverage** — lines, branches, functions, statements. No exceptions, no `istanbul ignore`.
- **Property-based testing** ([fast-check](https://github.com/dubzzz/fast-check)) — invariants checked against thousands of generated inputs, not just the cases we thought of.
- **Contract and boundary tests** — formal input→output guarantees, plus explicit coverage of edge values (`[]`, `0`, `Number.MAX_SAFE_INTEGER`, epoch timestamps).
- **Security edge cases** — inputs designed to trigger prototype pollution, injection, and other unsafe patterns.
- **Mutation testing** ([Stryker](https://stryker-mutator.io/), >90% threshold) — the check on the checks. If a mutated line still passes the test suite, the tests aren't good enough.
- **Every PR gets at least one human and one AI reviewer** — drawing from Claude, Mistral, and GitHub Copilot, not necessarily all three at once. Not a replacement for judgment, but a second set of eyes that doesn't get tired at the end of a long diff.
- **Zero runtime dependencies**, `pnpm audit` on every PR, and [Dependabot](https://docs.github.com/en/code-security/dependabot) watching everything that isn't zero.

Two of these are now live and checkable on [helpers4.dev](https://helpers4.dev) itself, not just claimed in a README: the [OpenSSF Scorecard](https://scorecard.dev/viewer/?uri=github.com/helpers4/typescript) rating and the real [Codecov](https://codecov.io/github/helpers4/typescript) coverage percentage, both fetched live and shown right on the landing page.

---

## Try it

```bash
npm install @helpers4/all
# or pick your categories:
npm install @helpers4/array @helpers4/map @helpers4/promise
```

📖 **[Full docs → helpers4.dev/typescript](https://helpers4.dev/typescript)**

🔀 **[Migration guide](https://github.com/helpers4/typescript/blob/main/MIGRATION.md)**

⚖️ **[helpers4 vs. es-toolkit / radashi / lodash / remeda / rambda](https://helpers4.dev/typescript/comparisons/alternatives/)**

🐛 **[Open an issue](https://github.com/helpers4/typescript/issues)**

It took two years to earn the right to say this without it sounding like a stretch: helpers4 isn't just the library you add alongside your utility belt anymore. It can *be* your utility belt.

— Bérenger (baxyz)
