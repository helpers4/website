---
sidebar_label: "quickCompare"
---

# quickCompare

Quick comparison of two objects using JSON.stringify.
This is a fast but simple comparison that may not work for all edge cases.

> Available since v2.0.0

## Import

```ts
import { quickCompare } from '@helpers4/object';
```

## Signature

```ts
quickCompare(objA: unknown, objB: unknown): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `objA` | `unknown` | First object to compare |
| `objB` | `unknown` | Second object to compare |

## Returns

`boolean` — `true` if objects are identical according to JSON.stringify, `false` otherwise

## Examples

### Compare two equal objects

Uses JSON.stringify for a fast comparison.

```ts
quickCompare({ a: 1, b: 2 }, { a: 1, b: 2 })
// => true
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/object/quickCompare.ts)
