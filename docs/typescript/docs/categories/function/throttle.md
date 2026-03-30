---
sidebar_label: "throttle"
---

# throttle

Creates a throttled function that only invokes func at most once per every wait milliseconds

## Import

```ts
import { throttle } from '@helpers4/function';
```

## Signature

```ts
function throttle<T extends (...args: any[]) => any>( func: T, wait: number ): (...args: Parameters<T>) => void
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `func` | The function to throttle |
| `wait` | The number of milliseconds to throttle invocations to |

## Returns

The throttled function

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/function/throttle.ts)
