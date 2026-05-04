---
title: "deepClone"
sidebar:
  label: "deepClone"
---

# deepClone

Creates a deep copy of an object or array

> Available since v1.9.0

## Import

```ts
import { deepClone } from '@helpers4/object';
```

## Signature


```ts
deepClone<T>(obj: T): T
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `obj` | `T` | The object to clone |

## Returns

`T` — Deep cloned object

## Examples

### Clone a nested object

Creates a deep copy — modifying the clone does not affect the original.

```ts
const original = { a: { b: 1 } };
const cloned = deepClone(original);
cloned.a.b = 2;
// original.a.b is still 1
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/object/deepClone.ts)
