---
title: "unset"
sidebar:
  label: "unset"
---

Removes the value at a dot/bracket-notation path or explicit key array,
mutating the object in place. Uses the same path syntax as get/set.

A missing intermediate segment is a no-op (nothing to remove), not an error.
As with `set`, any path containing a string segment equal to `__proto__`,
`constructor`, or `prototype` is rejected and the object is returned unchanged.

The removed key stops appearing in `Object.keys`/`for...in` — unlike setting
it to `undefined`, which would keep the key present.

> Available since v3.0.0

## Import

```ts
import { unset } from '@helpers4/object';
```

## Signature


```ts
unset<T extends object>(obj: T, path: string | readonly PropertyKey[]): T
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `obj` | `T` | The object to mutate |
| `path` | `string \| readonly PropertyKey[]` | Dot/bracket-notation string, or explicit `PropertyKey[]` |

## Returns

`T` — The same object reference, with the key removed if it existed

## Examples

### Remove a nested value by path

Uses the same dot/bracket path syntax as get() and set().

```ts
const config = { server: { host: 'localhost', debug: true } };
unset(config, 'server.debug')
// => { server: { host: 'localhost' } }
```

### Missing paths are a safe no-op

Unlike set(), unset() never creates intermediate objects — there is nothing to remove.

```ts
unset({ a: 1 }, 'x.y.z')
// => { a: 1 }  (unchanged)
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/object/unset.ts)
