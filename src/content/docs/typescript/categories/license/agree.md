---
title: "agree"
sidebar:
  label: "agree"
description: "Whether two raw license strings agree closely enough to count as \"no real conflict\" — true when their family sets share…"
version: "3.1.2"
---

Whether two raw license strings agree closely enough to count as "no real conflict" — true
when their family sets share at least one real (known) family, or when either side is entirely
unknown (e.g. `"custom"`/`"unknown"`) — a vague claim is never itself evidence of disagreement.
Only two *different*, both-known family sets (e.g. `bsd` vs `apache`) count as a real conflict.

> Available since v3.1.2

## Import

```ts
import { agree } from '@helpers4/license';
// or, from the all-in-one package (same code, one install):
import { agree } from 'helpers4/license';
```

## Signature


```ts
agree(a: string, b: string): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `a` | `string` | The first raw license string |
| `b` | `string` | The second raw license string |

## Returns

`boolean` — `true` when the two strings can be treated as the same license (or too vague to tell), `false` on a real family conflict

## Examples

### Reconcile notation drift across sources

Two package sources reporting the same real license under different notation.

```ts
agree('GPL3', 'GPL-3.0-or-later')
// => true
```

### Flag a real license conflict

Two sources genuinely disagreeing on the license family — a real data-quality signal.

```ts
agree('BSD-2-Clause', 'Apache-2.0')
// => false
```

### A vague claim is never itself a conflict

When either side is non-informative ("custom", "unknown", ...), there is nothing real to disagree with.

```ts
agree('custom', 'MIT')
// => true
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/license/agree.ts)
