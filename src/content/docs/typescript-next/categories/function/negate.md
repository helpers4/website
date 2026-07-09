---
title: "negate"
sidebar:
  label: "negate"
---

Creates a function that negates the result of `predicate`.

> Available since v2.0.0

## Import

```ts
import { negate } from '@helpers4/function';
```

## Signature


```ts
negate<T extends unknown[]>(predicate: function): function
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `predicate` | `function` | A predicate function returning a boolean. |

## Returns

`function` — A new function that returns the logical negation of `predicate`.

## Examples

### Derive isOdd from isEven

Returns a function that inverts the boolean result of the given predicate.

```ts
const isEven = (n: number) => n % 2 === 0;
const isOdd = negate(isEven);
isOdd(3); // => true
isOdd(4); // => false
```

### Use as a filter predicate

negate is ideal for inverting predicates passed to Array.filter.

```ts
const isEmpty = (arr: unknown[]) => arr.length === 0;
[[], [1], [], [2, 3]].filter(negate(isEmpty))
// => [[1], [2, 3]]
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/function/negate.ts)
