---
sidebar_label: "isSpecialObject"
---

# isSpecialObject

Determines if a value is a special object that should not have its properties compared deeply.
Special objects include: Date, Function, Promise, Observable, RegExp, Error, Map, Set, WeakMap, WeakSet, etc.

## Import

```ts
import { isSpecialObject } from '@helpers4/type';
```

## Signature

```ts
function isSpecialObject(value: unknown): boolean
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `value` | The value to check |

## Returns

`true` if the value is a special object, `false` otherwise

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/isSpecialObject.ts)
