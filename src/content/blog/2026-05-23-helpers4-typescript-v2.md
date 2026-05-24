---
title: "Shipping helpers4 TypeScript v2 — 10 Years of Copy-Pasting the Same Utilities, Done."
date: 2026-05-23
author: Bérenger (baxyz)
tags: [typescript, release, helpers4]
excerpt: "After two years of solo development, 22 pre-releases, and more than a little bit of stubbornness, helpers4/typescript v2 is finally out. Here's the story behind it."
---

Let me be honest with you: I've rewritten the same `capitalize()` function approximately fourteen times across ten different companies over twenty years of professional development.

`debounce`? Fifteen times, at a conservative estimate. That little utility that chunks an array into groups of N? I've genuinely lost count. The slug generator? The semantic version comparator? The "is this value null *or* undefined?" type guard? Same story, every new project, every new team.

Sound familiar?

Yeah. I thought so.

---

## The eternal groundhog day of JS utilities

Yes, I know — *yet another JavaScript utility library*. I can already hear the sighs. But hear me out, because helpers4 has a goal that, as far as I can tell, no other library is actively pursuing: **a curated home for the functional, real-world helpers that every professional JS/TS project ends up needing**, and that none of the existing libs want to touch.

The JavaScript ecosystem has a... *colorful* history with utility libraries. Lodash was everywhere in the 2010s — and it still works great — but it wasn't born in a TypeScript-first world. Underscore is technically still alive. Ramda is wonderful if you want everything curried. date-fns is excellent but scoped to dates only. And [radashi](https://github.com/radashi-org/radashi) — a genuinely great modern alternative — deliberately stays minimal: high-quality low-level primitives, no domain-specific helpers, nothing functional or opinionated.

Which is exactly right *for what radashi is*. It's just not what I needed.

What's missing from the ecosystem is a library that embraces the **messy, practical, sometimes-complex helpers that developers actually write every day**: slug generation, retry logic, SemVer parsing, URL normalization, Conventional Commits validation, UUID v7, RxJS operators... The stuff that's too "functional" for a core primitives lib, but too common to keep reinventing.

That's helpers4.

And beyond just covering more ground, helpers4 is designed to be **enterprise-grade from day one** — not just usable in hobby projects, but something you can confidently ship in production at scale, with audit trails, security guarantees, and a license that won't haunt your legal team.

---

## A brief history of my personal copy-paste suffering

For most of my career, "shared utilities" meant a `helpers.ts` file somewhere in the project, grown organically by whoever happened to need something. A `formatDate` here, a `debounce` there, copy-pasted from the last project, slightly adapted, occasionally broken.

**2016 — A French SaaS company.** I built the first thing I'd actually call a *proto-library*: a well-scoped, internally consistent collection of TypeScript utilities, designed with clear boundaries and a coherent API. It was decent. It was internal. It never left the company's private npm registry — but it taught me what a proper helper library could look like.

