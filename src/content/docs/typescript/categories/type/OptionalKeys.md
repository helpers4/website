---
title: "OptionalKeys"
sidebar:
  label: "OptionalKeys"
---

Extracts the optional keys of an object type `T`.

> Available since v3.0.0

## Import

```ts
import type { OptionalKeys } from '@helpers4/type';
```

## Type Definition

```ts
type OptionalKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? K : never;
}[keyof T]
```

## Examples

### OptionalKeys



```ts
type User = { id: number; name: string; email?: string };
type Opts = OptionalKeys<User>; // 'email'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/RequiredKeys.ts)
