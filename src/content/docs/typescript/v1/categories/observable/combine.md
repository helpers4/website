---
title: "combine"
sidebar:
  label: "combine"
---

Combine two observables with a map function and an optional pre-treatment.

You can use the pre-treatment to add a filter, a `distinctUntilChanged`, or any other operator
that can be used in a pipe, applied to each source before it is combined.

> Available since v1.0.1

## Import

```ts
import { combine } from '@helpers4/observable';
```

## Signature

```ts
combine<T, U, R>(
  source1: Observable<T>,
  source2: Observable<U>,
  map: (c: readonly [T, U]) => R,
  options?: { preTreatment?: OperatorFunction<readonly [T, U], readonly [T, U]> }
): Observable<R>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `source1` | `Observable<T>` | First source of data. |
| `source2` | `Observable<U>` | Second source of data. |
| `map` | `(c: readonly [T, U]) => R` | Way to combine the two latest values into the result. |
| `options` | `combineOptions<T, U>` | Optional. `preTreatment` — an operator (filter, `distinctUntilChanged`, ...) applied to the paired `[T, U]` values before `map` runs. |

## Returns

`Observable<R>` — An observable that emits the result of `map` every time either source emits.

## Examples

### Combine two intervals

```ts
import { combine } from '@helpers4/observable';
import { interval } from 'rxjs';

const seconds = interval(1000);
const halfSeconds = interval(500);

combine(seconds, halfSeconds, ([s, hs]) => `${s}s / ${hs}half-s`).subscribe(console.log);
```

## Source

[View on npm](https://www.npmjs.com/package/@helpers4/observable/v/1.0.1)
