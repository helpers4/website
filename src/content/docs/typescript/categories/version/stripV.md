---
title: "stripV"
sidebar:
  label: "stripV"
---

# stripV

Strip the leading "v" from a version string if it exists.

> Available since v1.9.0

## Import

```ts
import { stripV } from '@helpers4/version';
```

## Signature


```ts
stripV(version: string): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `version` | `string` | The version string to process |

## Returns

`string` — The version string without leading "v", or the original value if it's not a string or doesn't start with "v"

## Examples

### Remove v prefix from a version string

Strips the leading "v" from a git tag-style version string.

```ts
stripV('v1.2.3')
// => '1.2.3'
```

### No-op when there is no v prefix

Returns the string unchanged when it does not start with "v".

```ts
stripV('1.2.3')
// => '1.2.3'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/version/stripV.ts)
