---
title: "DeepWritable"
sidebar:
  label: "DeepWritable"
---

Recursively removes `readonly` from all properties of T, including nested
objects, array elements, and tuple positions.

> Available since v2.0.2

## Import

```ts
import type { DeepWritable } from '@helpers4/type';
```

## Type Definition

```ts
type DeepWritable<T> =
  T extends readonly (infer U)[]
    ? number extends T['length'] ? DeepWritable<U>[] : { -readonly [K in keyof T]: DeepWritable<T[K]> }
    : T extends (...args: never[]) => unknown
      ? T
      : T extends Date | Map<unknown, unknown> | Set<unknown> | Promise<unknown> | RegExp
        ? T
        : T extends object
          ? { -readonly [K in keyof T]: DeepWritable<T[K]> }
          : T
```

## Examples

### DeepWritable



```ts
type Config = { readonly server: { readonly host: string }; readonly tags: readonly string[] };
type MutableConfig = DeepWritable<Config>;
// => { server: { host: string }; tags: string[] }
```

### DeepWritable



```ts
type Point = readonly [x: number, y: number];
type MutablePoint = DeepWritable<Point>;
// => [x: number, y: number]
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/DeepWritable.ts)
