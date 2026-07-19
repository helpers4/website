---
title: "pickBy"
sidebar:
  label: "pickBy"
---

Creates a new object with only the own enumerable entries for which
`predicate` returns `true`.

Complements pick for when the keys to keep aren't known ahead of
time — `pick` takes an explicit key list, `pickBy` takes a predicate.

> Available since v3.0.0

## Import

```ts
import { pickBy } from '@helpers4/object';
```

## Signature


```ts
pickBy<T extends Record<string, unknown>>(obj: T | null | undefined, predicate: function): Partial<T> | null | undefined
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `obj` | `T \| null \| undefined` | The source object\. \`null\`/\`undefined\` pass through unchanged\. |
| `predicate` | `function` | Called with \`\(value, key\)\` for each own enumerable entry |

## Returns

`Partial<T> | null | undefined` — A new object with only the matching entries

## Examples

### Keep only entries matching a predicate

Unlike pick(), the keys to keep don’t need to be known ahead of time.

```ts
pickBy({ a: 1, b: 0, c: 2 }, (value) => value > 0)
// => { a: 1, c: 2 }
```

### Keep entries by key name

The predicate also receives the key, so filtering by name works too.

```ts
pickBy({ _id: 1, name: 'x', _internal: true }, (_v, key) => !key.startsWith('_'))
// => { name: 'x' }
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/object/pickBy.ts)
