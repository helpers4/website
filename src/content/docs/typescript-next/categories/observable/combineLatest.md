---
title: "combineLatest"
sidebar:
  label: "combineLatest"
---

Combines multiple Observables to create an Observable whose values are
calculated from the latest values of each of its input Observables.

This method relies on combineLatestOperator of rxjs.

The main difference with combineLatestOperator is in case of empty parameters.
If the parameter is empty (empty array or empty object), the result will be
also empty.

ATTENTION: this version doesn't support `scheduler` nor `mapper` as last
argument like in combineLatestOperator.

> Available since v1.0.0

## Import

```ts
import { combineLatest } from '@helpers4/observable';
```

## Signature


```ts
combineLatest<A extends readonly unknown[]>(sources: readonly [ObservableInputTuple<A>]): Observable<A>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `sources` | `readonly [ObservableInputTuple<A>]` |  |

## Returns

`Observable<A>` — 

## Examples

### Combine array of observables

Combines an array of observables into one that emits arrays of their latest values.

```ts
combineLatest([of(1), of(2), of(3)])
// emits [1, 2, 3]
```

### Handle empty array

Returns an observable that emits an empty array when given no sources.

```ts
combineLatest([])
// emits []
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/observable/combineLatest.ts)
