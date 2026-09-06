---
title: "isKnown"
sidebar:
  label: "isKnown"
description: "Whether a raw license string resolves to at least one recognized family — `false` for an empty string, a purely non-inf…"
version: "3.1.2"
---

Whether a raw license string resolves to at least one recognized family — `false` for an
empty string, a purely non-informative claim (`"custom"`, `"unknown"`, `"LicenseRef-EULA"`,
...), or a compound expression where every token is non-informative.

> Available since v3.1.2

## Import

```ts
import { isKnown } from '@helpers4/license';
// or, from the all-in-one package (same code, one install):
import { isKnown } from 'helpers4/license';
```

## Signature


```ts
isKnown(raw: string): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `raw` | `string` | The raw license string to check |

## Returns

`boolean` — `true` if at least one token in `raw` resolves to a real family

## Examples

### Filter out entries with no real license information

Handy for flagging catalog entries whose license field is not actually usable.

```ts
['MIT', 'custom:Acme EULA', 'unknown'].filter(isKnown)
// => ['MIT']
```

### A vendor-specific EULA is not a recognized family

"custom:<vendor>" names the vendor's own license text, not a known open-source family.

```ts
isKnown('custom:Acme End User License')
// => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/license/isKnown.ts)
