---
sidebar_label: "increment"
---

# increment

Increments a semantic version

## Import

```ts
import { increment } from '@helpers4/version';
```

## Signature

```ts
function increment( version: string, type: 'major' | 'minor' | 'patch' ): string
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `version` | The version to increment |
| `type` | The increment type ('major', 'minor', 'patch') |

## Returns

Incremented version string

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/version/increment.ts)
