---
title: Philosophy — v1 (archived)
description: The guiding principles behind the original 2022 helpers4 release.
sidebar:
  label: "Philosophy"
  order: 1
---

:::caution[Archived version]
This page reflects v1 as it was in 2022. Some of it still holds today — see the
[current Philosophy page](/typescript/reference/philosophy/) for what changed.
:::

## One thing, done well

Each helper does exactly one thing. No Swiss-army functions, no optional behaviors controlled by
a flag that silently changes the return type. If you import `combine`, you get a function that
combines two observables — nothing more, nothing hidden.

## Tree-shaking is not optional

Every function lives in its own file. There are no side effects at the module level.

There was never a single `@helpers4/everything` mega-bundle including every category at once —
that came later, in v2. In v1, you installed exactly the category packages you needed.

## Category independence

Each category (`observable`, `promise`, `string`, `url`) was its own npm package with its own
scope, so you could install only what you needed without pulling in the rest. With only 9
functions across 4 categories, v1 never ran into a name collision between categories.

## Tested, not exhaustively

Each package shipped with a basic unit test suite (`*.spec.ts`, colocated with the
implementation). None of the current testing gauntlet — property-based tests, contract tests,
mutation testing, security edge cases, OpenSSF Scorecard — existed yet; that infrastructure was
built for v2.

## Open source, genuinely

All v1 code was licensed under AGPL-3.0. You could use it, study it, and modify it — but AGPL's
lack of a linking exception made it a poor fit for closed-source use, which is why v2 onward
moved to LGPL-3.0-or-later. See the [v1 License page](../legal/license/) for details.
