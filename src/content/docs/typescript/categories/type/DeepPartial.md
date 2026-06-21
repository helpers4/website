---
title: "DeepPartial"
sidebar:
  label: "DeepPartial"
---

Recursively makes all properties of T optional, including nested objects
and array elements.

> Available since v2.0.2

## Import

```ts
import type { DeepPartial } from '@helpers4/type';
```

## Type Definition

```ts
type DeepPartial<T> =
  // Mutable array branch must come first: string[] satisfies both (infer U)[] and
  // readonly (infer U)[]. Without this order, mutable arrays would resolve to readonly.
  T extends (infer U)[]
    ? number extends T['length'] ? DeepPartial<U>[] : { [K in keyof T]?: DeepPartial<T[K]> }
    : T extends readonly (infer U)[]
      ? number extends T['length'] ? readonly DeepPartial<U>[] : { readonly [K in keyof T]?: DeepPartial<T[K]> }
      : T extends (...args: never[]) => unknown
        ? T
        : T extends Date | Map<unknown, unknown> | Set<unknown> | Promise<unknown> | RegExp
          ? T
          : T extends object
            ? { [K in keyof T]?: DeepPartial<T[K]> }
            : T
```

## Examples

### DeepPartial



```ts
type Config = { server: { host: string; port: number }; debug: boolean };
type PartialConfig = DeepPartial<Config>;
// => { server?: { host?: string; port?: number }; debug?: boolean }
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/DeepPartial.ts)
