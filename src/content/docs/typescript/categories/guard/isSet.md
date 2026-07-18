---
title: "isSet"
sidebar:
  label: "isSet"
---

Checks if a value is a Set instance.

> Available since v3.0.0

## Import

```ts
import { isSet } from '@helpers4/guard';
```

## Signature


```ts
isSet(value: unknown): value is Set<unknown>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is Set<unknown>` — True if value is a Set

## Examples

### Check whether a value is a Set

Returns true only for real Set instances.

```ts
isSet(new Set([1, 2, 3])) // => true
isSet([1, 2, 3])          // => false
```

### Type-safe narrowing in a conditional

Inside the `if` branch, the value is narrowed to Set<unknown>.

```ts
const value: unknown = new Set(['a', 'b']);
if (isSet(value)) {
  value.size // => 2, type-safe access
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/guard/isSet.ts)
