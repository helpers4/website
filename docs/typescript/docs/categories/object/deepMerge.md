---
sidebar_label: "deepMerge"
---

# deepMerge

Merges two or more objects deeply

## Import

```ts
import { deepMerge } from '@helpers4/object';
```

## Signature

```ts
function deepMerge<T extends Record<string, any>>(target: T, ...sources: Record<string, any>[]): T
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `target` | The target object |
| `sources` | The source objects to merge |

## Returns

The merged object

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/object/deepMerge.ts)
