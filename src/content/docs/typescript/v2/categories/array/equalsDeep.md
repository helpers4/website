---
title: "equalsDeep"
sidebar:
  label: "equalsDeep"
---

Recursive structural array equality.

Two arrays are equal when they have the same length and each pair of
elements at the same index is structurally equal:
- Arrays recurse with `equalsDeep`.
- Plain objects recurse key-by-key with structural comparison.
- `Date` instances are compared by their epoch value.
- All other values use strict equality (`===`), which means `NaN !== NaN`
  and special objects (Map, Set, RegExp, Promise, class instances\u2026) are
  compared by reference.

For positional one-level comparison use equalsShallow. For
order-independent comparison use equalsUnordered.

> Available since v2.0.0

## Import

```ts
import { equalsDeep } from '@helpers4/array';
```

## Signature


```ts
equalsDeep<T>(arrA: readonly T[], arrB: readonly T[]): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `arrA` | `readonly T[]` | First array to compare |
| `arrB` | `readonly T[]` | Second array to compare |

## Returns

`boolean` — `true` if arrays are deeply equal, `false` otherwise.

## Examples

### Compare nested arrays

Deeply compares two arrays including nested structures.

```ts
equalsDeep([[1, 2], [3]], [[1, 2], [3]])
// => true
```

### Detect nested differences

Returns false when nested arrays differ.

```ts
equalsDeep([[1, 2]], [[1, 3]])
// => false
```

:::caution[Name conflict]
A helper named `equalsDeep` also exists in [`@helpers4/object`](../object/equalsdeep/). If you need both in the same file, rename at import with `as`:

```ts
import { equalsDeep as equalsDeep4array } from '@helpers4/array';
import { equalsDeep as equalsDeep4object } from '@helpers4/object';
```

See [Name Conflicts](../../reference/naming-conflicts/) for the full resolution guide.
:::

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v2/helpers/array/equalsDeep.ts)
