---
title: "Prettify"
sidebar:
  label: "Prettify"
---

Flattens an intersection type into a single readable object type.

IDE tooltips for intersections like `A & B & C` often show the raw
intersection instead of the resolved shape. Wrapping with `Prettify`
forces TypeScript to expand and display the fully-resolved type.

> Available since v3.0.0

## Import

```ts
import type { Prettify } from '@helpers4/type';
```

## Type Definition

```ts
type Prettify<T> = { [K in keyof T]: T[K] } & {}
```

## Examples

### Prettify



```ts
type A = { a: number };
type B = { b: string };
type Merged = A & B;        // shown as "A & B" in IDE
type Pretty = Prettify<Merged>; // shown as "{ a: number; b: string }"
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/Prettify.ts)
