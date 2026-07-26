---
title: "helpers4 vs Alternative Libraries"
sidebar:
  label: "Alternative Libraries"
  order: 0
---

A comparison of helpers4 with popular TypeScript/JavaScript utility libraries.

## Overview

| Library | Functions | API Style | Architecture | Tree-shakable | TypeScript | License | Maintained |
|---------|:---------:|:-------------:|:-------------:|:-------------:|:----------:|:-------:|:----------:|
| **helpers4** | 312 | <span class="cell-highlight">Direct</span> | <span class="cell-highlight">Modular</span> | <span class="cell-highlight">ESM</span> | <span class="cell-highlight">native</span> | LGPL | Yes |
| **radashi** | ~130 | <span class="cell-highlight">Direct</span> | Monolith | <span class="cell-highlight">ESM</span> | <span class="cell-highlight">native</span> | MIT | Yes |
| **radash** | ~90 | <span class="cell-highlight">Direct</span> | Monolith | <span class="cell-highlight">ESM</span> | <span class="cell-highlight">native</span> | MIT | No |
| **lodash** | ~300 | Chainable | Monolith | opt-in | unofficial | MIT | Low |
| **es-toolkit** | ~300 | <span class="cell-highlight">Direct</span> | Monolith | <span class="cell-highlight">ESM</span> | <span class="cell-highlight">native</span> | MIT | Highly |
| **remeda** | ~100 | Pipe | Monolith | <span class="cell-highlight">ESM</span> | <span class="cell-highlight">native</span> | MIT | Yes |
| **ramda** | ~200 | Curried | Monolith | limited | unofficial | MIT | Low |
| **rambda** | ~190 | Curried | Monolith | <span class="cell-highlight">ESM</span> | <span class="cell-highlight">native</span> | MIT | Yes |
| **moderndash** | ~50 | <span class="cell-highlight">Direct</span> | Monolith | <span class="cell-highlight">ESM</span> | <span class="cell-highlight">native</span> | MIT | Yes |

**Glossary** — <span class="cell-highlight">highlighted</span> cells in the table above call out
helpers4's values for each column.

| Term | Meaning |
|------|---------|
| <span class="cell-regular">Direct</span> | call the function directly, `fn(x)` |
| <span class="cell-regular">Chainable</span> | wrap the value in a chain object, `_(x).map(f).value()` |
| <span class="cell-regular">Pipe</span> | compose functions left-to-right, `pipe(x, fn1, fn2)` |
| <span class="cell-regular">Curried</span> | functions take one argument at a time, `fn(a)(b)`, point-free style |
| <span class="cell-regular">Modular</span> | split into independent packages, install only what you use |
| <span class="cell-regular">Monolith</span> | one package containing everything |

## helpers4 vs Radashi

[Radashi](https://radashi.js.org) (~130 functions, the maintained fork of Radash) is a lean,
single-package set of general-purpose data primitives (sort, group, clone, pick, map). helpers4
covers that same general-purpose ground — its array/object/string/number/function/type/guard
categories alone already outnumber radashi's entire function count — and adds what radashi
deliberately excludes (dates, URLs, semver, observables). Pick radashi for the smallest possible
single-package toolkit with no domain extras; pick helpers4 for that same ground plus the gaps
covered too — see the [detailed comparison](./radashi/).

## helpers4 vs Radash

[Radash](https://github.com/rayepps/radash) is the predecessor of radashi and is **archived, no
longer maintained**. If you're on radash, migrate to [radashi](./radashi/) (its maintained fork) —
or straight to helpers4, which covers the same general-purpose ground plus date/URL/version/
observable helpers neither radash nor radashi has.

## helpers4 vs Lodash

[Lodash](https://lodash.com/) is the most popular JS utility library (~300 functions), built for
a pre-ES2015 world and still ES5-compatible. helpers4 is a modern (ES2024+), fully tree-shakable
alternative with comparable raw coverage (312 functions) plus what lodash never had — dates, URLs,
semver, observables, typed promise guards — see the [detailed comparison](./lodash/).

## helpers4 vs es-toolkit

[es-toolkit](https://es-toolkit.dev) (~300 functions, maintained by Toss/Viva Republica) is a
fast, modern, fully tree-shakable lodash replacement — the most actively developed library in
this comparison. It used to be the only one here with `Map`/`Set` utilities and concurrency
primitives (`Mutex`, `Semaphore`); as of helpers4 v3.0.5 both now cover that ground, so the real
remaining gap is narrower — es-toolkit's async-aware array iteration (`flatMapAsync`,
`reduceAsync`, `limitAsync`) is still more complete. helpers4 still covers its own domain-specific
ground (dates, URLs, semver, observables, Temporal guards) that es-toolkit's scope never aimed
for. See the [detailed comparison](./es-toolkit/).

## helpers4 vs Remeda

[Remeda](https://remedajs.com/) is a TypeScript-first library built around a dual
data-first/data-last `pipe()` with lazy evaluation and strong type inference. helpers4 ships its
own pipe (`pipe()`/`compose()`/`curry()`, eager) plus general-purpose and domain-specific
utilities across 20 categories. They optimize for different things and can be combined — see the
[detailed comparison](./remeda/).

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
| `Map`/`Set` utilities | ✅ | — | — | ✅ | — | — | — |
| Concurrency primitives | ✅ | — | — | ✅ | — | — | — |
| Pipe/compose | ✅ | — | `_.chain` | ✅ (`flow`) | ✅ | ✅ | ✅ |
| FP (curry, lenses) | ✅ (curry only) | — | `_.curry` | ✅ (curry only) | — | ✅ | ✅ (no curry) |
| Random/shuffle | — | ✅ | ✅ | ✅ | — | — | — |
| Collection chaining | — | — | ✅ | — | ✅ | ✅ | ✅ |
| Statistics (median/percentile) | ✅ | — | — | ✅ | — | — | — |
| **Async-aware array iteration** | ✅ (partial) | — | — | ✅ (full) | — | — | — |

Rows in **bold** are gaps on the helpers4 side worth tracking — see `typescript/TODO.md` for the
prioritized list. `Map`/`Set` utilities, concurrency primitives, and statistics moved out of bold
as of v3.0.5 — helpers4 added `@helpers4/map`, `@helpers4/set`, `createMutex`/`createSemaphore`,
and `median`/`percentile`/`meanBy`/`sumBy`, closing what used to be es-toolkit-only ground. See the
[detailed comparison](./es-toolkit/) for exactly how close the parity is on each.

## Choosing the right library

| You need... | Best choice |
|------------|-------------|
| Date formatting, comparison, normalization | **helpers4** |
| URL path manipulation | **helpers4** |
| Semver parsing and comparison | **helpers4** |
| RxJS observable utilities | **helpers4** |
| Typed promise assertions | **helpers4** |
| General-purpose utilities *and* domain-specific gaps, in one modular toolkit | **helpers4** |
| Single all-in-one package, no specific domain need | **radashi** |
| Fastest/smallest lodash replacement, migrating from lodash | **es-toolkit** |
| Full async array iteration (`flatMapAsync`, `reduceAsync`, concurrency-limited `limitAsync`) | **es-toolkit** |
| Pipe-based data transformations | **remeda** |
| Functional programming (currying, lenses) | **ramda** or **rambda** |
| Maximum function coverage, legacy support | **lodash** |
| Multiple needs | **helpers4 + radashi** or **helpers4 + es-toolkit** (they're complementary) |
