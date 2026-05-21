---
title: "isDefined"
sidebar:
  label: "isDefined"
---

Checks if a value is defined (not undefined nor null).
This is the inverse of isNullish.

Use as a type-safe filter callback to remove `null`/`undefined` from arrays.

> Available since v2.0.0

## Import

```ts
import { isDefined } from '@helpers4/type';
```

## Signature


```ts
isDefined<T>(value: Maybe<T>): value is T
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `Maybe<T>` | The value to check |

## Returns

`value is T` — True if value is not undefined nor null

## Examples

### isDefined



```ts
isDefined(42)        // => true
isDefined('')        // => true (empty string is defined)
isDefined(null)      // => false
isDefined(undefined) // => false
```

### isDefined



```ts
// Type-safe alternative to filter out null/undefined
const items: (string | null | undefined)[] = ['a', null, 'b', undefined];
const result = items.filter(isDefined);
// => ['a', 'b'] with type string[]
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/isDefined.ts)
