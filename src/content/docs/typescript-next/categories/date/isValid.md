---
title: "isValid"
sidebar:
  label: "isValid"
---

Checks if a value is a valid Date instance (not `Invalid Date`).

Unlike `isDate` (in `type/`), this also verifies that the internal timestamp
is not `NaN`.

> Available since v2.0.0

## Import

```ts
import { isValid } from '@helpers4/date';
```

## Signature


```ts
isValid(value: unknown): value is Date
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is Date` — True if value is a Date instance with a valid time value

## Examples

### isValid



```ts
isValid(new Date())          // => true
isValid(new Date('invalid')) // => false
isValid('2023-01-01')        // => false (not a Date instance)
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/date/isValid.ts)
