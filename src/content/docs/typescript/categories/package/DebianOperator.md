---
title: "DebianOperator"
sidebar:
  label: "DebianOperator"
description: "The operators of a Debian version constraint (Debian Policy 7.1): `<<` (strictly earlier), `<=`, `=`, `>=` and `>>` (st…"
version: "3.1.10"
---

The operators of a Debian version constraint (Debian Policy 7.1): `<<` (strictly earlier), `<=`,
`=`, `>=` and `>>` (strictly later).

> Available since v3.1.10

## Import

```ts
import type { DebianOperator } from '@helpers4/package';
// or, from the all-in-one package (same code, one install):
import type { DebianOperator } from 'helpers4/package';
```

## Type Definition

```ts
type DebianOperator = '<<' | '<=' | '=' | '>=' | '>>'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/package/types.ts)
