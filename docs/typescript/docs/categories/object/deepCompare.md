---
sidebar_label: "deepCompare"
---

# deepCompare

Deep comparison of two objects that returns detailed information about differences.

## Import

```ts
import { DeepCompareResult, deepCompare } from '@helpers4/object';
```

## `DeepCompareResult`

Result type for deep comparison when objects are not identical

```ts
interface DeepCompareResult
```

## `deepCompare`

Deep comparison of two objects that returns detailed information about differences.

```ts
function deepCompare(objA: object | undefined | null, objB: object | undefined | null): true | false | DeepCompareResult
```

| Parameter | Description |
|-----------|-------------|
| `objA` | First object to compare (can be object, undefined, or null) |
| `objB` | Second object to compare (can be object, undefined, or null) |

**Returns:** `true` if objects are identical, `false` if incompatible types, or a `DeepCompareResult` object detailing differences

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/object/deepCompare.ts)
