---
title: "helpers4 vs Alternative Libraries"
sidebar:
  label: "Alternative Libraries"
  order: 0
---

A comparison of helpers4 with popular TypeScript/JavaScript utility libraries.

## Overview

| Library | Functions | Size (min+gz) | Tree-shakable | TypeScript | Dependencies | License | Maintained |
|---------|:---------:|:-------------:|:-------------:|:----------:|:------------:|:-------:|:----------:|
| **helpers4** | 274 | few B/fn | ESM (per-function + per-package) | native | 0 | LGPL-3.0 | Yes |
| **radashi** | ~130 | ~15 KB | ESM | native | 0 | MIT | Yes |
| **radash** | ~90 | ~12 KB | ESM | native | 0 | MIT | No (archived) |
| **lodash** | ~300 | ~70 KB | via lodash-es | `@types/lodash` | 0 | MIT | Low |
| **es-toolkit** | ~300 | few B/fn | ESM (per-function) | native | 0 | MIT | Yes (very active) |
| **remeda** | ~100 | ~10 KB | ESM | native | 0 | MIT | Yes |
| **ramda** | ~200 | ~45 KB | limited | `@types/ramda` | 0 | MIT | Low |
| **rambda** | ~190 | ~15 KB | ESM | native | 0 | MIT | Yes |
| **moderndash** | ~50 | ~5 KB | ESM | native | 2 (type-only) | MIT | Yes |

helpers4 and es-toolkit ship per-function sizes (via [Bundlephobia](https://bundlephobia.com):
helpers4 ~200 B/fn, es-toolkit ~200 B–1.2 KB/fn) rather than a single whole-library figure — both
are granular enough that "size" only means something per import, not for the package as a whole.

## helpers4 vs Radashi

[Radashi](https://radashi.js.org) (~130 functions, the maintained fork of Radash) provides
low-level data primitives (sort, group, clone, pick, map); helpers4 provides ready-made solutions
for domain problems radashi deliberately excludes (dates, URLs, semver, observables). They're
**complementary** — see the [detailed comparison](./radashi/).

## helpers4 vs Radash

[Radash](https://github.com/rayepps/radash) is the predecessor of radashi and is **archived, no
longer maintained**. If you're on radash, migrate to [radashi](./radashi/) (its maintained fork);
add helpers4 alongside it if you also need date/URL/version/observable helpers.

## helpers4 vs Lodash

[Lodash](https://lodash.com/) is the most popular JS utility library (~300 functions), built for
a pre-ES2015 world and still ES5-compatible. helpers4 is modern (ES2024+), minimal, and focused
on gaps lodash doesn't cover (dates, URLs, semver, observables, typed promise guards) rather than
competing on raw function count — see the [detailed comparison](./lodash/).

## helpers4 vs es-toolkit

[es-toolkit](https://es-toolkit.dev) (~300 functions, maintained by Toss/Viva Republica) is a
fast, modern, fully tree-shakable lodash replacement — the most actively developed library in
this comparison — that also reaches into `Map`/`Set` utilities and concurrency primitives
(`Mutex`, `Semaphore`) helpers4 doesn't touch. helpers4 still covers its own domain-specific
ground (dates, URLs, semver, observables, Temporal guards) that es-toolkit's scope never aimed
for. See the [detailed comparison](./es-toolkit/).

## helpers4 vs Remeda

[Remeda](https://remedajs.com/) is a TypeScript-first library built around a dual
data-first/data-last `pipe()` with lazy evaluation and strong type inference. helpers4 also ships
a pipe (`pipe()`/`compose()`/`curry()`, eager) plus its own domain-specific utilities. They serve
different purposes and can be combined — see the [detailed comparison](./remeda/).

## helpers4 vs Ramda

[Ramda](https://ramdajs.com/) is a purely functional, auto-curried library (lenses, transducers,
point-free style) for FP purists — low maintenance activity these days. helpers4 is pragmatic
utility-first, not point-free. If you want the same FP style actively maintained and
TypeScript-native, see [Rambda](#helpers4-vs-rambda) below instead.

## helpers4 vs Rambda

[Rambda](https://selfrefactor.github.io/rambda/) is the actively-maintained, TypeScript-native
alternative in Ramda's curried/point-free space (last published 2026-05-15). It doesn't reach
into any of helpers4's domain-specific categories — synchronous data transforms only, no
date/URL/semver/observable/promise coverage. See the [detailed comparison](./rambda/).

## helpers4 vs Moderndash

[Moderndash](https://moderndash.io) is a smaller (~50 functions), newer TypeScript-first
lodash-inspired library covering array/object/string/number basics, plus a small Promise category
(`sleep`, `timeout`, `retry`, `Queue`) — conceptually similar to the concurrency gaps also found
in es-toolkit. Roughly a sixth of helpers4's function count, no domain-specific coverage
(dates, URLs, semver, observables).

## Feature matrix

What each library covers — and what helpers4 uniquely provides:

| Category | helpers4 | radashi | lodash | es-toolkit | remeda | ramda | rambda |
|----------|:--------:|:-------:|:------:|:----------:|:------:|:-----:|:------:|
| Array manipulation | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Object manipulation | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| String manipulation | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Type checking | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Number utilities | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Function utilities | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Date utilities** | ✅ | — | — | — | — | — | — |
| **URL utilities** | ✅ | — | — | — | — | — | — |
| **Semver utilities** | ✅ | — | — | — | — | — | — |
| **Observable utilities** | ✅ | — | — | — | — | — | — |
| **Promise guards** | ✅ | — | — | — | — | — | — |
| Async/parallel | ✅ | ✅ | — | ✅ | — | — | — |
| **`Map`/`Set` utilities** | — | — | — | ✅ | — | — | — |
| **Concurrency primitives** (Mutex/Semaphore/timeout) | — | — | — | ✅ | — | — | — |
| Pipe/compose | ✅ | — | `_.chain` | ✅ (`flow`) | ✅ | ✅ | ✅ |
| FP (curry, lenses) | ✅ (curry only) | — | `_.curry` | ✅ (curry only) | — | ✅ | ✅ (no curry) |
| Random/shuffle | — | ✅ | ✅ | ✅ | — | — | — |
| Collection chaining | — | — | ✅ | — | ✅ | ✅ | ✅ |
| Statistics (median/percentile) | — | — | — | ✅ | — | — | — |

Rows in **bold** are gaps on the helpers4 side worth tracking — see `typescript/TODO.md` for the prioritized list.

## Choosing the right library

| You need... | Best choice |
|------------|-------------|
| Date formatting, comparison, normalization | **helpers4** |
| URL path manipulation | **helpers4** |
| Semver parsing and comparison | **helpers4** |
| RxJS observable utilities | **helpers4** |
| Typed promise assertions | **helpers4** |
| General-purpose modern toolkit | **radashi** |
| Fastest/smallest lodash replacement, migrating from lodash | **es-toolkit** |
| `Map`/`Set` utilities, `Mutex`/`Semaphore`, `median`/`percentile` | **es-toolkit** |
| Pipe-based data transformations | **remeda** |
| Functional programming (currying, lenses) | **ramda** or **rambda** |
| Maximum function coverage, legacy support | **lodash** |
| Multiple needs | **helpers4 + radashi** or **helpers4 + es-toolkit** (they're complementary) |
