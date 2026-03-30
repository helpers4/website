---
sidebar_label: "removeUndefinedNull"
---

# removeUndefinedNull

Remove null and undefined values from an object.

## Import

```ts
import { removeUndefinedNull } from '@helpers4/object';
```

## Signature

```ts
function removeUndefinedNull<T extends Record<string, string | number | boolean | null | undefined>>(obj: T | null | undefined): Partial<T> | null | undefined
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `obj` | an object |

## Returns

A shallow copy of the object without null or undefined values

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/object/removeUndefinedNull.ts)
