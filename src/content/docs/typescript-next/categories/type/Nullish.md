---
title: "Nullish"
sidebar:
  label: "Nullish"
---

Adds `null` and `undefined` to a type (`T | null | undefined`).

Alias of Maybe.

> Available since v3.0.0

## Import

```ts
import type { Nullish } from '@helpers4/type';
```

## Type Definition

```ts
type Nullish<T> = Maybe<T>
```

## Examples

### Nullish



```ts
type OptionalUser = Nullish<User>; // User | null | undefined
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/type/Nullable.ts)
