---
title: "cloneDeep"
sidebar:
  label: "cloneDeep"
---

Creates a deep copy of an object or array.

Recursively clones own enumerable string keys. `Date` instances are
reconstructed with the same epoch value. Prototype-polluting keys
(`__proto__`, `constructor`, `prototype`) are silently skipped.
Does **not** handle circular references.

**Limitation:** symbol-keyed own properties are **not** copied — only string
keys are processed. Use `structuredClone` if symbol propagation is required.

> Available since v1.9.0

## Import

```ts
import { cloneDeep } from '@helpers4/object';
```

## Signature


```ts
cloneDeep<T>(obj: T): T
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `obj` | `T` | The value to clone |

## Returns

`T` — A deep copy of `obj`

## Examples

### Clone a nested object

Creates a deep copy — modifying the clone does not affect the original.

```ts
const original = { a: { b: 1 } };
const cloned = cloneDeep(original);
cloned.a.b = 2;
// original.a.b is still 1
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/object/cloneDeep.ts)
