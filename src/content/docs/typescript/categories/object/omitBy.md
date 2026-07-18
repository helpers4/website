---
title: "omitBy"
sidebar:
  label: "omitBy"
---

Creates a new object without the own enumerable entries for which
`predicate` returns `true`.

Complements omit for when the keys to remove aren't known ahead of
time — `omit` takes an explicit key list, `omitBy` takes a predicate.

> Available since v3.0.0

## Import

```ts
import { omitBy } from '@helpers4/object';
```

## Signature


```ts
omitBy<T extends Record<string, unknown>>(obj: T | null | undefined, predicate: function): Partial<T> | null | undefined
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `obj` | `T \| null \| undefined` | The source object. `null`/`undefined` pass through unchanged. |
| `predicate` | `function` | Called with `(value, key)` for each own enumerable entry |

## Returns

`Partial<T> | null | undefined` — A new object without the matching entries

## Examples

### Drop entries matching a predicate

Unlike omit(), the keys to drop don’t need to be known ahead of time.

```ts
omitBy({ a: 1, b: undefined, c: 2 }, (value) => value === undefined)
// => { a: 1, c: 2 }
```

### Drop entries by key name

The predicate also receives the key, so filtering by name works too.

```ts
omitBy({ id: 1, name: 'x', _internal: true }, (_v, key) => key.startsWith('_'))
// => { id: 1, name: 'x' }
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/object/omitBy.ts)
