---
title: Helpers 4 TypeScript — v3
sidebar:
  label: TypeScript v3
  order: 0
---

import { Badge } from '@astrojs/starlight/components';

<Badge text="v3 alpha — work in progress" variant="tip" />

v3 is the next major version of the helpers4 TypeScript library. It is in active development and not yet released. The API is subject to change.

Looking for the stable release? → **[TypeScript v2](/typescript/)**

## What's planned for v3

v3 focuses exclusively on breaking changes that could not land in a minor release.

### Breaking changes

| Change | Details |
|---|---|
| **Remove deprecated symbols** | `isEmpty`, `safeDate`, `dateToISOString`, `daysDifference`, `deepClone`, `deepMerge` are all removed — use their replacements |
| **Category rename: `type` → `guard`** | `@helpers4/type` becomes `@helpers4/guard` — content is runtime type guards (`isString`, `isNull`, …) |
| **New `type` category** | Pure compile-time utility types (`DeepPartial`, `Brand`, `Prettify`, `UnionToIntersection`, `DeepGet`, `DeepSet`, `ParsePath`, …) |
| **Promise helpers** | `truthyPromiseOrThrow`, `falsyPromiseOrThrow`, `meaningPromiseOrThrow` — unsound `as T` casts reviewed |
| **`isNonEmpty` type guards** | Decide whether `string/isNonEmpty` and `object/isNonEmpty` gain type guards to match `array/isNonEmpty` |

### Infrastructure

| Change | Details |
|---|---|
| **`_unsafeKeys` deduplication** | The identical `array/_unsafeKeys.ts` and `object/_unsafeKeys.ts` are merged into a shared location |
| **Temporal support** | When TC39 Temporal reaches Stage 4 and ships in Node LTS: replace `EpochMilliseconds` duck-type with `Temporal.Instant \| Temporal.ZonedDateTime` |

## Migration guide

A full migration guide from v2 → v3 will be published alongside the first alpha release.

## Tracking progress

Follow the v3 roadmap in the [GitHub repository](https://github.com/helpers4/typescript).
