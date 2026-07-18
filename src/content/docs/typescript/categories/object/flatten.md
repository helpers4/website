---
title: "flatten"
sidebar:
  label: "flatten"
---

Flattens a nested object into a single-level object whose keys are the
dot-notation path to each leaf value. The inverse of unflatten.

Only **plain objects** are recursed into — arrays, `Date`, `Map`, `RegExp`,
class instances, and empty plain objects `{}` are kept as opaque leaf
values. This keeps `flatten`/`unflatten` a clean, invertible pair: arrays
can't be losslessly told apart from plain objects once reduced to dotted
keys, so this implementation doesn't attempt it.

Caveat shared by every dotted-path flattening scheme: a key that itself
contains a literal `.` is indistinguishable from real nesting once
flattened (`{ 'a.b': 1 }` and `{ a: { b: 1 } }` both produce `{ 'a.b': 1 }`).

> Available since v3.0.0

## Import

```ts
import { flatten } from '@helpers4/object';
```

## Signature


```ts
flatten(obj: Record<string, unknown>): Record<string, unknown>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `obj` | `Record<string, unknown>` | The object to flatten |

## Returns

`Record<string, unknown>` — A single-level object with dot-notation keys

## Examples

### Flatten a nested config object

Each key in the result is the full dot-notation path to a leaf value.

```ts
flatten({ server: { host: 'localhost', port: 8080 } })
// => { 'server.host': 'localhost', 'server.port': 8080 }
```

### Arrays and special objects are kept as leaves

Only plain objects are recursed into — arrays stay intact.

```ts
flatten({ tags: ['a', 'b'], meta: { owner: 'x' } })
// => { tags: ['a', 'b'], 'meta.owner': 'x' }
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/object/flatten.ts)