**2022 — A startup.** I co-founded one with an open-source-by-default culture. We published a small utility library called **Talafsa** ([@data-cafe/helpers](https://www.npmjs.com/package/@data-cafe/helpers)) — first real public release! Except... we shipped it under AGPL-3.0. Which is, uh, famously the "do not put this anywhere near commercial software" license. Adoption was predictably minimal. Lesson learned.

**2024 — A fresh start.** Talafsa was eventually abandoned. I did a proper state-of-the-art review, concluded that nothing quite fit what I wanted to build, and started over from scratch. New library. Better architecture. **LGPL-3.0** this time — use it freely in commercial or open-source projects, and you only need to share changes to the library itself.

---

## Two years, 22 pre-releases, and a lot of `pnpm test`

Building a quality utility library is genuinely more work than it looks. Not because the individual functions are complex — `chunk([1,2,3,4], 2)` is three lines — but because doing it *right* requires discipline on every front.

### Quality that doesn't cut corners

- **100% test coverage.** Not a vanity metric. Edge cases in utility functions are where bugs live: null inputs, empty arrays, Unicode strings, negative numbers. We use [fast-check](https://github.com/dubzzz/fast-check) for property-based testing to catch the cases you didn't think of.
- **Mutation testing.** Running [Stryker](https://stryker-mutator.io/) to verify that tests actually *catch* bugs, not just run against correct code. This is the check on your checks.
- **Zero runtime dependencies.** No bloat, no supply-chain risk. Your `node_modules` won't grow because of helpers4.

### The tree-shaking architecture — two wins for the price of one

By 2024, tree-shaking had been around for years — but almost no utility library was actually *designed around it*. helpers4 is built from the ground up as **per-category npm packages**: `@helpers4/string`, `@helpers4/array`, `@helpers4/date`, and so on.

This isn't just about bundle size (though that matters too). It solves two distinct problems:

**(a) No "kitchen sink" build.** helpers4 has no `@helpers4/everything-bundled-together` mega-package that includes code you'll never use. When you `npm install @helpers4/string`, you get string utilities and nothing else. This forces precision — you specify exactly what you need — and keeps your final bundle as lean as possible, even as the library grows.

**(b) Same name, different scope — no gymnastics required.** Both `@helpers4/array` and `@helpers4/object` expose a `compact` function. Both do what you'd expect for their respective types. In a monolithic library, this collision requires either name mangling (`compactArray` / `compactObject`) or convoluted JSDoc overloads. With separate packages, there's no conflict — you import from the right scope and move on. The API stays clean.

### The "no native duplicates" rule

helpers4 takes a clear stance: **we do not implement what the JS/TS standard library already does well.** No `Array.flat` wrapper, no `Object.entries` reimplementation, no `Promise.allSettled` clone. If a helper eventually becomes a JavaScript standard (looking at you, `Array.prototype.groupBy`), we'll deprecate and remove it.

The goal is to complement the platform, not compete with it.

---

## Security — because production means it

Security in a utility library isn't glamorous, but it matters — especially in enterprise environments where every dependency is a potential attack vector.

Here's what helpers4 does on the security front:

- **[Dependabot](https://docs.github.com/en/code-security/dependabot)** watches all dependencies and automatically opens PRs for security updates. Nothing silently falls out of date.
- **`pnpm audit`** runs on every PR as part of CI — blocking merges if any known vulnerability is found in the dependency tree.
- **[OpenSSF Scorecard](https://securityscorecards.dev/viewer/?uri=github.com/helpers4/typescript)** runs weekly, evaluating the project's security practices (branch protection, pinned actions, artifact integrity, etc.) and publishing the results publicly.
- **GitHub Code Scanning** picks up the Scorecard SARIF output and surfaces findings directly in the repository's security tab.
- **[OpenHub (Black Duck)](https://openhub.net/p/helpers4typescript)** — I've just opened a project page there to get an independent third-party security and activity assessment. The evaluation is still in progress, but it's one more layer of visibility.

Zero dependencies means zero transitive vulnerabilities. But we still audit rigorously, because dev dependencies are part of the supply chain too.

---

## What's in the box

**12 categories, shipped:**

| Package | Highlights |
|---------|-----------|
| `@helpers4/array` | `chunk`, `compact`, `difference`, `intersection`, `union`, `deepEquals`, `shallowEquals` |
| `@helpers4/string` | `capitalize`, `slugify`, `camelCase`, `kebabCase`, `titleCase`, `truncate` |
| `@helpers4/object` | `deepMerge`, `pick`, `omit`, `compact`, `deepEquals` |
| `@helpers4/promise` | `delay`, `retry`, `debounce`, `throttle` |
| `@helpers4/date` | `daysDifference`, `isSameDay`, `toISO8601`, `isValidDate` |
| `@helpers4/number` | `clamp`, `isEven`, `isOdd`, `sum`, `inRange` |
| `@helpers4/function` | `debounce`, `throttle`, `memoize` |
| `@helpers4/type` | `isString`, `isNumber`, `isNull`, `isNullish`, `isArray` |
| `@helpers4/url` | `cleanPath`, `extractPureURI`, `onlyPath` |
| `@helpers4/version` | Full SemVer 2.0.0 parsing and comparison |
| `@helpers4/observable` | RxJS Observable helpers and operators |
| `@helpers4/id` | UUID v7 generation |

```bash
# Install what you need
npm install @helpers4/string @helpers4/array

# Or grab everything
npm install @helpers4/all
```

```typescript
import { capitalize, slugify } from '@helpers4/string';
import { chunk, intersection } from '@helpers4/array';
import { deepMerge } from '@helpers4/object';

capitalize('hello world');           // "Hello world"
slugify('My Blog Post Title!');      // "my-blog-post-title"
chunk([1, 2, 3, 4, 5], 2);          // [[1, 2], [3, 4], [5]]
intersection([1, 2, 3], [2, 3, 4]); // [2, 3]
deepMerge({ a: 1, b: { c: 2 } }, { b: { d: 3 } }); // { a: 1, b: { c: 2, d: 3 } }
```

---

## The hidden gems 🔍

Some of the most interesting helpers don't have obvious category names. Here's what might surprise you:

**`@helpers4/version` — Full SemVer 2.0.0.** Not just "parse a version string". Comparison, sorting, range checking, pre-release handling — all of it, with correct semantics for pre-release identifiers (`2.0.0-alpha.3` sorts before `2.0.0`, yes, even though alphabetically `a` comes before nothing).

**`@helpers4/id` — UUID v7.** Not v4. v7 — the *sortable* UUID. Time-ordered, monotonic, compatible with modern databases that care about insert performance. If you're still generating random UUIDs for your DB primary keys, [this is the upgrade](https://www.ietf.org/rfc/rfc9562.html).

**`@helpers4/date` — Temporal support.** The [TC39 Temporal proposal](https://tc39.es/proposal-temporal/) is coming, and helpers4/date already supports `Instant`, `Duration`, `PlainDate`, and `PlainDateTime`. We're ready when you are.

**`@helpers4/observable` — RxJS helpers.** If you're in an Angular project or using RxJS for any reason, these operators save boilerplate in ways that are hard to describe until you need them.

**`@helpers4/commit` — Conventional Commits validation.** Yes, we have a parser and validator for Conventional Commits messages. We eat our own cooking: helpers4's CI uses it to validate every commit in every PR.

---

## What's next

### AI-native helpers

Here's an angle I'm genuinely excited about: developers aren't the only ones who keep rewriting the same utilities. **AI coding assistants do it too.** Ask any LLM to generate a `debounce` function and it'll happily write you one from scratch — every single time, slightly differently, with subtly different edge case handling.

A well-documented, well-tested, zero-dependency utility library is exactly the kind of thing AI tools *should* be reaching for instead of reinventing. Making helpers4 more AI-native — better docs structure, richer examples, explicit "prefer this over rolling your own" signals — is a next axis of improvement I want to explore.

If you have ideas or experience on this, **[contributions and suggestions are very welcome](https://github.com/helpers4/typescript/issues)**.

---

## So... what's the actual pitch?

If you want a collection of low-level programming primitives, radashi is excellent and you should use it.

If you want a **batteries-included**, TypeScript-first, enterprise-grade utility belt that covers the helpers you *actually reach for* in real projects — URL manipulation, date math, string formatting, SemVer, type guards, debounce, retry logic — with zero dependencies, 100% test coverage, mutation testing, security audits, and the freedom to use it in commercial projects without license anxiety: **helpers4 is for you**.

> helpers4 is driven by real-world needs. If you have a helper that you keep rewriting, [open an issue](https://github.com/helpers4/typescript/issues) — or better yet, [contribute directly](https://github.com/helpers4/.github/blob/main/CONTRIBUTING.md).

---

## Get started

```bash
npm install @helpers4/all
# or pick your categories:
npm install @helpers4/string @helpers4/array @helpers4/promise
```

📖 **[Full API documentation → helpers4.dev/typescript](https://helpers4.dev/typescript)**

🐛 **[Open an issue](https://github.com/helpers4/typescript/issues)**

🤝 **[Contributing guide](https://github.com/helpers4/.github/blob/main/CONTRIBUTING.md)**

---

Thanks for reading, and welcome to helpers4 v2. It only took twenty years of copy-pasting the same utilities to get here — but here we are. 🎉

— Bérenger (baxyz)
