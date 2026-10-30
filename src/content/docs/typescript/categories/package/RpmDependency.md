---
title: "RpmDependency"
sidebar:
  label: "RpmDependency"
description: "One package reference of an RPM `Requires` field."
version: "3.1.10"
---

One package reference of an RPM `Requires` field.

> Available since v3.1.10

## Import

```ts
import type { RpmDependency } from '@helpers4/package';
// or, from the all-in-one package (same code, one install):
import type { RpmDependency } from 'helpers4/package';
```

## Type Definition

```ts
interface RpmDependency {
  name: string;
  version?: DependencyConstraint<ComparisonOperator>;
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/package/types.ts)
