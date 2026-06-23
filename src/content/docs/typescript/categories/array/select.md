---
title: "select"
sidebar:
  label: "select"
---

Filters and transforms an array in a single pass.

Similar to `.filter(condition).map(mapper)` but iterates the array only once.
**Index semantics differ from `.filter().map()`:** the `index` passed to both
`condition` and `mapper` is the index in the **original** array, not the
post-filter position. Use index-agnostic callbacks when the two must behave
identically.

> Available since v2.0.3

## Import

```ts
import { select } from '@helpers4/array';
```

## Signature


```ts
select<T, U>(array: readonly T[] | null | undefined, mapper: function, condition: function): U[]
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `array` | `readonly T[] \| null \| undefined` | The array to process |
| `mapper` | `function` | Transforms each item that passes the condition |
| `condition` | `function` | Determines which items to include; defaults to keeping all items |

## Returns

`U[]` — Mapped values for items that pass the condition

## Examples

### Filter and transform in one pass

Keeps only items matching the condition and transforms them — equivalent to .filter().map() but with a single iteration.

```ts
select([1, 2, 3, 4, 5], x => x * 2, x => x % 2 === 0)
// => [4, 8]
```

### Extract a field from matching objects

Filter on a condition and pluck a specific property in a single readable call.

```ts
const users = [
  { name: 'Alice', active: true },
  { name: 'Bob',   active: false },
  { name: 'Carol', active: true },
];
select(users, u => u.name, u => u.active)
// => ['Alice', 'Carol']
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/select.ts)
