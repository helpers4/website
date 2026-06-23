---
title: "set"
sidebar:
  label: "set"
---

Sets a value in an object at the given path, creating intermediate objects as needed.

**Two path forms are supported:**

1. **String path** — dot notation and bracket notation, mixed freely.
   - Dot segments are always string keys: `'layers.1.name'` → keys `['layers', '1', 'name']`.
   - Bracket segments are always number keys: `'layers[1].name'` → keys `['layers', 1, 'name']`.
   - String literal paths give **full compile-time type inference** on the return type.
   - Dynamic (non-literal) strings return `T` (same object type).

2. **Key array** (`PropertyKey[]`) — explicit array of `string | number | symbol` keys,
   no parsing performed. Enables symbol-keyed access and precise return-type inference.

Both forms support **all objects** (plain objects, arrays, class instances).
Symbol keys are only reachable via the key-array form.

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
set<T extends object, P extends string | readonly PropertyKey[], V extends unknown>(obj: T, path: P, value: V): conditional
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `obj` | `T` | The object to mutate |
| `path` | `P` | Dot/bracket-notation string literal or explicit `PropertyKey[]` |
| `value` | `V` | Value to assign at the path |

## Returns

`conditional` — The mutated object (same reference, narrowed type)

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
