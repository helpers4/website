---
title: "meanBy"
sidebar:
  label: "meanBy"
---

Calculates the arithmetic mean of numbers derived from each item of an array via an iteratee.
Returns `NaN` for an empty array, `null`, or `undefined` — matching sumBy, which
treats `null`/`undefined` as empty rather than throwing.

Pairs with sumBy for aggregate operations.

> Available since v3.0.3

## Import

```ts
import { meanBy } from '@helpers4/array';
```

## Signature


```ts
meanBy<T>(array: readonly T[] | null | undefined, accessor: ByAccessor<T>): number
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `array` | `readonly T[] \| null \| undefined` | The array of items to average |
| `accessor` | `ByAccessor<T>` | Function deriving a number from each item, or a property path |

## Returns

`number` — The arithmetic mean of the derived values, or `NaN` if the array is empty, `null`, or `undefined`

## Examples

### Average a property across objects

Averages a derived numeric value instead of the items themselves.

```ts
meanBy([{ price: 10 }, { price: 20 }], item => item.price)
// => 15
```

### Use a property path instead of a function

A string (or key array) path is shorthand for a getter function.

```ts
meanBy([{ price: 10 }, { price: 20 }], 'price')
// => 15
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/meanBy.ts)
