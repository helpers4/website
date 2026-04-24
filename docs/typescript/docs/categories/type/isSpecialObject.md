---
sidebar_label: "isSpecialObject"
---

# isSpecialObject

Determines if a value is a special object that should not have its properties compared deeply.
Special objects include: Date, Function, Promise, Observable, RegExp, Error, Map, Set, WeakMap, WeakSet, etc.

> Available since v2.0.0

## Import

```ts
import { isSpecialObject } from '@helpers4/type';
```

## Signature


```ts
isSpecialObject(value: unknown): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`boolean` — `true` if the value is a special object, `false` otherwise

## Examples

### Detect special objects

Returns true for built-in objects like Date, Map, Set, RegExp, etc.

```ts
isSpecialObject(new Date())     // => true
isSpecialObject(new Map())      // => true
isSpecialObject(/regex/)        // => true
```

### Plain objects are not special

Returns false for plain objects and arrays.

```ts
isSpecialObject({ a: 1 })  // => false
isSpecialObject([1, 2])    // => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/isSpecialObject.ts)
