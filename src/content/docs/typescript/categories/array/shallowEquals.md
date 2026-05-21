---
title: "shallowEquals"
sidebar:
  label: "shallowEquals"
---

Quick comparison of two arrays using JSON.stringify.
This is a fast but simple comparison that may not work for all edge cases.

> Available since v2.0.0

## Import

```ts
import { shallowEquals } from '@helpers4/array';
```

## Signature


```ts
shallowEquals<T>(arrA: T[], arrB: T[]): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `arrA` | `T[]` | First array to compare |
| `arrB` | `T[]` | Second array to compare |

## Returns

`boolean` — `true` if arrays are identical according to JSON.stringify, `false` otherwise

## Examples

### Compare identical arrays

Uses JSON.stringify for a fast shallow comparison.

```ts
shallowEquals([1, 2, 3], [1, 2, 3])
// => true
```

### Detect order differences

Unlike equals, shallowEquals is order-sensitive.

```ts
shallowEquals([1, 2], [2, 1])
// => false
```

:::caution[Name conflict]
A helper named `shallowEquals` also exists in [`@helpers4/object`](../object/shallowEquals). If you need both in the same file, rename at import with `as`:

```ts
import { shallowEquals as shallowEquals4array } from '@helpers4/array';
import { shallowEquals as shallowEquals4object } from '@helpers4/object';
```

See [Name Conflicts](../../reference/naming-conflicts) for the full resolution guide.
:::

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/shallowEquals.ts)
