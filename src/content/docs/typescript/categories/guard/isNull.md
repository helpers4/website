---
title: "isNull"
sidebar:
  label: "isNull"
---

Checks if a value is `null`.

> Available since v2.0.0

## Import

```ts
import { isNull } from '@helpers4/guard';
```

## Signature


```ts
isNull(value: unknown): value is null
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is null` — True if value is null

## Examples

### isNull



```ts
isNull(null)      // => true
isNull(undefined) // => false
isNull(0)         // => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/guard/isNull.ts)
