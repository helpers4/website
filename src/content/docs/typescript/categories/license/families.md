---
title: "families"
sidebar:
  label: "families"
description: "Groups a raw, possibly compound license string into its coarse family set — e.g."
version: "3.1.2"
---

Groups a raw, possibly compound license string into its coarse family set — e.g.
`"GPL-3.0-or-later AND LGPL-3.0-or-later"` yields `{"gpl", "lgpl"}`. Two sources reporting the
same real license under different notation (`"GPL3"` vs `"GPL-3.0-or-later"`, `"GPL"` vs
`"GPL2"`) yield the same family, so they read as agreeing rather than conflicting.

Proprietary/custom/unknown tokens all collapse to a single shared unknown-family sentinel
rather than each becoming their own one-off family, so a batch of otherwise-identical
`"custom:<vendor>"` strings don't look like dozens of distinct disagreeing licenses. Use
isKnown to check whether any real (non-sentinel) family was found.

> Available since v3.1.2

## Import

```ts
import { families } from '@helpers4/license';
// or, from the all-in-one package (same code, one install):
import { families } from 'helpers4/license';
```

## Signature


```ts
families(raw: string): Set<string>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `raw` | `string` | A raw license string, single \(\`"MIT"\`\) or compound \(\`"GPL\-3\.0\+ AND LGPL\-3\.0\+"\`\) |

## Returns

`Set<string>` — The set of families found; empty only when `raw` has no tokens at all (e.g. an empty string)

## Examples

### Collapse notation drift into one family

"GPL3" and "GPL-3.0-or-later" are the same real license, reported differently by two sources.

```ts
families('GPL3')
// => Set(1) { 'gpl' }
```

### Split a compound SPDX expression

"AND"/"OR" (any case) separate multiple license claims; "WITH" exception clauses are dropped.

```ts
families('GPL-3.0-or-later AND LGPL-3.0-or-later')
// => Set(2) { 'gpl', 'lgpl' }
```

### Non-informative claims collapse to one shared "unknown" family

A batch of different custom:<vendor> strings all read the same way — none of them is real evidence either way.

```ts
families('custom:Acme End User License')
// => Set(1) { 'unknown' }
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/license/families.ts)
