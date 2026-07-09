---
title: "isDate"
sidebar:
  label: "isDate"
---

Checks if a value is a Date instance.

Note: this only checks the type, not whether the Date is valid.
Use `date/isValid` to also validate that the Date is not `Invalid Date`.

> Available since v2.0.0

## Import

```ts
import { isDate } from '@helpers4/guard';
```

## Signature


```ts
isDate(value: unknown): value is Date
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is Date` — True if value is a Date instance

## Examples

### isDate



```ts
isDate(new Date())          // => true
isDate(new Date('invalid')) // => true (still a Date instance)
isDate('2023-01-01')       // => false
isDate(1609459200000)      // => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/guard/isDate.ts)
