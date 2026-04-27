---
sidebar_label: "isFormData"
---

# isFormData

Checks if a value is a FormData instance.

Useful for filtering or type-narrowing in a functional pipeline:
`values.filter(isFormData)`

> Available since next

## Import

```ts
import { isFormData } from '@helpers4/type';
```

## Signature


```ts
isFormData(value: unknown): value is FormData
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is FormData` — True if value is a FormData

## Examples

### Detect a FormData

Returns true only for FormData instances.

```ts
isFormData(new FormData()) // => true
isFormData({})             // => false
isFormData(null)           // => false
```

### Filter FormData from a mixed array

Use as a predicate in .filter() to extract FormData values.

```ts
const fd = new FormData();
fd.append('name', 'Alice');
const values = [fd, {}, new FormData(), 'text'];
values.filter(isFormData)
// => [FormData, FormData]
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/isFormData.ts)
