---
title: "increment"
sidebar:
  label: "increment"
---

Increments a semantic version

> Available since v1.9.0

## Import

```ts
import { increment } from '@helpers4/version';
```

## Signature


```ts
increment(version: string, type: "major" | "minor" | "patch"): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `version` | `string` | The version to increment |
| `type` | `"major" \| "minor" \| "patch"` | The increment type ('major', 'minor', 'patch') |

## Returns

`string` — Incremented version string

## Examples

### Increment the patch version

Bumps the patch number while keeping major and minor.

```ts
increment('1.2.3', 'patch')
// => '1.2.4'
```

### Increment the minor version

Bumps the minor number and resets patch to 0.

```ts
increment('1.2.3', 'minor')
// => '1.3.0'
```

### Preserve the v prefix

The v prefix is preserved if present in the input.

```ts
increment('v1.0.0', 'major')
// => 'v2.0.0'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/version/increment.ts)
