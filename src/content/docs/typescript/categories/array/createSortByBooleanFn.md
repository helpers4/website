---
title: "createSortByBooleanFn"
sidebar:
  label: "createSortByBooleanFn"
---

Creates a sort function for objects by a boolean property.

Values are coerced with `Boolean()` before comparing, so `null`, `undefined`,
`0`, and `''` behave as `false`, and any other truthy value behaves as `true`.

> Available since v3.0.0

## Import

```ts
import { createSortByBooleanFn } from '@helpers4/array';
```

## Signature


```ts
createSortByBooleanFn<T extends Record<string, unknown>>(property: keyof T, trueFirst: boolean): SortFn<T>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `property` | `keyof T` | The property to sort by\. |
| `trueFirst` | `boolean` | Whether \`true\` values sort before \`false\` values \(default: \`true\`\)\. |

## Returns

`SortFn<T>` — Sort function

## Examples

### Sort objects with true values first

Default items float to the top of the list.

```ts
const items = [{ isDefault: false }, { isDefault: true }, { isDefault: false }];
items.sort(createSortByBooleanFn('isDefault'))
// => [{ isDefault: true }, { isDefault: false }, { isDefault: false }]
```

### Sort with false values first

Pass trueFirst = false to invert the priority.

```ts
const items = [{ archived: true }, { archived: false }];
items.sort(createSortByBooleanFn('archived', false))
// => [{ archived: false }, { archived: true }]
```

## Related Types

### `SortFn`

Sort function type for arrays

```ts
type SortFn<T> = (a: T, b: T) => number
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/createSortByBooleanFn.ts)
