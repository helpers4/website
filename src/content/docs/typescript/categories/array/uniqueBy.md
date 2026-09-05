---
title: "uniqueBy"
sidebar:
  label: "uniqueBy"
description: "Removes duplicate items from an array, using a derived key instead of value equality."
version: "3.1.0"
---

Removes duplicate items from an array, using a derived key instead of value equality.
Unlike unique, which compares values directly, `uniqueBy` lets two different
objects be considered duplicates if `keyFn` derives the same key for both.
`null` and `undefined` are treated as empty arrays and return `[]`.

> Available since v3.0.8

## Import

```ts
import { uniqueBy } from '@helpers4/array';
```

## Signature


```ts
uniqueBy<T, K>(array: readonly T[] | null | undefined, keyFn: function, options: UniqueByOptions): T[]
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `array` | `readonly T[] \| null \| undefined` | The array to remove duplicates from |
| `keyFn` | `function` | Derives the dedup key for an item |
| `options` | `UniqueByOptions` | Options |

## Returns

`T[]` — New array with one item per distinct key, in first-occurrence order

## Examples

### Deduplicate by a derived key, keeping the first occurrence

Two different objects are considered duplicates when keyFn derives the same key for both.

```ts
uniqueBy(
  [{ id: 1, v: 'a' }, { id: 2, v: 'b' }, { id: 1, v: 'c' }],
  (item) => item.id,
)
// => [{ id: 1, v: 'a' }, { id: 2, v: 'b' }]
```

### Keep the last occurrence instead

Pass { keep: "last" } to keep the last item seen for each key, instead of the first.

```ts
uniqueBy(
  [{ id: 1, v: 'a' }, { id: 2, v: 'b' }, { id: 1, v: 'c' }],
  (item) => item.id,
  { keep: 'last' },
)
// => [{ id: 1, v: 'c' }, { id: 2, v: 'b' }]
```

## Related Types

### `UniqueByOptions`

Options for uniqueBy.

```ts
interface UniqueByOptions {
  keep?: "first" | "last";
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/uniqueBy.ts)
