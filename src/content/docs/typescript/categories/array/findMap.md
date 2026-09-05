---
title: "findMap"
sidebar:
  label: "findMap"
description: "Returns the first non-`undefined` result of mapping `fn` over `array`, short-circuiting as soon as one is found."
version: "3.1.1"
---

Returns the first non-`undefined` result of mapping `fn` over `array`, short-circuiting as
soon as one is found. Similar to `array.map(fn).find(v => v !== undefined)`, but doesn't map
(or call `fn` on) the remaining items once a match is found.

`null` and `undefined` are treated as empty arrays and return `undefined`.

> Available since v3.1.1

## Import

```ts
import { findMap } from '@helpers4/array';
// or, from the all-in-one package (same code, one install):
import { findMap } from 'helpers4/array';
```

## Signature


```ts
findMap<T, R>(array: readonly T[] | null | undefined, fn: function): R | undefined
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `array` | `readonly T[] \| null \| undefined` | The array to search |
| `fn` | `function` | Maps each item \(and its index\) to a result, or \`undefined\` to keep looking |

## Returns

`R | undefined` — The first non-`undefined` result of `fn`, or `undefined` if none was found

## Examples

### Find the first transformed match

Returns the mapped value, not the original item — stops as soon as one is found.

```ts
findMap([1, 2, 3, 4], n => (n % 2 === 0 ? n * 10 : undefined))
// => 20
```

### Try several fallible lookups in priority order

Chain several `?? `-style lookups per item and stop at the first one that succeeds anywhere in the array.

```ts
const byId = new Map([[2, 'b']]);
findMap([1, 2, 3], id => byId.get(id))
// => 'b'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/findMap.ts)
