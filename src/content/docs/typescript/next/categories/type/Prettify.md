---
title: "Prettify"
sidebar:
  label: "Prettify"
---

Flattens an intersection type into a single readable object type.

IDE tooltips for intersections like `A & B & C` often show the raw
intersection instead of the resolved shape. Wrapping with `Prettify`
forces TypeScript to expand and display the fully-resolved type.

Distributes over unions, so each member is prettified independently
instead of collapsing to their shared keys.

> Available since v3.0.0

## Import

```ts
import type { Prettify } from '@helpers4/type';
```

## Type Definition

```ts
type Prettify<T> = T extends unknown ? { [K in keyof T]: T[K] } & {} : never
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

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/type/Prettify.ts)
