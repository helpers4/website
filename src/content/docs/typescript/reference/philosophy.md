---
title: Philosophy
description: The guiding principles behind helpers4 TypeScript utilities — why we build the way we do.
sidebar:
  label: "Philosophy"
  order: 1
---

helpers4 is a collection of TypeScript utilities built around a few firm convictions. This page explains the reasoning behind our design decisions, so you know what to expect and what we expect from contributions.

## One thing, done well

Each helper does exactly one thing. No Swiss-army functions, no optional behaviors controlled by a flag that silently changes the return type. If you import `chunk`, you get a function that chunks arrays — nothing more, nothing hidden.

This makes every helper predictable, easy to understand at a glance, and easy to replace if your needs change.

## Tree-shaking is not optional

Every function lives in its own file. There are no side effects at the module level. Importing `chunk` from `@helpers4/array` pulls in only `chunk`.

This is not a nice-to-have: bundle size matters. We check that the build output stays lean, and we reject patterns that would force bundlers to pull in dead code.

There is no single `@helpers4/everything` mega-bundle that includes every category at once. This is intentional: it forces you to be explicit about what you need, keeps imports lean as the library grows, and avoids the "I imported one thing but bundled the whole library" failure mode that plagues monolithic utility packages.

## `any` is a bug waiting to happen

`any` is banned. Not discouraged — banned. Use `unknown`, use generics, use a union. If a type is genuinely dynamic, model it explicitly.

Strict TypeScript is part of the value we provide. Callers should never need to cast the return value of a helper.

## Tested to the extreme

We require 100% coverage on lines, branches, functions, and statements — no exceptions, no `/* istanbul ignore */` shortcuts.

Beyond line coverage, every helper faces a gauntlet:

- **Unit tests** — every branch and edge case, colocated with the implementation
- **Property-based tests** (fast-check) — invariants verified against thousands of randomly-generated inputs
- **Contract tests** — formal guarantees: if input satisfies X, output must satisfy Y, regardless of the input
- **Boundary tests** — explicit coverage of limit values (`[]`, `0`, `Number.MAX_SAFE_INTEGER`, epoch timestamps…)
- **Security edge cases** — inputs designed to trigger prototype pollution, injection, or unsafe patterns
- **Mutation testing** (Stryker) — >90% threshold; if a mutant survives, the tests aren't good enough — [view dashboard](https://dashboard.stryker-mutator.io/reports/github.com/helpers4/typescript/v3.0.3)
- **Benchmarks** (Vitest Bench) — performance tracked per build, non-blocking
- **Dependency security audit** — `pnpm audit` runs on every PR and release, blocking merges on any known vulnerability. [Dependabot](https://docs.github.com/en/code-security/dependabot) watches all dependencies and automatically opens PRs for security updates — nothing silently falls out of date.
- **[OpenSSF Scorecard](https://securityscorecards.dev/viewer/?uri=github.com/helpers4/typescript)** — runs weekly, evaluating branch protection, pinned actions, artifact integrity, and other security practices. Results are published publicly and uploaded as SARIF to GitHub Code Scanning.
- **[OpenHub (Black Duck)](https://openhub.net/p/helpers4typescript)** — independent third-party activity and security assessment, publicly visible.

Zero runtime dependencies means zero transitive vulnerabilities — but dev dependencies are part of the supply chain too, so we audit them just as rigorously.

If a helper can't be fully tested, it doesn't belong here.

## Documentation is part of the code

Every exported function carries JSDoc with `@param`, `@returns`, `@example`, and `@since`. This is enforced in review, not left to good intentions.

Documentation written after the fact is documentation that drifts. We write it alongside the implementation so the intent and the code stay in sync.

## Native APIs are not competition

We don't wrap what the platform already provides. When a function becomes standard JavaScript — `flat`, `groupBy`, `findIndex` — we remove it from the library rather than keeping it for convenience.

This keeps the library lean and pushes users toward code that doesn't need a dependency at all. A helper that saves you one method call isn't a helper; it's maintenance overhead.

## Category independence {#category-independence}

Each category (`array`, `object`, `date`, …) is its own npm package with its own scope. This is deliberate: you should be able to install only the categories you need without pulling in the rest.

A side effect of this design is that **the same function name can exist in multiple categories** when the operation genuinely applies to different data types. For example, `compact` removes falsy entries — from an array in `@helpers4/array`, and from an object's values in `@helpers4/object`. These are distinct operations with distinct types; collapsing them into one overloaded function would break type inference and tree-shaking.

When you need two helpers with the same name in the same file, use the standard ES module `as` rename:

```ts
import { compact as compact4array } from '@helpers4/array';
import { compact as compact4object } from '@helpers4/object';
```

See [Name Conflicts](./naming-conflicts/) for the full list of known conflicts and resolution patterns.

## Pragmatism over theoretical purity

The platform APIs exist. `new URL(x).toString()` normalises a path. The `Intl` API formats dates. You could argue that wrapping these is unnecessary.

helpers4 disagrees — politely.

When you need to clean a path in a template, or strip a trailing slash before building a route, or normalise a URL coming from a legacy API, you reach for a one-liner with a name that says exactly what it does:

```ts
const endpoint = cleanPath(`https://api.example.com/${version}/users/${id}`);
```

versus:

```ts
const url = new URL(`https://api.example.com/${version}/users/${id}`);
const endpoint = url.toString();
```

Both work. One communicates intent. The other is a workaround that happens to have the right side effect.

A common objection to this kind of helper is that "normalising downstream might mask underlying issues that should be addressed at the source". That is a valid design principle for core library maintainers gatekeeping a general toolkit. It is not a useful principle for a developer who receives a string from a third-party API, a user input, or a config file and just needs a clean path.

helpers4 exists because **real production code is full of strings that need normalisation**, and pretending otherwise is its own form of impurity. A helper that replaces a convoluted workaround with a named, tested, typed function is not masking a problem — it is solving one.

This doesn't mean we accept every helper that "works". We still require the function to be genuinely reusable, have a clear contract, and pass the same exhaustive test gauntlet as everything else. But we do not reject a function because a lower-level API can technically produce the same result with more code.

## Open source, genuinely

All code is licensed under LGPL-3.0. You can use it in commercial projects. You can fork it. If you improve the helpers themselves, we ask that you share those improvements — that's the deal.

No proprietary lock-in, no "free tier". The whole library is the free tier.
