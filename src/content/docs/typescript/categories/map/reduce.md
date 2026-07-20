---
title: "reduce"
sidebar:
  label: "reduce"
---

Reduces a Map to a single value by applying a function to each entry, in insertion order.

> Available since v3.0.3

## Import

```ts
import { reduce } from '@helpers4/map';
```

## Signature


```ts
reduce<K, V, R>(map: ReadonlyMap<K, V>, fn: function, initial: R): R
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `map` | `ReadonlyMap<K, V>` | The Map to reduce |
| `fn` | `function` | Function invoked with \(accumulator, value, key\) |
| `initial` | `R` | Initial accumulator value |

## Returns

`R` — The final accumulator value

## Examples

### Sum all values

Reduces a Map of numbers to their total.

```ts
reduce(new Map([['a', 1], ['b', 2], ['c', 3]]), (acc, value) => acc + value, 0)
// => 6
```

### Build an array of keys

Reduce can produce a completely different shape than the map values.

```ts
reduce(new Map([['a', 1], ['b', 2]]), (acc: string[], _v, key) => [...acc, key], [])
// => ['a', 'b']
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/map/reduce.ts)
