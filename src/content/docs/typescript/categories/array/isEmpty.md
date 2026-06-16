---
title: "isEmpty"
sidebar:
  label: "isEmpty"
---

Checks if an array is empty (has no elements).

> Available since v2.0.3

## Import

```ts
import { isEmpty } from '@helpers4/array';
```

## Signature


```ts
isEmpty(value: readonly unknown[]): value is readonly never[]
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `readonly unknown[]` | The array to check |

## Returns

`value is readonly never[]` — `true` if the array has no elements

## Examples

### Check if an array is empty

Returns true only for arrays with no elements.

```ts
isEmpty([])        // => true
isEmpty([1, 2, 3]) // => false
isEmpty([null])    // => false  (null is still an element)
```

### Branch on empty array with type narrowing

In the true branch, the type narrows to never[], ensuring no element access.

```ts
function first<T>(arr: T[]): T | undefined {
  if (isEmpty(arr)) return undefined;
  return arr[0]; // TypeScript knows arr is non-empty here
}
first([])      // => undefined
first([1, 2])  // => 1
```

:::caution[Name conflict]
A helper named `isEmpty` also exists in [`@helpers4/object`](../object/isempty/), [`@helpers4/string`](../string/isempty/), [`@helpers4/type`](../type/isempty/). If you need both in the same file, rename at import with `as`:

```ts
import { isEmpty as isEmpty4array } from '@helpers4/array';
import { isEmpty as isEmpty4object } from '@helpers4/object';
import { isEmpty as isEmpty4string } from '@helpers4/string';
import { isEmpty as isEmpty4type } from '@helpers4/type';
```

See [Name Conflicts](../../reference/naming-conflicts/) for the full resolution guide.
:::

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/isEmpty.ts)
