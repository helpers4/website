---
title: "groupBy"
sidebar:
  label: "groupBy"
---

Groups an array of items by a key derived from each item.

A thin, typed wrapper around `Object.groupBy` (ES2024) that works on
older targets and provides stricter return-type inference.
`null` and `undefined` are treated as empty arrays and return `{}`.
Items whose computed key is a prototype-polluting string (`__proto__`,
`constructor`, `prototype`) are silently skipped.

> Available since v2.0.0

## Import

```ts
import { groupBy } from '@helpers4/object';
```

## Signature


```ts
groupBy<T, K extends PropertyKey>(items: readonly T[] | null | undefined, keyFn: function): Partial<Record<K, T[]>>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `items` | `readonly T[] \| null \| undefined` | The array to group |
| `keyFn` | `function` | Function that returns the group key for each item |

## Returns

`Partial<Record<K, T[]>>` — A record mapping each key to the array of items with that key

## Examples

### Group numbers by parity

Groups elements by the string key returned by the callback.

```ts
groupBy([1, 2, 3, 4], n => n % 2 === 0 ? 'even' : 'odd')
// => { odd: [1, 3], even: [2, 4] }
```

### Group objects by a property

Use a property accessor as the grouping key.

```ts
const users = [
  { name: 'Alice', role: 'admin' },
  { name: 'Bob',   role: 'user'  },
  { name: 'Carol', role: 'admin' },
];
groupBy(users, u => u.role)
// => { admin: [{...Alice}, {...Carol}], user: [{...Bob}] }
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/object/groupBy.ts)
