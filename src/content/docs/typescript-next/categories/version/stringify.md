---
title: "stringify"
sidebar:
  label: "stringify"
---

Reconstruct a semantic version string from a ParsedVersion object.

This is the inverse of parse:
`stringify(parse(v)) === stripV(v)` for any valid SemVer string `v`.

> Available since v2.0.0

## Import

```ts
import { stringify } from '@helpers4/version';
```

## Signature


```ts
stringify(parsed: ParsedVersion): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `parsed` | `ParsedVersion` | A parsed semantic version object. |

## Returns

`string` — The reconstructed version string (without leading `v`).

## Examples

### Reconstruct a stable version

Converts a ParsedVersion object back to a version string.

```ts
stringify({ major: 1, minor: 2, patch: 3, prerelease: [], build: [] })
// => '1.2.3'
```

### Round-trip with parse

stringify(parse(v)) returns the original version string (without leading v).

```ts
stringify(parse('2.0.0-alpha.1'))
// => '2.0.0-alpha.1'

stringify(parse('1.0.0-beta+exp.sha.5114f85'))
// => '1.0.0-beta+exp.sha.5114f85'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/version/stringify.ts)
