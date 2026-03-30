---
sidebar_label: "stripV"
---

# stripV

Strip the leading "v" from a version string if it exists.

## Import

```ts
import { stripV } from '@helpers4/version';
```

## Signature

```ts
function stripV(version: string | null | undefined): string | null | undefined
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `version` | The version string to process |

## Returns

The version string without leading "v", or the original value if it's not a string or doesn't start with "v"

## Example

```ts
stripV("v1.2.3")     // "1.2.3"
stripV("1.2.3")      // "1.2.3"
stripV("v20.1.0")    // "20.1.0"
stripV(null)         // null
stripV(undefined)    // undefined
stripV("")           // ""
stripV("1.0.0-beta") // "1.0.0-beta"
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/version/stripV.ts)
