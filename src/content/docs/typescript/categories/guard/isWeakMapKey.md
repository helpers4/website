---
title: "isWeakMapKey"
sidebar:
  label: "isWeakMapKey"
description: "Checks whether a value can be used as a key in a `WeakMap` (or a `WeakSet` member / `WeakRef` target) — an object, a fu…"
version: "3.1.0"
---

Checks whether a value can be used as a key in a `WeakMap` (or a `WeakSet` member / `WeakRef`
target) — an object, a function (despite `typeof` reporting `'function'`, functions are
objects), or an *unregistered* symbol (a plain `Symbol(...)` or a well-known symbol like
`Symbol.iterator`).

Symbols registered via `Symbol.for(...)` are excluded: since they live forever in the global
symbol registry, the language disallows them as weak references (ES2023's "Symbols as
WeakMap keys"). This is the part of the check easy to get wrong — `typeof value === 'symbol'`
alone accepts registered symbols too, which actually throw at `WeakMap.prototype.set`.

> Available since v3.0.8

## Import

```ts
import { isWeakMapKey } from '@helpers4/guard';
// or, from the all-in-one package (same code, one install):
import { isWeakMapKey } from 'helpers4/guard';
```

## Signature


```ts
isWeakMapKey(value: unknown): value is symbol | object
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is symbol | object` — `true` if `value` is a valid `WeakMap`/`WeakSet` key or `WeakRef` target

## Examples

### Objects and functions are valid WeakMap keys

Functions pass despite typeof reporting "function" — they are objects.

```ts
isWeakMapKey({})       // => true
isWeakMapKey(() => {}) // => true
isWeakMapKey(42)       // => false
```

### Unregistered symbols pass, registered ones do not

Symbol.for(...) symbols live forever in the global registry, so the language disallows them as weak references.

```ts
isWeakMapKey(Symbol('x'))     // => true
isWeakMapKey(Symbol.for('x')) // => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/guard/isWeakMapKey.ts)
