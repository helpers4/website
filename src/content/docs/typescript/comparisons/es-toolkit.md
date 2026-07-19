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
| **Scope** | Narrow, curated categories | Broad — array, object, string, math, function, predicates, **Map, Set, and Promise utilities** |
| **Package strategy** | Independent `@helpers4/*` packages per category | Single `es-toolkit` package (tree-shaken per-function at bundle time, not per-package) |
| **Dependencies** | Zero runtime dependencies | Zero dependencies |
| **License** | LGPL-3.0 | MIT |
| **Backing** | Solo-maintained | Toss (Viva Republica) — corporate-backed, hundreds of contributors |

**Key difference**: es-toolkit's pitch is being a faster, smaller, TypeScript-native lodash — it competes on performance and migration ease for existing lodash codebases. helpers4's pitch is covering domains general toolkits skip entirely (dates, URLs, semver, observables). They overlap heavily on the "general utility" surface (array/object/string/predicates) but es-toolkit goes meaningfully further into territory helpers4 doesn't touch at all — see below.

## What es-toolkit has that helpers4 doesn't

### Map and Set utilities — a whole missing category

es-toolkit ships full parallel utility sets for native `Map` and `Set`: `forEach`, `filter`, `map` (Set only), `mapKeys`/`mapValues` (Map only), `reduce`, `some`, `every`, `keyBy`, `countBy`, `findKey`/`findValue` (Map), `find` (Set). helpers4 currently has **zero** manipulation utilities for these — only type guards (`isMap`, `isSet`). If you work with `Map`/`Set` as first-class collections rather than converting to arrays first, es-toolkit covers this and helpers4 doesn't.

### Concurrency primitives (`@helpers4/promise` gap)

| Function | What it does |
|----------|---------------|
| `Mutex` | Mutual-exclusion lock for async code |
| `Semaphore` | Limit concurrent access to a resource |
| `delay` | Promise-based sleep/wait |
| `timeout` / `withTimeout` | Reject a promise if it doesn't settle in time |
| `retry` | Retry a function with configurable attempts |

helpers4's `@helpers4/promise` has `settle`, `parallel`, `parallelSettle`, and typed promise guards — but no lock/semaphore primitives, no generic `delay`, and no `withTimeout` wrapper. These are common, genuinely useful gaps.

### Statistics beyond mean/sum

es-toolkit has `median`, `percentile`, and `*By` iteratee variants (`meanBy`, `medianBy`, `sumBy`) for computing stats over a derived value. helpers4's `@helpers4/array` has `mean`/`sum` but no `median`, no `percentile`, and no iteratee variants.

### Bulk object-key case transforms

`toCamelCaseKeys` / `toSnakeCaseKeys` recursively transform every key of an object to a case style in one call. helpers4 has `camelCase`/`snakeCase` for individual **strings** but nothing that walks an object's keys in bulk.

### Async-aware array iteration

`filterAsync`, `mapAsync`, `forEachAsync`, `flatMapAsync`, `reduceAsync`, plus `limitAsync` for concurrency-limited async iteration. helpers4 has `parallel`/`parallelSettle` as standalone promise helpers, but not integrated as `Array.prototype`-shaped async iteration methods.

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
| `removeUndefinedNull`, `safeJsonParse`, `parsePropertyPath` | — | helpers4 only |
| — | `toCamelCaseKeys`/`toSnakeCaseKeys`, `sortKeys` | es-toolkit only (see gap above) |

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
| You need `Map`/`Set` utilities, `Mutex`/`Semaphore`, or `median`/`percentile` | **es-toolkit** |
| You need Temporal API guards or browser-form guards (`FormData`, `Blob`) | **helpers4** |
| Multiple needs | **helpers4 + es-toolkit** — they overlap on the basics but neither fully subsumes the other |

## Summary

es-toolkit is the strongest general-purpose competitor in this comparison by adoption and momentum (Toss-backed, ~2M weekly downloads, releasing multiple times a week) — and it covers real ground helpers4 doesn't: `Map`/`Set` utilities, concurrency primitives (`Mutex`, `Semaphore`, `withTimeout`), and richer statistics (`median`, `percentile`). helpers4 still holds its own domain-specific ground (dates, URLs, semver, observables, Temporal guards) that es-toolkit's lodash-replacement scope never aimed to cover. Where they overlap (arrays, objects, strings, basic predicates), coverage is close to 1:1 — pick based on the gaps that matter for your project, or use both.
