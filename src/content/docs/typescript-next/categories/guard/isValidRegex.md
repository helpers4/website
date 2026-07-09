---
title: "isValidRegex"
sidebar:
  label: "isValidRegex"
---

Checks if a string is a valid regex pattern.

> Available since v1.9.0

## Import

```ts
import { isValidRegex } from '@helpers4/guard';
```

## Signature


```ts
isValidRegex(value: string): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `string` | The string to check |

## Returns

`boolean` — True if the string is a valid regex pattern

## Examples

### isValidRegex



```ts
isValidRegex('[a-z]+') // => true
isValidRegex('.*')     // => true
isValidRegex('[')      // => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/guard/isValidRegex.ts)
