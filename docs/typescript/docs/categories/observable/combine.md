---
sidebar_label: "combine"
---

# combine

Combine two observables with a map function and an optional pre-treatment.

Note: you can use the pre-treatment to add a filter, a distinctUntilChanged,
any other operator that can be used in a pipe, or even an `UntilDestroy`
operator.

## Import

```ts
import { combine } from '@helpers4/observable';
```

## Signature

```ts
function combine<T, U, R>( source1: Observable<T>, source2: Observable<U>, map: (c: readonly [T, U]) => R, options?: combineOptions<T, U> ): Observable<R>
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `source1` | first source of data |
| `source2` | second source of data |
| `map` | way to combine data |
| `options` | options for the combineLatest operator |

## Returns

an observable that emits the result of the map function

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/observable/combine.ts)
