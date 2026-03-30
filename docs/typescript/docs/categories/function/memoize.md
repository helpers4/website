---
sidebar_label: "memoize"
---

# memoize

Returns a memoized version of the function that caches results

## Import

```ts
import { memoize } from '@helpers4/function';
```

## Signature

```ts
function memoize<T extends (...args: any[]) => any>(func: T): T
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `func` | The function to memoize |

## Returns

The memoized function

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/function/memoize.ts)
