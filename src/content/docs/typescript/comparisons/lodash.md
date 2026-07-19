---
title: "helpers4 vs Lodash — Detailed Comparison"
sidebar:
  label: "helpers4 vs Lodash"
  order: 1
---

[Lodash](https://lodash.com/) is the most widely-used JavaScript utility library, with ~300
functions covering arrays, objects, strings, and functional-programming helpers. It predates
ES2015 and still targets ES5 compatibility.

This page details the differences to help you decide whether you need helpers4, lodash, or both.

## Philosophy

| | helpers4 | lodash |
|---|---|---|
| **Goal** | Domain-specific helpers not found in general toolkits | Maximalist, legacy-compatible utility belt |
| **TypeScript** | Native strict types, no `any` | Requires `@types/lodash` (community-maintained, can lag) |
| **Tree-shaking** | Built-in — separate `@helpers4/*` packages per category | Requires the `lodash-es` variant; the default `lodash` package is not tree-shakable |
| **Target runtime** | Modern JS (ES2024+) | ES5-compatible |
| **Dependencies** | Zero runtime dependencies | Zero dependencies |
| **License** | LGPL-3.0 | MIT |

### Key philosophical difference

Lodash was built for a JavaScript ecosystem that no longer exists in the same form — no native
`Array.prototype.flat`, no optional chaining, no `Promise`. Much of its surface area now
duplicates what's built into the language. helpers4 assumes a modern runtime and only exists to
fill gaps native JS and lodash both leave open: dates, URLs, semver, observables, typed promise
guards.

## What helpers4 adds that lodash doesn't have

### Date utilities (`@helpers4/date`)

| Function | Description |
|----------|-------------|
| `compare` | Compare two dates with configurable precision |
| `difference` | Difference between two dates in a given unit, with sign |
| `isSameDay` / `isSameMonth` / `isSameYear` | Calendar-based equality checks |
| `ensureDate` | Parse dates safely (handles timestamps in seconds) |
| `toISO8601` / `toRFC2822` / `toRFC3339` | Format dates to standard formats |
| `timeAgo` | Human-readable relative time |
| `isBusinessDay` / `isWeekend` | Calendar predicates |

lodash has no date utilities — it explicitly recommends pairing it with a separate date library.

### URL utilities (`@helpers4/url`)

| Function | Description |
|----------|-------------|
| `cleanPath` | Normalize a URL path |
| `extractPureURI` | Strip query params and fragments |
| `onlyPath` | Extract the path from a full URL |
| `relativeURLToAbsolute` | Convert relative URLs to absolute |
| `withLeadingSlash` / `withoutLeadingSlash` | Ensure/remove leading slash |
| `withTrailingSlash` / `withoutTrailingSlash` | Ensure/remove trailing slash |

lodash has **no URL utilities**.

### Version / Semver utilities (`@helpers4/version`)

| Function | Description |
|----------|-------------|
| `parse` | Parse a semver string into components |
| `compare` | Compare two semver versions |
| `increment` | Bump major/minor/patch |
| `satisfiesRange` | Check if a version satisfies a range |

lodash has **no semver utilities**.

### Observable utilities (`@helpers4/observable`)

| Function | Description |
|----------|-------------|
| `combine` | Combine multiple observables into one |
| `combineLatest` | Combine latest values from multiple observables |

lodash has **no RxJS / observable utilities**.

### Promise guards (`@helpers4/promise`)

| Function | Description |
|----------|-------------|
| `truthyPromiseOrThrow` | Assert a promise resolves to a truthy value |
| `falsyPromiseOrThrow` | Assert a promise resolves to a falsy value |
| `meaningPromiseOrThrow` | Assert a promise resolves to a non-empty value |
| `retry` | Retry a failing async function |
| `settle` | Partition fulfilled/rejected outcomes without failing fast |

lodash predates native `Promise` combinators and has no promise utilities at all.

## Where they overlap

For functions that exist in both libraries, here's how they compare:

### Array

| helpers4 | lodash | Notes |
|----------|--------|-------|
| `chunk` | `chunk` | Same concept |
| `unique` | `uniq` | Same concept |
| `difference` | `difference` | Same concept |
| `intersection` | `intersection` | Same concept |
| `equalsDeep` | `isEqual` | Same concept (deep equality) |
| `createSortBy*Fn` | `sortBy` | helpers4 provides typed sort function factories per data type; lodash's `sortBy` takes an iteratee |

### Object

| helpers4 | lodash | Notes |
|----------|--------|-------|
| `cloneDeep` | `cloneDeep` | Same concept |
| `mergeDeep` | `merge` | Same concept |
| `get` | `get` | Same concept, but helpers4 is dependency-free and type-narrows the result |
| `set` | `set` | Same concept |
| `pick` / `omit` | `pick` / `omit` | Same concept |
| `flatten` / `unflatten` | — | helpers4 only |

### String

| helpers4 | lodash | Notes |
|----------|--------|-------|
| `camelCase` | `camelCase` | Same concept |
| `capitalize` | `capitalize` | Same concept |
| `kebabCase` | `kebabCase` | Same concept |
| `snakeCase` | `snakeCase` | Same concept |
| `truncate` | `truncate` | Same concept |
| `dedent` | — | helpers4 only |

### Function

| helpers4 | lodash | Notes |
|----------|--------|-------|
| `debounce` | `debounce` | Same concept |
| `throttle` | `throttle` | Same concept |
| `memoize` | `memoize` | Same concept |
| `curry` | `curry` | Same concept |

### Number

| helpers4 | lodash | Notes |
|----------|--------|-------|
| `clamp` | `clamp` | Same concept |
| `roundTo` | `round` | Same concept |

### Type checking

| helpers4 | lodash | Notes |
|----------|--------|-------|
| `isArray` | `isArray` | Same |
| `isBoolean` | `isBoolean` | Same |
| `isDate` | `isDate` | Same |
| `isFunction` | `isFunction` | Same |
| `isNumber` | `isNumber` | Same |
| `isPlainObject` | `isPlainObject` | Same |
| `isString` | `isString` | Same |

## What lodash has that helpers4 doesn't

Lodash's collection-chaining API (`_(arr).map(...).filter(...).value()`) and its more exhaustive
"deep get with default" (`_.get(obj, path, defaultValue)`) semantics have no direct helpers4
equivalent — helpers4 deliberately doesn't attempt to replace lodash's full surface, only to
cover what it and native JS leave out.

## When to use which

| Scenario | Recommendation |
|----------|----------------|
| You need date formatting/comparison | **helpers4** (`@helpers4/date`) |
| You need URL path manipulation | **helpers4** (`@helpers4/url`) |
| You need semver parsing/comparison | **helpers4** (`@helpers4/version`) |
| You need RxJS observable combinators | **helpers4** (`@helpers4/observable`) |
| You need typed promise guards/retry | **helpers4** (`@helpers4/promise`) |
| You need ES5 compatibility, or `_.get` with defaults / chaining | **lodash** |
| Maximum function coverage, legacy codebase already on lodash | **lodash** |
| Modern app, want to shed lodash's dead weight | **helpers4 + [es-toolkit](./es-toolkit/)** for the general-purpose parts |

## Summary

Lodash is the maximalist, battle-tested option for legacy compatibility and sheer function
coverage. helpers4 is modern, minimal, and focused specifically on the domain gaps (dates, URLs,
semver, observables, promise guards) that lodash — built for a pre-ES2015 world — never aimed to
cover.
