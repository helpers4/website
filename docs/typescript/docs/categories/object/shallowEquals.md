---
sidebar_label: "shallowEquals"
---

# shallowEquals

Quick comparison of two objects using JSON.stringify.
This is a fast but simple comparison that may not work for all edge cases.

> Available since v2.0.0

## Import

```ts
import { shallowEquals } from '@helpers4/object';
```

## Signature


```ts
shallowEquals(objA: unknown, objB: unknown): boolean
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
shallowEquals({ a: 1, b: 2 }, { a: 1, b: 2 })
// => true
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/object/shallowEquals.ts)
