---
title: "identity"
sidebar:
  label: "identity"
description: "The matrix that changes nothing."
version: "3.1.7"
---

The matrix that changes nothing.

> Available since v3.1.5

## Import

```ts
import { identity } from '@helpers4/geometry';
// or, from the all-in-one package (same code, one install):
import { identity } from 'helpers4/geometry';
```

## Signature


```ts
identity(): Matrix
```

## Returns

`Matrix` — `{ a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 }`

## Examples

### Start from no transformation

The identity leaves every point where it is.

```ts
applyToPoint(identity(), { x: 3, y: 4 }) // => { x: 3, y: 4 }
```

### Neutral element of multiply

Multiplying by the identity returns the same transformation.

```ts
multiply(identity(), translate(5, 0)) // => translate(5, 0)
```

## Related Types

### `Matrix`

A 2D affine transformation, in the layout of CSS and SVG `matrix(a, b, c, d, e, f)`:

```text
x' = a·x + c·y + e
y' = b·x + d·y + f
```

```ts
interface Matrix {
  a: number;
  b: number;
  c: number;
  d: number;
  e: number;
  f: number;
}
```

:::caution[Name conflict]
A helper named `identity` also exists in [`@helpers4/function`](../function/identity/). If you need both in the same file, rename at import with `as`:

```ts
import { identity as identity4geometry } from '@helpers4/geometry';
import { identity as identity4function } from '@helpers4/function';
```

See [Name Conflicts](../../reference/naming-conflicts/) for the full resolution guide.
:::

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/geometry/identity.ts)
