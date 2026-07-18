---
title: "toggle"
sidebar:
  label: "toggle"
---

Returns a new array with `item` removed if present, or appended if absent —
the common "toggle a selection" pattern.

By default, presence is checked with `SameValueZero` equality (like
`Array.prototype.includes`). Pass `key` to compare by a derived identity
instead — useful for toggling objects by id rather than by reference.

> Available since v3.0.0

## Import

```ts
import { toggle } from '@helpers4/array';
```

## Signature


```ts
toggle<T>(array: readonly T[] | null | undefined, item: T, key?: function): T[]
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `array` | `readonly T[] \| null \| undefined` | The source array. `null`/`undefined` are treated as empty. |
| `item` | `T` | The item to add or remove |
| `key` | `function` | Optional function deriving the identity to compare by *(optional)* |

## Returns

`T[]` — A new array with `item` toggled

## Examples

### Toggle a selection

Common pattern for multi-select UI state — add if absent, remove if present.

```ts
toggle([1, 2, 3], 2)
// => [1, 3]
toggle([1, 3], 2)
// => [1, 3, 2]
```

### Toggle objects by a derived key

Pass a key selector to compare by id instead of object reference.

```ts
const selected = [{ id: 1 }, { id: 2 }];
toggle(selected, { id: 1 }, (x) => x.id)
// => [{ id: 2 }]
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/toggle.ts)
