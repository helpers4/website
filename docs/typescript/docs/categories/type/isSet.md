---
sidebar_label: "isSet"
---

# isSet

Checks if a value is set (not undefined nor null)

> Available since v1.9.0

## Import

```ts
import { isSet } from '@helpers4/type';
```

## Signature

```ts
isSet<T>(value: Maybe<T>): value
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `Maybe<T>` | The value to check |

## Returns

`value` — True if value is not undefined nor null

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/typeChecks.ts)
