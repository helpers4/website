---
title: "RequiredKeys"
sidebar:
  label: "RequiredKeys"
---

Extracts the required (non-optional) keys of an object type `T`.

> Available since v3.0.0

## Import

```ts
import type { RequiredKeys } from '@helpers4/type';
```

## Type Definition

```ts
type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
}[keyof T]
```

## Examples

### RequiredKeys



```ts
type User = { id: number; name: string; email?: string };
type Required = RequiredKeys<User>; // 'id' | 'name'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/RequiredKeys.ts)
