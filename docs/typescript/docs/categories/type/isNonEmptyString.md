---
sidebar_label: "isNonEmptyString"
---

# isNonEmptyString

Checks if a value is a non-empty string (length > 0).

> Available since v2.0.0

## Import

```ts
import { isNonEmptyString } from '@helpers4/type';
```

## Signature

```ts
isNonEmptyString(value: unknown): value
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value` — True if value is a string with at least one character

## Examples

### isNonEmptyString



```ts
```ts
isNonEmptyString('hello') // => true
isNonEmptyString('')      // => false
isNonEmptyString(42)      // => false
isNonEmptyString(null)    // => false
```
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/isNonEmptyString.ts)
