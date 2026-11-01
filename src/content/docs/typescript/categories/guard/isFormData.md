---
title: "isFormData"
sidebar:
  label: "isFormData"
description: "Checks if a value is a FormData instance."
version: "3.1.12"
---

Checks if a value is a FormData instance.

Useful for filtering or type-narrowing in a functional pipeline:
`values.filter(isFormData)`

**Known limitation:** the declared type is the DOM `FormData`, so a project compiled without the DOM
lib (GJS, for example) gets `Cannot find name 'FormData'` from this package's `index.d.ts`. At
runtime it is safe everywhere: it returns `false` where `FormData` does not exist. The alternatives
are not clearly better, so it is left as is: a structural `FormDataLike` type would narrow to that
type instead of `FormData` for callers that have the DOM, moving it to `browser` would break
existing imports (and `FormData` also exists in Node.js, Deno and Bun), and a polyfill would not fix
the compile error. To be reconsidered for v4.

> Available since v2.0.0

## Import

```ts
import { isFormData } from '@helpers4/guard';
// or, from the all-in-one package (same code, one install):
import { isFormData } from 'helpers4/guard';
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

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/guard/isFormData.ts)
