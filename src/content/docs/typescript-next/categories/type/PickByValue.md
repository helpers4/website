---
title: "PickByValue"
sidebar:
  label: "PickByValue"
---

Constructs a type by picking all entries of `T` whose values extend `V`.

> Available since v3.0.0

## Import

```ts
import type { PickByValue } from '@helpers4/type';
```

## Type Definition

```ts
type PickByValue<T, V> = {
  [K in keyof T as T[K] extends V ? K : never]: T[K];
}
```

## Examples

### PickByValue



```ts
type Form = { name: string; age: number; email: string; active: boolean };
type StringFields = PickByValue<Form, string>; // { name: string; email: string }
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/type/PickByValue.ts)
