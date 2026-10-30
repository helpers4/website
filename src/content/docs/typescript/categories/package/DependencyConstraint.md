---
title: "DependencyConstraint"
sidebar:
  label: "DependencyConstraint"
description: "A version constraint such as the `(>= 2.34)` of `libc6 (>= 2.34)`, with the operator spelled as the format spells it."
version: "3.1.10"
---

A version constraint such as the `(>= 2.34)` of `libc6 (>= 2.34)`, with the operator spelled as
the format spells it.

> Available since v3.1.10

## Import

```ts
import type { DependencyConstraint } from '@helpers4/package';
// or, from the all-in-one package (same code, one install):
import type { DependencyConstraint } from 'helpers4/package';
```

## Type Definition

```ts
interface DependencyConstraint<Operator extends string = string> {
  operator: Operator;
  version: string;
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/package/types.ts)
