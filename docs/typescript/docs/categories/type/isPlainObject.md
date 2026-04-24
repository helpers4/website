---
sidebar_label: "isPlainObject"
---

# isPlainObject

Checks if a value is a plain object.

A plain object is created by `{}`, `new Object()`, or `Object.create(null)`.
Returns `false` for arrays, Date, Map, Set, RegExp, class instances, etc.

> Available since v2.0.0

## Import

```ts
import { isPlainObject } from '@helpers4/type';
```

## Signature


```ts
isPlainObject(value: unknown): value is Record<string, unknown>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is Record<string, unknown>` — True if value is a plain object

## Examples

### isPlainObject



```ts
isPlainObject({})           // => true
isPlainObject({ a: 1 })    // => true
isPlainObject(new Date())  // => false
isPlainObject([])          // => false
isPlainObject(null)        // => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/isPlainObject.ts)
