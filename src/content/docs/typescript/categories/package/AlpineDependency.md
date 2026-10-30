---
title: "AlpineDependency"
sidebar:
  label: "AlpineDependency"
description: "One package reference of an Alpine (apk) `depends` list."
version: "3.1.10"
---

One package reference of an Alpine (apk) `depends` list.

> Available since v3.1.10

## Import

```ts
import type { AlpineDependency } from '@helpers4/package';
// or, from the all-in-one package (same code, one install):
import type { AlpineDependency } from 'helpers4/package';
```

## Type Definition

```ts
interface AlpineDependency {
  conflict?: true;
  name: string;
  version?: DependencyConstraint<AlpineOperator>;
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/package/types.ts)
