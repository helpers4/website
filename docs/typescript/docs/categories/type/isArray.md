---
sidebar_label: "isArray"
---

# isArray

Checks if a value is an array.

> Available since v1.9.0

## Import

```ts
import { isArray } from '@helpers4/type';
```

## Signature

```ts
isArray(value: unknown): value
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value` — True if value is an array

## Examples

### isArray



```ts
```ts
isArray([1, 2, 3]) // => true
isArray('hello')   // => false
isArray({})        // => false
```
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/isArray.ts)
