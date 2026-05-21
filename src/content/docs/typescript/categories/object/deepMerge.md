---
title: "deepMerge"
sidebar:
  label: "deepMerge"
---

Merges two or more objects deeply

> Available since v1.9.0

## Import

```ts
import { deepMerge } from '@helpers4/object';
```

## Signature


```ts
deepMerge<T extends Record<string, unknown>>(target: T, sources: Record<string, unknown>[]): T
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `target` | `T` | The target object |
| `sources` | `Record<string, unknown>[]` | The source objects to merge |

## Returns

`T` — The merged object

## Examples

### Merge two objects deeply

Recursively merges source properties into the target object.

```ts
deepMerge({ a: 1, b: { c: 2 } }, { b: { d: 3 }, e: 4 })
// => { a: 1, b: { c: 2, d: 3 }, e: 4 }
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/object/deepMerge.ts)
