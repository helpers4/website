---
sidebar_label: "isUndefined"
---

# isUndefined

Checks if a value is `undefined`.

> Available since v2.0.0

## Import

```ts
import { isUndefined } from '@helpers4/type';
```

## Signature

```ts
isUndefined(value: unknown): value is undefined
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is undefined` — True if value is undefined

## Examples

### isUndefined



```ts
isUndefined(undefined) // => true
isUndefined(null)      // => false
isUndefined(0)         // => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/isUndefined.ts)
