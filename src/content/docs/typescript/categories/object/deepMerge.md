---
title: "deepMerge"
sidebar:
  label: "deepMerge"
---

Merges two or more objects deeply.

Recursively merges own enumerable properties — both string and symbol keys.
Plain objects are merged recursively; all other values (arrays, class instances,
primitives, etc.) are replaced by the source value.
`undefined` source values do not overwrite existing target values.

> Available since v1.9.0

## Import

```ts
import { deepMerge } from '@helpers4/object';
```

## Signature


```ts
deepMerge<T extends Record<PropertyKey, unknown>>(target: T, sources: Record<PropertyKey, unknown>[]): T
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `target` | `T` | The target object (mutated in place) |
| `sources` | `Record<PropertyKey, unknown>[]` | One or more source objects to merge into the target |

## Returns

`T` — The mutated target

## Examples

### Merge two objects deeply

Recursively merges source properties into the target object.

```ts
deepMerge({ a: 1, b: { c: 2 } }, { b: { d: 3 }, e: 4 })
// => { a: 1, b: { c: 2, d: 3 }, e: 4 }
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/object/deepMerge.ts)
