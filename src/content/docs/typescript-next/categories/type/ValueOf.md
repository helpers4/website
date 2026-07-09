---
title: "ValueOf"
sidebar:
  label: "ValueOf"
---

Produces a union of all value types of an object type `T`.

> Available since v3.0.0

## Import

```ts
import type { ValueOf } from '@helpers4/type';
```

## Type Definition

```ts
type ValueOf<T> = T[keyof T]
```

## Examples

### ValueOf



```ts
type Config = { host: string; port: number; secure: boolean };
type ConfigValue = ValueOf<Config>; // string | number | boolean

const STATUS = { OK: 200, NOT_FOUND: 404, ERROR: 500 } as const;
type StatusCode = ValueOf<typeof STATUS>; // 200 | 404 | 500
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/type/ValueOf.ts)
