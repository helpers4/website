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

Beyond line coverage, we use **property-based testing** (fast-check) to verify invariants across thousands of random inputs, and **mutation testing** to confirm that tests actually catch regressions rather than just execute code.

If a helper can't be fully tested, it doesn't belong here.

## Documentation is part of the code

Every exported function carries JSDoc with `@param`, `@returns`, `@example`, and `@since`. This is enforced in review, not left to good intentions.

Documentation written after the fact is documentation that drifts. We write it alongside the implementation so the intent and the code stay in sync.

## Check native first

Before adding a helper, we verify it doesn't duplicate something the platform already provides. We maintain a [`native-alternatives.json`](https://github.com/helpers4/typescript/blob/main/docs/native-alternatives.json) list for this purpose.

A helper that wraps a one-liner native call adds complexity without value. We only add helpers where the abstraction meaningfully reduces friction.

## Open source, genuinely

All code is licensed under LGPL-3.0. You can use it in commercial projects. You can fork it. If you improve the helpers themselves, we ask that you share those improvements — that's the deal.

No proprietary lock-in, no "free tier". The whole library is the free tier.
