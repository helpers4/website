---
sidebar_label: "isString"
---

# isString

Checks if a value is a string.

> Available since v1.9.0

## Import

```ts
import { isString } from '@helpers4/type';
```

## Signature

```ts
isString(value: unknown): value
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value` — True if value is a string

## Examples

### isString



```ts
```ts
isString('hello') // => true
isString(123)     // => false
```
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/isString.ts)
