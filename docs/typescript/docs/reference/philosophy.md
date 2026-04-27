---
sidebar_label: Philosophy
sidebar_position: 1
title: Philosophy
description: The guiding principles behind helpers4 TypeScript utilities — why we build the way we do.
---

# Philosophy

helpers4 is a collection of TypeScript utilities built around a few firm convictions. This page explains the reasoning behind our design decisions, so you know what to expect and what we expect from contributions.

## One thing, done well

Each helper does exactly one thing. No Swiss-army functions, no optional behaviors controlled by a flag that silently changes the return type. If you import `chunk`, you get a function that chunks arrays — nothing more, nothing hidden.

This makes every helper predictable, easy to understand at a glance, and easy to replace if your needs change.

## Tree-shaking is not optional

Every function lives in its own file. There are no side effects at the module level. Importing `chunk` from `@helpers4/array` pulls in only `chunk`.

This is not a nice-to-have: bundle size matters. We check that the build output stays lean, and we reject patterns that would force bundlers to pull in dead code.

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
- **Mutation testing** (Stryker) — >90% threshold; if a mutant survives, the tests aren't good enough — [view dashboard](https://dashboard.stryker-mutator.io/reports/github.com/helpers4/typescript/v2.0.0-alpha.23)
- **Benchmarks** (Vitest Bench) — performance tracked per build, non-blocking
- **Dependency security audit** — `pnpm audit` on every PR and release

If a helper can't be fully tested, it doesn't belong here.

## Documentation is part of the code

Every exported function carries JSDoc with `@param`, `@returns`, `@example`, and `@since`. This is enforced in review, not left to good intentions.

Documentation written after the fact is documentation that drifts. We write it alongside the implementation so the intent and the code stay in sync.

## Native APIs are not competition

We don't wrap what the platform already provides. When a function becomes standard JavaScript — `flat`, `groupBy`, `findIndex` — we remove it from the library rather than keeping it for convenience.

This keeps the library lean and pushes users toward code that doesn't need a dependency at all. A helper that saves you one method call isn't a helper; it's maintenance overhead.

## Open source, genuinely

All code is licensed under LGPL-3.0. You can use it in commercial projects. You can fork it. If you improve the helpers themselves, we ask that you share those improvements — that's the deal.

No proprietary lock-in, no "free tier". The whole library is the free tier.
