---
sidebar_label: "debounce"
---

# debounce

Creates a debounced function that delays invoking func until after delay milliseconds have elapsed since the last time the debounced function was invoked

## Import

```ts
import { debounce } from '@helpers4/function';
```

## Signature

```ts
function debounce<T extends (...args: any[]) => any>( func: T, delay: number ): (...args: Parameters<T>) => void
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `func` | The function to debounce |
| `delay` | The number of milliseconds to delay |

## Returns

The debounced function

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/function/debounce.ts)
