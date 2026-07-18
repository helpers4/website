---
title: "PickByValue"
sidebar:
  label: "PickByValue"
---

Constructs a type by picking all entries of `T` whose values extend `V`.

Optional properties are matched by their non-nullable value type, so an
optional `string` property is picked the same as a required one.

> Available since v3.0.0

## Import

```ts
import type { PickByValue } from '@helpers4/type';
```

## Type Definition

```ts
type PickByValue<T, V> = Pick<T, KeysOfType<T, V>>
```

## Examples

### PickByValue



```ts
type Form = { name: string; age: number; email: string; active: boolean };
type StringFields = PickByValue<Form, string>; // { name: string; email: string }
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/PickByValue.ts)
