---
title: "OmitByValue"
sidebar:
  label: "OmitByValue"
---

Constructs a type by omitting all entries of `T` whose values extend `V`.

Optional properties are matched by their non-nullable value type, so an
optional `string` property is omitted the same as a required one.

> Available since v3.0.0

## Import

```ts
import type { OmitByValue } from '@helpers4/type';
```

## Type Definition

```ts
type OmitByValue<T, V> = Omit<T, KeysOfType<T, V>>
```

## Examples

### OmitByValue



```ts
type Form = { name: string; age: number; email: string; active: boolean };
type NonStringFields = OmitByValue<Form, string>; // { age: number; active: boolean }
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/OmitByValue.ts)
