---
title: "isPropertyKey"
sidebar:
  label: "isPropertyKey"
---

Checks if a value is a valid property key: `string`, `number`, or `symbol`.

> Available since v2.0.3

## Import

```ts
import { isPropertyKey } from '@helpers4/type';
```

## Signature


```ts
isPropertyKey(value: unknown): value is PropertyKey
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is PropertyKey` — `true` if value can be used as an object property key

## Examples

### Detect valid property keys

Strings, numbers, and symbols are valid property keys.

```ts
isPropertyKey('name')        // => true
isPropertyKey(42)            // => true
isPropertyKey(Symbol('id'))  // => true
isPropertyKey(null)          // => false
isPropertyKey(true)          // => false
```

### Safe dynamic property access

Use as a guard before indexing an object with an unknown key.

```ts
function get(obj: Record<PropertyKey, unknown>, key: unknown): unknown {
  if (isPropertyKey(key)) return obj[key];
  return undefined;
}
get({ a: 1 }, 'a')    // => 1
get({ a: 1 }, null)   // => undefined
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/isPropertyKey.ts)
