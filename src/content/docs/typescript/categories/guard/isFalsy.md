---
title: "isFalsy"
sidebar:
  label: "isFalsy"
description: "Checks if a value is falsy (`false`, `null`, `undefined`, `0`, `\"\"`, `NaN`)."
version: "3.1.0"
---

Checks if a value is falsy (`false`, `null`, `undefined`, `0`, `""`, `NaN`).

> Available since v2.0.0

## Import

```ts
import { isFalsy } from '@helpers4/guard';
// or, from the all-in-one package (same code, one install):
import { isFalsy } from 'helpers4/guard';
```

## Signature


```ts
isFalsy(value: unknown): value is Falsy
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is Falsy` — True if the value is falsy

## Examples

### Check falsy values

Returns true for all falsy values: false, null, undefined, 0, "", NaN.

```ts
isFalsy(0)         // => true
isFalsy('')        // => true
isFalsy(null)      // => true
isFalsy('hello')   // => false
```

## Related Types

### `Falsy`

Union of all falsy types in JavaScript.
Note: `NaN` cannot be represented as a type in TypeScript.

```ts
type Falsy = false | null | undefined | 0 | ''
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/guard/isFalsy.ts)
