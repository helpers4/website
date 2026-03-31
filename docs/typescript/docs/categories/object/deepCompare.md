---
sidebar_label: "deepCompare"
---

# deepCompare

Deep comparison of two objects that returns detailed information about differences.

## Import

```ts
import { deepCompare, DeepCompareResult } from '@helpers4/object';
```

## Signature

```ts
function deepCompare(objA: object | undefined | null, objB: object | undefined | null): true | false | DeepCompareResult
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `objA` | First object to compare (can be object, undefined, or null) |
| `objB` | Second object to compare (can be object, undefined, or null) |

## Returns

`true` if objects are identical, `false` if incompatible types, or a `DeepCompareResult` object detailing differences

## Types

### `DeepCompareResult`

Result type for deep comparison when objects are not identical

```ts
interface DeepCompareResult
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/object/deepCompare.ts)
