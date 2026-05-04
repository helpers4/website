---
title: "removeUndefinedNull"
sidebar:
  label: "removeUndefinedNull"
---

# removeUndefinedNull

Remove null and undefined values from an object.

> Available since v1.0.0

## Import

```ts
import { removeUndefinedNull } from '@helpers4/object';
```

## Signature


```ts
removeUndefinedNull<T extends Record<string, string | number | boolean | null | undefined>>(obj: T): Partial<T>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `obj` | `T` | an object |

## Returns

`Partial<T>` — A shallow copy of the object without null or undefined values

## Examples

### Strip null and undefined values

Returns a shallow copy of the object without null or undefined properties.

```ts
removeUndefinedNull({ a: 1, b: null, c: undefined, d: 'ok' })
// => { a: 1, d: 'ok' }
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/object/removeUndefinedNull.ts)
