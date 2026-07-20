---
title: "mapDeep"
sidebar:
  label: "mapDeep"
---

Recursively transforms the keys and/or values of a plain object — the deep counterpart to
map, which only transforms the top level. Descends into nested plain objects and
arrays of them; `Date`, `Map`, `Set`, class instances, and primitives are left untouched
(only their position is walked into, matching cloneDeep's notion of what counts
as a plain-data node worth recursing into).

Both callbacks are optional and default to identity (no transformation). `mapKey` is called
with the *original* key and value (before any recursive value transform); `mapValue` receives
the already-recursed value. Entries whose mapped key is a prototype-polluting string
(`__proto__`, `constructor`, `prototype`) are silently skipped, same as map.

Array elements also go through `mapValue` (with their stringified index as `key`, since
arrays have no property keys of their own) — so values inside a plain array, not just object
properties, get transformed too. `mapKey` is never called for array elements, since there is
no key to rename.

> Available since v3.0.3

## Import

```ts
import { mapDeep } from '@helpers4/object';
```

## Signature


```ts
mapDeep<T>(obj: T, mapValue?: function, mapKey?: function): T
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `obj` | `T` | The value to transform \(typically an object, or an array of objects\) |
| `mapValue` | `function` | Callback called with \`\(value, key\)\` for each entry's \(already\-recursed\) value\.   For array elements, \`key\` is the element's index as a string\. Defaults to identity\. *(optional)* |
| `mapKey` | `function` | Callback called with \`\(key, value\)\` for each object entry\. Defaults to identity\. *(optional)* |

## Returns

`T` — A new value with every plain-object key/value transformed

## Examples

### Transform every key, recursively

Unlike map(), mapDeep() walks into nested objects and arrays of objects.

```ts
mapDeep({ a: { b: 1 } }, undefined, key => key.toUpperCase())
// => { A: { B: 1 } }
```

### Transform every value, recursively

Values are visited after their own nested content has already been transformed.

```ts
mapDeep({ a: { b: 1, c: 2 } }, v => typeof v === 'number' ? v * 10 : v)
// => { a: { b: 10, c: 20 } }
```

### Transform values inside arrays too

Array elements are visited by mapValue as well, keyed by their stringified index.

```ts
mapDeep({ tags: [1, 2, 3] }, v => typeof v === 'number' ? v * 10 : v)
// => { tags: [10, 20, 30] }
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/object/mapDeep.ts)
