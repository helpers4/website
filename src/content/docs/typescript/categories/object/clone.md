---
title: "clone"
sidebar:
  label: "clone"
---

Creates a shallow copy of a value — one level deep, unlike cloneDeep.

Unlike a plain `{ ...value }` spread, this correctly reconstructs `Date`,
`Map`, `Set`, and arrays instead of producing an empty (or wrong-shaped)
plain object for them. Primitives are returned as-is. Any other object
(including class instances not listed above) has its own enumerable string
keys shallow-copied into a plain object — the same fallback `cloneDeep`
uses, so the two stay consistent for types neither one special-cases.

> Available since v3.0.0

## Import

```ts
import { clone } from '@helpers4/object';
```

## Signature


```ts
clone<T>(value: T): T
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `T` | The value to shallow\-clone |

## Returns

`T` — A shallow copy of `value`

## Examples

### Shallow-copy a plain object

Top-level keys are copied; nested values still share references (shallow).

```ts
const obj = { a: 1, b: { c: 2 } };
const copy = clone(obj);
copy.b === obj.b // => true (same nested reference)
```

### Correctly clones Date/Map/Set, unlike a spread

{ ...new Date() } produces {} — clone() doesn't have that problem.

```ts
clone(new Map([['a', 1]]))
// => new Map with the same entries, not {}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/object/clone.ts)
