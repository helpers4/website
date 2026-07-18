---
title: "equalsShallow"
sidebar:
  label: "equalsShallow"
---

Positional, one-level (shallow) array equality.

Two arrays are equal when they have the same length and each pair of
elements at the same index satisfies strict equality (`===`). No
recursion: nested arrays/objects are compared by reference.

For recursive structural comparison use equalsDeep. For
order-independent comparison use equalsUnordered.

> Available since v2.0.0

## Import

```ts
import { equalsShallow } from '@helpers4/array';
```

## Signature


```ts
equalsShallow<T>(arrA: readonly T[], arrB: readonly T[]): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `arrA` | `readonly T[]` | First array to compare |
| `arrB` | `readonly T[]` | Second array to compare |

## Returns

`boolean` — `true` if every element matches by `===` at the same index, `false` otherwise.

## Examples

### Compare identical arrays

Uses JSON.stringify for a fast shallow comparison.

```ts
equalsShallow([1, 2, 3], [1, 2, 3])
// => true
```

### Detect order differences

Unlike equals, equalsShallow is order-sensitive.

```ts
equalsShallow([1, 2], [2, 1])
// => false
```

:::caution[Name conflict]
A helper named `equalsShallow` also exists in [`@helpers4/object`](../object/equalsshallow/). If you need both in the same file, rename at import with `as`:

```ts
import { equalsShallow as equalsShallow4array } from '@helpers4/array';
import { equalsShallow as equalsShallow4object } from '@helpers4/object';
```

See [Name Conflicts](../../reference/naming-conflicts/) for the full resolution guide.
:::

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v2/helpers/array/equalsShallow.ts)
