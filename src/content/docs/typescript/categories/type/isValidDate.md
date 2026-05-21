---
title: "isValidDate"
sidebar:
  label: "isValidDate"
---

Checks if a value is a valid Date instance (not `Invalid Date`).

Unlike isDate, this also verifies that the internal timestamp is not `NaN`.

> Available since v2.0.0

## Import

```ts
import { isValidDate } from '@helpers4/type';
```

## Signature


```ts
isValidDate(value: unknown): value is Date
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is Date` — True if value is a Date instance with a valid time value

## Examples

### isValidDate



```ts
isValidDate(new Date())          // => true
isValidDate(new Date('invalid')) // => false
isValidDate('2023-01-01')       // => false (not a Date instance)
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/isValidDate.ts)
