---
sidebar_label: "combine"
---

# combine

Combine two observables with a map function and an optional pre-treatment.

Note: you can use the pre-treatment to add a filter, a distinctUntilChanged,
any other operator that can be used in a pipe, or even an `UntilDestroy`
operator.

> Available since v1.0.0

## Import

```ts
import { combine } from '@helpers4/observable';
```

## Signature

```ts
combine<T, U, R>(source1: Observable<T>, source2: Observable<U>, map: function, options?: combineOptions<T, U>): Observable<R>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `source1` | `Observable<T>` | first source of data |
| `source2` | `Observable<U>` | second source of data |
| `map` | `function` | way to combine data |
| `options` | `combineOptions<T, U>` | options for the combineLatest operator *(optional)* |

## Returns

`Observable<R>` — an observable that emits the result of the map function

## Examples

### Combine two observables with a map

Combines the latest values of two observables using a mapping function.

```ts
combine(of(1), of(2), ([a, b]) => a + b)
// emits 3
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/observable/combine.ts)
