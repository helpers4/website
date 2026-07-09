---
title: "KeysOfType"
sidebar:
  label: "KeysOfType"
---

Extracts the keys of `T` whose values extend `V`.

> Available since v3.0.0

## Import

```ts
import type { KeysOfType } from '@helpers4/type';
```

## Type Definition

```ts
type KeysOfType<T, V> = {
  [K in keyof T]-?: T[K] extends V ? K : never;
}[keyof T]
```

## Examples

### KeysOfType



```ts
type User = { id: number; name: string; email: string; active: boolean };
type StringKeys = KeysOfType<User, string>; // 'name' | 'email'
type NumberKeys = KeysOfType<User, number>; // 'id'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/type/KeysOfType.ts)
