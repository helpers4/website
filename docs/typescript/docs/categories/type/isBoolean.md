---
sidebar_label: "isBoolean"
---

# isBoolean

Checks if a value is a boolean.

> Available since v1.9.0

## Import

```ts
import { isBoolean } from '@helpers4/type';
```

## Signature


```ts
isBoolean(value: unknown): value is boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is boolean` — True if value is a boolean

## Examples

### isBoolean



```ts
isBoolean(true)  // => true
isBoolean(false) // => true
isBoolean(1)     // => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/isBoolean.ts)
