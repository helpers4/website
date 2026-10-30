---
title: "ArchDependency"
sidebar:
  label: "ArchDependency"
description: "One package reference of an Arch Linux `depends` array."
version: "3.1.10"
---

One package reference of an Arch Linux `depends` array.

> Available since v3.1.10

## Import

```ts
import type { ArchDependency } from '@helpers4/package';
// or, from the all-in-one package (same code, one install):
import type { ArchDependency } from 'helpers4/package';
```

## Type Definition

```ts
interface ArchDependency {
  name: string;
  version?: DependencyConstraint<ComparisonOperator>;
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/package/types.ts)
