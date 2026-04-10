---
sidebar_label: "isDefinedAndNotNull"
---

# isDefinedAndNotNull

Check if a given value of unknown data type is defined and not null

> Available since v1.0.0

## Import

```ts
import { isDefinedAndNotNull } from '@helpers4/function';
```

## Signature

```ts
isDefinedAndNotNull<T>(value: T | null | undefined): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `T \| null \| undefined` |  |

## Returns

`boolean` — 

## Examples

### Check defined values

Returns true for values that are neither undefined nor null.

```ts
isDefinedAndNotNull(42)    // => true
isDefinedAndNotNull('')    // => true
isDefinedAndNotNull(null)  // => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/function/isDefinedAndNotNull.ts)
