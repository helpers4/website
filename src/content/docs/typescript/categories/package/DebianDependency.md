---
title: "DebianDependency"
sidebar:
  label: "DebianDependency"
description: "One package reference of a Debian relationship field: `name[:arch] [(op version)] [[archs]] [<profiles>]`."
version: "3.1.10"
---

One package reference of a Debian relationship field: `name[:arch] [(op version)] [[archs]] [<profiles>]`.

> Available since v3.1.10

## Import

```ts
import type { DebianDependency } from '@helpers4/package';
// or, from the all-in-one package (same code, one install):
import type { DebianDependency } from 'helpers4/package';
```

## Type Definition

```ts
interface DebianDependency {
  arch?: string;
  architectures?: string[];
  name: string;
  profiles?: string[][];
  version?: DependencyConstraint<DebianOperator>;
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/package/types.ts)
