---
title: "set"
sidebar:
  label: "set"
---

Sets a value in an object at the given path, creating intermediate objects as needed.

**Three path forms are supported:**

1. **Dot notation** (`string`) — segments split on `.` are kept as-is string keys.
   `"layers.1.name"` → keys `["layers", "1", "name"]` (all strings, including `"1"`).

2. **Bracket notation** (`string`) — `[n]` segments are parsed as numeric keys.
   `"layers[1].name"` → keys `["layers", 1, "name"]` (index `1` becomes a number).
   Dot and bracket can be mixed freely: `"a[0].b[2].c"`.

3. **Key array** (`PropertyKey[]`) — explicit array of `string | number | symbol` keys,
   no parsing performed. Enables full key-type control, including symbols:
   `["layers", 1, Symbol('id')]`.

Intermediate nodes that are absent, `null`, or not an object are replaced with `{}`.
Any path containing a string segment equal to `__proto__`, `constructor`, or `prototype`
is rejected and the original object is returned unchanged (prototype-pollution guard).

> Available since v1.9.0

## Import

```ts
import { set } from '@helpers4/object';
```

## Signature


```ts
set(obj: Record<string, unknown>, path: string, value: unknown): Record<string, unknown>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `obj` | `Record<string, unknown>` | The object to mutate |
| `path` | `string` | Dot/bracket-notation string or explicit `PropertyKey[]` |
| `value` | `unknown` | Value to assign at the path |

## Returns

`Record<string, unknown>` — The mutated object (same reference)

## Examples

### Set a nested property (dot notation)

Creates intermediate objects as needed. All segments are string keys — including numeric-looking ones like "1".

```ts
set({}, 'a.b.c', 42)
// => { a: { b: { c: 42 } } }

set({}, 'layers.1.name', 'bg')
// => { layers: { '1': { name: 'bg' } } }   // '1' is a string key
```

### Set via bracket notation

Square-bracket indices become numeric keys. Useful when the path targets an array element.

```ts
const obj = { layers: [{}, { name: 'old' }] }
set(obj, 'layers[1].name', 'new')
// => { layers: [{}, { name: 'new' }] }
```

### Set via key array (supports symbols)

Pass an explicit PropertyKey[] to bypass parsing. Supports string, number, and symbol keys.

```ts
const id = Symbol('id')
set({}, ['user', id], 'alice')
// => { user: { [id]: 'alice' } }
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/object/set.ts)
