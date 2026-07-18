---
title: "isNonEmpty"
sidebar:
  label: "isNonEmpty"
---

Checks if an array is non-empty (has at least one element).
`null` and `undefined` are treated as empty arrays and return `false`.

> Available since v2.0.3

## Import

```ts
import { isNonEmpty } from '@helpers4/array';
```

## Signature


```ts
isNonEmpty<T>(value: readonly T[] | null | undefined): value is readonly [T, T]
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `readonly T[] \| null \| undefined` | The array to check |

## Returns

`value is readonly [T, T]` — `true` if the array has at least one element; `false` for empty, `null`, or `undefined`

## Examples

### Check if an array has elements

Returns true for arrays with at least one element, regardless of the element values.

```ts
isNonEmpty([1, 2, 3]) // => true
isNonEmpty([null])    // => true  (null is still an element)
isNonEmpty([])        // => false
```

### Safe first-element access with type narrowing

In the true branch, the type narrows to [T, ...T[]], making arr[0] always defined.

```ts
function first<T>(arr: readonly T[]): T | undefined {
  if (isNonEmpty(arr)) return arr[0]; // arr[0] is T, not T | undefined
  return undefined;
}
first([1, 2]) // => 1
first([])     // => undefined
```

:::caution[Name conflict]
A helper named `isNonEmpty` also exists in [`@helpers4/object`](../object/isnonempty/), [`@helpers4/string`](../string/isnonempty/). If you need both in the same file, rename at import with `as`:

```ts
import { isNonEmpty as isNonEmpty4array } from '@helpers4/array';
import { isNonEmpty as isNonEmpty4object } from '@helpers4/object';
import { isNonEmpty as isNonEmpty4string } from '@helpers4/string';
```

See [Name Conflicts](../../reference/naming-conflicts/) for the full resolution guide.
:::

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v2/helpers/array/isNonEmpty.ts)
