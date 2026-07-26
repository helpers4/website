---
title: "helpers4 vs es-toolkit — Detailed Comparison"
sidebar:
  label: "helpers4 vs es-toolkit"
  order: 4
---

[es-toolkit](https://es-toolkit.dev) is a modern, high-performance lodash replacement (~300 functions) maintained by Toss (Viva Republica) — 2-3x faster than lodash, up to 97% smaller per function, with a drop-in `es-toolkit/compat` layer for migrating existing lodash code. It's the most actively developed general-purpose utility library in this comparison (last published 2026-07-18, 1,660+ published versions).

This page details the differences to help you decide whether you need helpers4, es-toolkit, or both.

## Philosophy

| | helpers4 | es-toolkit |
|---|---|---|
| **Goal** | Domain-specific helpers not found in general toolkits | Modern, fast, tree-shakable replacement for lodash |
| **Scope** | Narrow, curated categories — now including `Map`/`Set` and concurrency primitives too | Broad — array, object, string, math, function, predicates, Map, Set, and Promise utilities |
| **Package strategy** | Independent `@helpers4/*` packages per category | Single `es-toolkit` package (tree-shaken per-function at bundle time, not per-package) |
| **Dependencies** | Zero runtime dependencies | Zero dependencies |
| **License** | LGPL-3.0 | MIT |
| **Backing** | Solo-maintained | Toss (Viva Republica) — corporate-backed, hundreds of contributors |

**Key difference**: es-toolkit's pitch is being a faster, smaller, TypeScript-native lodash — it competes on performance and migration ease for existing lodash codebases. helpers4's pitch is covering domains general toolkits skip entirely (dates, URLs, semver, observables). They overlap heavily on the "general utility" surface (array/object/string/predicates, and as of helpers4 v3.0.5, Map/Set and concurrency primitives too) — see below for exactly where real gaps remain on either side.

## What es-toolkit still has that helpers4 doesn't

As of v3.0.5, helpers4 closed most of what used to be here — `@helpers4/map`, `@helpers4/set`,
`createMutex`/`createSemaphore`, and `median`/`percentile`/`meanBy`/`sumBy` all shipped. Two real
gaps remain:

### Async-aware array iteration — partial coverage

es-toolkit: `filterAsync`, `mapAsync`, `forEachAsync`, `flatMapAsync`, `reduceAsync`, plus
`limitAsync` for concurrency-limited async iteration. helpers4 has `filterAsync`, `mapAsync`,
`forEachAsync` (same semantics — the async counterparts to their `Array.prototype` namesakes) but
no `flatMapAsync`, `reduceAsync`, or a concurrency-limiting `limitAsync` — for that, helpers4's
`@helpers4/promise` has `parallel`/`parallelSettle`, but as standalone promise helpers rather than
integrated `Array.prototype`-shaped iteration methods.

### Statistics — one narrow gap

es-toolkit has `median`, `percentile`, and `*By` iteratee variants (`meanBy`, `medianBy`,
`sumBy`) for computing stats over a derived value. helpers4's `@helpers4/array` now has
`median`, `percentile`, `meanBy`, and `sumBy` too — the one remaining gap is `medianBy`
(median over a derived value rather than the raw items).

## What helpers4 now has that es-toolkit doesn't

### Bulk object-key case transforms — helpers4 goes further

es-toolkit has `toCamelCaseKeys`/`toSnakeCaseKeys` (2 variants) to recursively transform every key
of an object to a case style in one call. helpers4's `@helpers4/object` has `camelCaseKeys`,
`kebabCaseKeys`, `pascalCaseKeys`, `snakeCaseKeys`, and `titleCaseKeys` (5 variants, all built on
the same `mapDeep` engine, recursing into arrays too) — the reverse of the gap that used to be
here.

## Where they overlap

### Array

| helpers4 | es-toolkit | Notes |
|----------|------------|-------|
| `chunk` | `chunk` | Same |
| `compact` | `compact` | Same |
| `countBy` | `countBy` | Same |
| `difference` | `difference` (+`differenceBy`/`differenceWith`) | Same, es-toolkit adds iteratee/comparator variants |
| `intersection` | `intersection` (+`By`/`With`) | Same |
| `partition` | `partition` | Same |
| `sample` | `sample` (+`sampleSize`) | Same |
| `shuffle` | `shuffle` | Same |
| `sort` / `sortBy` | `sortBy` / `orderBy` | es-toolkit has no plain `sort`, only iteratee-based |
| `unique` | `uniq` (+`uniqBy`/`uniqWith`) | Same concept, different name |
| `unzip` | `unzip` (+`unzipWith`) | Same |
| `without` | `without` | Same |
| `zip` | `zip` (+`zipWith`/`zipObject`) | Same |
| `cartesianProduct` | `cartesianProduct` | Same — exact match |
| `max` / `min` | `maxBy` / `minBy` | es-toolkit has no plain max/min either, only iteratee-based |
| `replaceOrAppend`, `toggle`, `symmetricDifference`, `ensureArray`, `sortNatural` | — | helpers4 only |
| — | `windowed`, `pull`/`pullAt`/`remove`, `keyBy`, `combinations`, `toFilled` | es-toolkit only |

### Function

| helpers4 | es-toolkit | Notes |
|----------|------------|-------|
| `debounce` | `debounce` | Same |
| `throttle` | `throttle` | Same |
| `memoize` | `memoize` | Same |
| `once` | `once` | Same |
| `partial` | `partial` (+`partialRight`) | Same |
| `negate` | `negate` | Same |
| `identity` | `identity` | Same |
| `noop` | `noop` | Same |
| `curry` | `curry` (+`curryRight`) | Same |
| `unary` | `unary` | Same — exact match |
| `pipe` | `flow` | Same concept, different name |
| `compose` | `flowRight` | Same concept, different name |
| `flip`, `returnOrThrowError` | — | helpers4 only |
| — | `retry`, `before`/`after`, `ary`, `spread`, `rest` | es-toolkit only |

### Predicates / Type checking

Both converge heavily here (`isArray`, `isBoolean`, `isDate`, `isFunction`, `isMap`, `isNumber`, `isPlainObject`, `isPromise`, `isRegExp`, `isSet`, `isString`, `isSymbol`, `isUndefined` all match by name). es-toolkit-only: `isBrowser`/`isNode` (environment detection), `isJSON`/`isJSONArray`/`isJSONObject`/`isJSONValue` (JSON-shape validation), `isLength`, `isBuffer`, `isFile`, `isTypedArray`. helpers4-only: the **Temporal API guards** (`isTemporalDuration`, `isTemporalInstant`, `isTemporalPlainDate`, etc.) and browser-form guards (`isFormData`, `isBlob`, `isArrayBuffer`, `isCssColor`) — es-toolkit has neither.

### Object

| helpers4 | es-toolkit | Notes |
|----------|------------|-------|
| `clone` / `cloneDeep` | `clone` / `cloneDeep` (+`cloneDeepWith`) | Same |
| `omit` / `omitBy` | `omit` / `omitBy` | Same |
| `pick` / `pickBy` | `pick` / `pickBy` | Same |
| `invert` | `invert` | Same |
| `mergeDeep` | `merge` / `mergeWith` / `toMerged` | Same concept |
| `flatten` **and** `unflatten` | `flattenObject` (one direction only) | helpers4 covers both directions, es-toolkit only flattens |
| `sortKeys` | `sortKeys` | Same |
| `camelCaseKeys`/`kebabCaseKeys`/`pascalCaseKeys`/`snakeCaseKeys`/`titleCaseKeys` | `toCamelCaseKeys`/`toSnakeCaseKeys` | helpers4 covers 5 case styles, es-toolkit 2 (see above) |
| `removeUndefinedNull`, `safeJsonParse`, `parsePropertyPath` | — | helpers4 only |

### Map

| helpers4 | es-toolkit | Notes |
|----------|------------|-------|
| `countBy` | `countBy` | Same |
| `every` | `every` | Same |
| `filter` | `filter` | Same |
| `findKey` | `findKey` | Same |
| `findValue` | `findValue` | Same |
| `mapKeys` | `mapKeys` | Same |
| `mapValues` | `mapValues` | Same |
| `reduce` | `reduce` | Same |
| `some` | `some` | Same |
| `toMapByKey` | `keyBy` | Same concept, different name |
| `hasValue` | — | helpers4 only — `Map.prototype.has` checks keys, not values, so this fills a real native gap |
| — | `forEach` | es-toolkit only, though native `Map.prototype.forEach` already covers this without a helper |

### Set

| helpers4 | es-toolkit | Notes |
|----------|------------|-------|
| `countBy` | `countBy` | Same |
| `filter` | `filter` | Same |
| `map` | `map` | Same |
| `toMapByKey` | `keyBy` | Same concept, different name |
| — | `find`, and likely `some`/`every`/`reduce` matching its Map coverage | es-toolkit only — helpers4's Set coverage is narrower than its Map coverage |

### Promise / Concurrency

| helpers4 | es-toolkit | Notes |
|----------|------------|-------|
| `createMutex` | `Mutex` | Same concept — FIFO-queued mutual-exclusion lock |
| `createSemaphore` | `Semaphore` | Same concept — FIFO-queued, limits concurrent holders |
| `delay` | — | helpers4 only (already existed pre-v3.0.5) |
| `timeout` | `withTimeout` | Same concept — reject if a promise doesn't settle in time |
| `retry` | `retry` | Same |
| `settle`, `parallel`, `parallelSettle` | — | helpers4 only |

### String

Both have the full case-conversion set (`camelCase`, `kebabCase`, `snakeCase`, `pascalCase`, `capitalize`). helpers4's `removeDiacritics` matches es-toolkit's `deburr` (same concept). Both have `words`. es-toolkit-only: `constantCase`, `startCase` (≈ helpers4's `titleCase`), `reverseString`. helpers4-only: `dedent`, `escapeHtml`/`unescapeHtml`, `extractErrorMessage`, `injectWordBreaks`, `isBlank`/`isNotBlank`, `leadingSentence`, `slugify`, `template`, `truncate`.

## When to use which

| Scenario | Recommendation |
|----------|----------------|
| You need date formatting/comparison | **helpers4** (`@helpers4/date`) |
| You need URL path manipulation | **helpers4** (`@helpers4/url`) |
| You need semver parsing/comparison | **helpers4** (`@helpers4/version`) |
| You need RxJS observable combinators | **helpers4** (`@helpers4/observable`) |
| You're migrating an existing lodash codebase | **es-toolkit** (`es-toolkit/compat` is a near drop-in) |
| You need full async array iteration (`flatMapAsync`, `reduceAsync`, `limitAsync`) or `medianBy` | **es-toolkit** |
| You need bulk object-key case transforms (5 case styles, not 2) | **helpers4** |
| You need Temporal API guards or browser-form guards (`FormData`, `Blob`) | **helpers4** |
| Multiple needs | **helpers4 + es-toolkit** — they overlap on the basics but neither fully subsumes the other |

## Summary

es-toolkit is the strongest general-purpose competitor in this comparison by adoption and
momentum (Toss-backed, ~2M weekly downloads, releasing multiple times a week). It used to cover
real ground helpers4 didn't — `Map`/`Set` utilities, concurrency primitives, richer statistics —
but as of helpers4 v3.0.5 that gap mostly closed, and helpers4 now goes further on bulk
object-key case transforms. What's left: es-toolkit's async array iteration is more complete
(`flatMapAsync`, `reduceAsync`, concurrency-limited `limitAsync`), and it has `medianBy` where
helpers4 doesn't. helpers4 still holds its own domain-specific ground (dates, URLs, semver,
observables, Temporal guards) that es-toolkit's lodash-replacement scope never aimed to cover.
Where they overlap (arrays, objects, strings, basic predicates, and now Map/Set/concurrency too),
coverage is close to 1:1 — pick based on the narrow gaps that matter for your project, or use both.
