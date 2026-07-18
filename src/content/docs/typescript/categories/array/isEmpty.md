---
title: "isEmpty"
sidebar:
  label: "isEmpty"
---

Checks if an array is empty (has no elements).
`null` and `undefined` are treated as empty arrays and return `true`.

> Available since v2.0.3

## Import

```ts
import { isEmpty } from '@helpers4/array';
```

## Signature


```ts
isEmpty(value: readonly unknown[] | null | undefined): value is readonly never[] | null | undefined
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `readonly unknown[] \| null \| undefined` | The array to check |

## Returns

`value is readonly never[] | null | undefined` — `true` if the array has no elements, or if `value` is `null`/`undefined`

## Examples

### Check if an array is empty

Returns true only for arrays with no elements.

```ts
isEmpty([])        // => true
isEmpty([1, 2, 3]) // => false
isEmpty([null])    // => false  (null is still an element)
```

### Guard before accessing first element

Use isEmpty as an early-return guard for arrays, null, and undefined; the false branch is safely non-empty.

```ts
function first<T>(arr: T[] | null | undefined): T | undefined {
  if (isEmpty(arr)) return undefined;
  return arr[0];
}
first([])        // => undefined
first(null)      // => undefined
first([1, 2])    // => 1
```

:::caution[Name conflict]
A helper named `isEmpty` also exists in [`@helpers4/object`](../object/isempty/), [`@helpers4/string`](../string/isempty/). If you need both in the same file, rename at import with `as`:

```ts
import { isEmpty as isEmpty4array } from '@helpers4/array';
import { isEmpty as isEmpty4object } from '@helpers4/object';
import { isEmpty as isEmpty4string } from '@helpers4/string';
```

See [Name Conflicts](../../reference/naming-conflicts/) for the full resolution guide.
:::

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/isEmpty.ts)
