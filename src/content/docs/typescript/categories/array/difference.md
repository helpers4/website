---
title: "difference"
sidebar:
  label: "difference"
---

Returns the difference between two arrays (items in first array but not in second).
`null` and `undefined` are treated as empty arrays:
`difference(null, b)` → `[]`; `difference(a, null)` → copy of `a`.

> Available since v1.9.0

## Import

```ts
import { difference } from '@helpers4/array';
```

## Signature


```ts
difference<T>(array1: readonly T[] | null | undefined, array2: readonly T[] | null | undefined): T[]
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `array1` | `readonly T[] \| null \| undefined` | First array |
| `array2` | `readonly T[] \| null \| undefined` | Second array |

## Returns

`T[]` — Array with items from first array not present in second array

## Examples

### Get items only in the first array

Returns elements present in the first array but not in the second.

```ts
difference([1, 2, 3, 4], [2, 4])
// => [1, 3]
```

:::caution[Name conflict]
A helper named `difference` also exists in [`@helpers4/date`](../date/difference/). If you need both in the same file, rename at import with `as`:

```ts
import { difference as difference4array } from '@helpers4/array';
import { difference as difference4date } from '@helpers4/date';
```

See [Name Conflicts](../../reference/naming-conflicts/) for the full resolution guide.
:::

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/difference.ts)
