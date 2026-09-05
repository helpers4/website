---
title: "Maybe"
sidebar:
  label: "Maybe"
description: "Type for values that can be T, undefined, or null."
version: "3.1.1"
---

Type for values that can be T, undefined, or null.

> Available since v1.9.0

## Import

```ts
import type { Maybe } from '@helpers4/type';
// or, from the all-in-one package (same code, one install):
import type { Maybe } from 'helpers4/type';
```

## Type Definition

```ts
type Maybe<T> = T | undefined | null
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/Maybe.ts)
