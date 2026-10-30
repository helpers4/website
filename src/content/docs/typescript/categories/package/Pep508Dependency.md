---
title: "Pep508Dependency"
sidebar:
  label: "Pep508Dependency"
description: "One requirement of a PEP 508 dependency specification."
version: "3.1.10"
---

One requirement of a PEP 508 dependency specification.

> Available since v3.1.10

## Import

```ts
import type { Pep508Dependency } from '@helpers4/package';
// or, from the all-in-one package (same code, one install):
import type { Pep508Dependency } from 'helpers4/package';
```

## Type Definition

```ts
interface Pep508Dependency {
  extras: string[];
  marker?: string;
  name: string;
  specifiers: DependencyConstraint<Pep508Operator>[];
  url?: string;
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/package/types.ts)
