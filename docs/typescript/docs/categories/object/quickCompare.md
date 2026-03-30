---
sidebar_label: "quickCompare"
---

# quickCompare

Quick comparison of two objects using JSON.stringify.
This is a fast but simple comparison that may not work for all edge cases.

## Import

```ts
import { quickCompare } from '@helpers4/object';
```

## Signature

```ts
function quickCompare(objA: unknown, objB: unknown): boolean
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `objA` | First object to compare |
| `objB` | Second object to compare |

## Returns

`true` if objects are identical according to JSON.stringify, `false` otherwise

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/object/quickCompare.ts)
