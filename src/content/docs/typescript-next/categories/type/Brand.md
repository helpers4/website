---
title: "Brand"
sidebar:
  label: "Brand"
---

Brands a base type `T` with a phantom tag `B` to create a nominal type.

Two `Brand<string, 'UserId'>` and `Brand<string, 'Email'>` are structurally
identical strings at runtime, but TypeScript treats them as distinct types
at the call site — preventing accidental mix-ups.

Use a const-assertion cast at the creation boundary:
```ts
type UserId = Brand<string, 'UserId'>;
const toUserId = (s: string): UserId => s as UserId;
```

> Available since v3.0.0

## Import

```ts
import type { Brand } from '@helpers4/type';
```

## Type Definition

```ts
type Brand<T, B extends string> = T & { readonly __brand: B }
```

## Examples

### Brand



```ts
type Meter = Brand<number, 'Meter'>;
type Second = Brand<number, 'Second'>;

declare function speed(distance: Meter, time: Second): number;
const d = 100 as Meter;
const t = 5 as Second;
speed(d, t);   // ✅
speed(t, d);   // ✗ Type error — args swapped
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/type/Brand.ts)
