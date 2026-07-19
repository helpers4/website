---
title: "replaceOrAppend"
sidebar:
  label: "replaceOrAppend"
---

Returns a new array with the first item matching `predicate` replaced by
`item` — or `item` appended at the end if no match is found. The common
"upsert into a list" pattern.

> Available since v3.0.0

## Import

```ts
import { replaceOrAppend } from '@helpers4/array';
```

## Signature


```ts
replaceOrAppend<T>(array: readonly T[] | null | undefined, item: T, predicate: function): T[]
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `array` | `readonly T[] \| null \| undefined` | The source array\. \`null\`/\`undefined\` are treated as empty\. |
| `item` | `T` | The replacement \(or new\) item |
| `predicate` | `function` | Called with each existing item to find what to replace |

## Returns

`T[]` — A new array with `item` upserted

## Examples

### Upsert an item into a list

Replaces the first match, or appends when nothing matches.

```ts
const users = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }];
replaceOrAppend(users, { id: 1, name: 'A' }, (u) => u.id === 1)
// => [{ id: 1, name: 'A' }, { id: 2, name: 'b' }]
```

### Appends when no item matches

A missing id is added at the end rather than silently dropped.

```ts
replaceOrAppend([{ id: 1 }], { id: 2 }, (u) => u.id === 2)
// => [{ id: 1 }, { id: 2 }]
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/replaceOrAppend.ts)
