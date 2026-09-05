---
title: "isWeakSet"
sidebar:
  label: "isWeakSet"
description: "Checks if a value is a WeakSet instance."
version: "3.1.1"
---

Checks if a value is a WeakSet instance.

> Available since v3.0.0

## Import

```ts
import { isWeakSet } from '@helpers4/guard';
// or, from the all-in-one package (same code, one install):
import { isWeakSet } from 'helpers4/guard';
```

## Signature


```ts
isWeakSet(value: unknown): value is WeakSet<object>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is WeakSet<object>` — True if value is a WeakSet

## Examples

### Check whether a value is a WeakSet

Distinguishes WeakSet from the regular (iterable) Set.

```ts
isWeakSet(new WeakSet()) // => true
isWeakSet(new Set())     // => false
```

### Arrays are not WeakSets

Only real WeakSet instances pass.

```ts
isWeakSet([1, 2, 3])
// => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/guard/isWeakSet.ts)
