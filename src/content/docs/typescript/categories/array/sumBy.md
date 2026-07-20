---
title: "sumBy"
sidebar:
  label: "sumBy"
---

Calculates the sum of numbers derived from each item of an array via an iteratee.
`null` and `undefined` are treated as empty arrays and return `0`.

> Available since v3.0.3

## Import

```ts
import { sumBy } from '@helpers4/array';
```

## Signature


```ts
sumBy<T>(array: readonly T[] | null | undefined, accessor: ByAccessor<T>): number
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `array` | `readonly T[] \| null \| undefined` | The array of items to sum |
| `accessor` | `ByAccessor<T>` | Function deriving a number from each item, or a property path |

## Returns

`number` — The sum of all derived values, or `0` for an empty array, `null`, or `undefined`

## Examples

### Sum a property across objects

Sums a derived numeric value instead of the items themselves.

```ts
sumBy([{ price: 10 }, { price: 20 }], item => item.price)
// => 30
```

### Use a property path instead of a function

A string (or key array) path is shorthand for a getter function.

```ts
sumBy([{ price: 10 }, { price: 20 }], 'price')
// => 30
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/sumBy.ts)
