---
sidebar_label: "isSet"
---

# isSet

Checks if a value is set (not undefined nor null)

## Import

```ts
import { isSet, Maybe } from '@helpers4/type';
```

## Signature

```ts
function isSet<T>(value: Maybe<T>): value is T
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `value` | The value to check |

## Returns

True if value is not undefined nor null

## Types

### `Maybe`

Type for values that can be T, undefined, or null

```ts
type Maybe<T> = T | undefined | null;
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/typeChecks.ts)
