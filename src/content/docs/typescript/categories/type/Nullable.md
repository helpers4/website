---
title: "Nullable"
sidebar:
  label: "Nullable"
---

Adds `null` to a type (`T | null`).

Useful as a shorthand when explicit nullability should be expressed
in function signatures or generic constraints.

> Available since v3.0.0

## Import

```ts
import type { Nullable } from '@helpers4/type';
```

## Type Definition

```ts
type Nullable<T> = T | null
```

## Examples

### Nullable



```ts
type MaybeUser = Nullable<User>; // User | null

function findUser(id: string): Nullable<User> { ... }
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/Nullable.ts)
