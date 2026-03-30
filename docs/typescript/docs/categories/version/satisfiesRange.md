---
sidebar_label: "satisfiesRange"
---

# satisfiesRange

Checks if a version satisfies a range (simple implementation)

## Import

```ts
import { satisfiesRange } from '@helpers4/version';
```

## Signature

```ts
function satisfiesRange(version: string, range: string): boolean
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `version` | Version to check |
| `range` | Range pattern (e.g., ">=1.0.0", "~1.2.0", "^1.0.0") |

## Returns

True if version satisfies the range

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/version/satisfiesRange.ts)
