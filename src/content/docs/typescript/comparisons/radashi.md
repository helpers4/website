---
title: "helpers4 vs Radashi — Detailed Comparison"
sidebar:
  label: "helpers4 vs Radashi"
  order: 1
---

[Radashi](https://radashi.js.org) is a general-purpose TypeScript utility toolkit (~130 functions), and the actively maintained fork of Radash. The two libraries are **complementary, not competing**.

This page details the differences to help you decide whether you need helpers4, radashi, or both.

## Philosophy

| | helpers4 | radashi |
|---|---|---|
| **Goal** | Domain-specific helpers not found in general toolkits | General-purpose utility belt |
| **Scope** | Welcomes domain-specific categories (URL, date, semver…) | Core limited to the most popular/common utilities |
| **Package strategy** | Independent `@helpers4/*` packages per category | Single `radashi` package |
| **Dependencies** | Zero runtime dependencies | Zero dependencies |
| **License** | LGPL-3.0 | MIT |

### Origin story

helpers4 was born from a recurring problem: **repeatedly recoding the same domain-specific helpers** (URL manipulation, string humanisation, promise guards…) across projects due to licensing constraints. After 10 years of rewriting the same utilities, the question became: should this effort go into an existing library, or into a standalone project?

The question was raised directly to the Radashi community: [_"How Far Should More Helper Functions Be Integrated?"_](https://github.com/orgs/radashi-org/discussions/279). The answer from the Radashi maintainer was clear and fair: Radashi core stays focused on the most popular utilities, niche helpers belong either in a future `radashi-edge` package or in complementary third-party libraries. This confirmed the need for helpers4 as a standalone project.

A concrete case confirmed this: URL helpers proposed to Radashi core were acknowledged as well-built, but the Radashi maintainer raised a philosophical concern: *"when encountering malformed paths, it's often more maintainable to fix the issue at its source rather than normalising downstream."*

The counter-argument — and helpers4's actual position — is that these utilities are **string manipulations**, no different in nature from `capitalize` or `kebabCase`. When a string arrives from a third-party API, a config file, or a legacy codebase, you cannot always "fix the source". You need a clean, named, typed helper that does one obvious thing. `cleanPath(url)` is not masking a problem; it is the solution.

The two libraries ended up at different answers to the same question, and that's fine. Radashi is a lean general-purpose toolkit; helpers4 is the pragmatic complement for everything that doesn't meet that bar.

### Key philosophical differences

- **Breadth vs focus**: helpers4 embraces categories that radashi deliberately excludes — dates, URLs, semver, observables — because they don't meet radashi's popularity threshold for core.
- **Tree-shaking makes breadth viable**: With modern bundlers, having many functions in independent packages adds zero overhead. helpers4 leans into this.
- **Complementary, not competing**: helpers4 and radashi target different use cases and are designed to work together.

## What helpers4 adds that radashi doesn't have

### Date utilities (`@helpers4/date`)

| Function | Description |
|----------|-------------|
| `compare` | Compare two dates with configurable precision |
| `daysDifference` | Number of days between two dates |
| `isSameDay` | Check if two dates are the same calendar day |
| `safeDate` | Parse dates safely (handles timestamps in seconds) |
| `toISO8601` / `toRFC2822` / `toRFC3339` | Format dates to standard formats |
| `isTimestampInSeconds` | Detect if a timestamp is in seconds vs milliseconds |
| `normalizeTimestamp` | Normalize any timestamp to milliseconds |
| `dateToISOString` | Safe ISO string conversion |

radashi has **no date utilities**.

### URL utilities (`@helpers4/url`)

| Function | Description |
|----------|-------------|
| `cleanPath` | Normalize a URL path |
| `extractPureURI` | Strip query params and fragments |
| `onlyPath` | Extract the path from a full URL |
| `relativeURLToAbsolute` | Convert relative URLs to absolute |
| `withLeadingSlash` / `withoutLeadingSlash` | Ensure/remove leading slash |
| `withTrailingSlash` / `withoutTrailingSlash` | Ensure/remove trailing slash |

radashi has **no URL utilities**.

### Version / Semver utilities (`@helpers4/version`)

| Function | Description |
|----------|-------------|
| `parse` | Parse a semver string into components |
| `compare` | Compare two semver versions |
| `increment` | Bump major/minor/patch/prerelease |
| `satisfiesRange` | Check if a version satisfies a range |
| `stripV` | Remove the `v` prefix |

radashi has **no semver utilities**.

### Observable utilities (`@helpers4/observable`)

| Function | Description |
|----------|-------------|
| `combine` | Combine multiple observables into one |
| `combineLatest` | Combine latest values from multiple observables |

radashi has **no RxJS / observable utilities**.

### Promise guards (`@helpers4/promise`)

| Function | Description |
|----------|-------------|
| `truthyPromiseOrThrow` | Assert a promise resolves to a truthy value |
| `falsyPromiseOrThrow` | Assert a promise resolves to a falsy value |
| `meaningPromiseOrThrow` | Assert a promise resolves to a non-empty value |
| `consoleLogPromise` | Log and pass-through in promise chains |

radashi has `retry`, `sleep`, `parallel`, `defer`, `guard` — different async patterns, but no typed promise guards.

## Where they overlap

For functions that exist in both libraries, here's how they compare:

### Array

| helpers4 | radashi | Notes |
|----------|---------|-------|
| `chunk` | `cluster` | Same concept, different names |
| `unique` | `unique` | Same concept |
| `difference` | `diff` | Same concept |
| `intersection` | `intersects` | radashi returns `boolean`, helpers4 returns the intersection array |
| `arrayEquals` | `isArrayEqual` | Same concept |
| `deepCompare` | — | helpers4 only (array-specific deep comparison) |
| `oneInCommon` | `intersects` | radashi's `intersects` returns boolean like `oneInCommon` |
| `createSortBy*Fn` | `sort` | helpers4 provides sort function factories; radashi has a single `sort` |

### Object

| helpers4 | radashi | Notes |
|----------|---------|-------|
| `deepClone` | `cloneDeep` | Same concept |
| `deepMerge` | `assign` | radashi's `assign` does recursive merge |
| `get` | `get` | Same concept |
| `set` | `set` | Same concept |
| `deepCompare` | `isEqual` | Same concept (deep equality) |
| `removeUndefinedNull` | `shake` | radashi's `shake` removes any falsy by predicate |

### String

| helpers4 | radashi | Notes |
|----------|---------|-------|
| `camelCase` | `camel` | Same concept |
| `capitalize` | `capitalize` | Same concept |
| `kebabCase` | `dash` | Same concept (dash-case = kebab-case) |
| `slugify` | — | helpers4 only |
| `labelize` | `title` | Similar (humanize a key into a label) |
| `errorToReadableMessage` | — | helpers4 only |

### Function

| helpers4 | radashi | Notes |
|----------|---------|-------|
| `debounce` | `debounce` | Same concept |
| `throttle` | `throttle` | Same concept |
| `memoize` | `memo` | Same concept |

### Number

| helpers4 | radashi | Notes |
|----------|---------|-------|
| `clamp` | `clamp` | Same concept |
| `roundTo` | `round` | Same concept |
| `randomBetween` | `random` | Same concept |

### Type checking

| helpers4 | radashi | Notes |
|----------|---------|-------|
| `isArray` | `isArray` | Same |
| `isBoolean` | `isBoolean` | Same |
| `isDate` | `isDate` | Same |
| `isEmpty` | `isEmpty` | Same |
| `isFunction` | `isFunction` | Same |
| `isNumber` | `isNumber` | Same |
| `isObject` | `isObject` | Same |
| `isSet` | `isSet` | Same |
| `isString` | `isString` | Same |
| `isValidRegex` | — | helpers4 only |

## When to use which

| Scenario | Recommendation |
|----------|----------------|
| You need date formatting/comparison | **helpers4** (`@helpers4/date`) |
| You need URL path manipulation | **helpers4** (`@helpers4/url`) |
| You need semver parsing/comparison | **helpers4** (`@helpers4/version`) |
| You need RxJS observable combinators | **helpers4** (`@helpers4/observable`) |
| You need typed promise guards | **helpers4** (`@helpers4/promise`) |
| You need a general-purpose utility belt | **radashi** |
| You need both domain-specific and general utils | **both** — they work together |

## Summary

helpers4 and radashi are **complementary**. helpers4 focuses on domain-specific helpers (dates, URLs, semver, observables, promise guards) that general toolkit libraries like radashi don't provide. Where their features overlap (arrays, objects, strings, functions), helpers4 provides its own implementation with zero runtime dependencies.
