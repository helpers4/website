---
title: "AlpineOperator"
sidebar:
  label: "AlpineOperator"
description: "The operators of an Alpine (apk) version constraint, as apk writes them: the five comparisons;"
version: "3.1.10"
---

The operators of an Alpine (apk) version constraint, as apk writes them: the five comparisons;
`~`, a fuzzy match (`foo~1.2` accepts `1.2.5`), and its ordered variants `<~` and `>~`; and `><`,
a checksum comparison used by package indexes.

> Available since v3.1.10

## Import

```ts
import type { AlpineOperator } from '@helpers4/package';
// or, from the all-in-one package (same code, one install):
import type { AlpineOperator } from 'helpers4/package';
```

## Type Definition

```ts
type AlpineOperator = ComparisonOperator | '~' | '<~' | '>~' | '><'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/package/types.ts)
