---
sidebar_label: "arrayEquals"
---

# arrayEquals

Simple helper that checks if two lists are identical.
The order of elements in the list is not important.

## Import

```ts
import { arrayEquals } from '@helpers4/array';
```

## Signature

```ts
function arrayEquals<T>(arr1: T[], arr2: T[]): boolean
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `arr1` | One list |
| `arr2` | Another list |

## Returns

`true` if the list contain the same items, `false` otherwise.

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/arrayEquals.ts)
