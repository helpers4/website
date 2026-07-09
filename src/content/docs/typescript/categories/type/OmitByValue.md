---
title: "OmitByValue"
sidebar:
  label: "OmitByValue"
---

Constructs a type by omitting all entries of `T` whose values extend `V`.

> Available since v3.0.0

## Import

```ts
import type { OmitByValue } from '@helpers4/type';
```

## Type Definition

```ts
type OmitByValue<T, V> = {
  [K in keyof T as T[K] extends V ? never : K]: T[K];
}
```

## Examples

### OmitByValue



```ts
type Form = { name: string; age: number; email: string; active: boolean };
type NonStringFields = OmitByValue<Form, string>; // { age: number; active: boolean }
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/OmitByValue.ts)
