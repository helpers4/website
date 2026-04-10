---
sidebar_label: "throttle"
---

# throttle

Creates a throttled function that only invokes func at most once per every wait milliseconds

> Available since v1.9.0

## Import

```ts
import { throttle } from '@helpers4/function';
```

## Signature

```ts
throttle<T extends function>(func: T, wait: number): function
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `func` | `T` | The function to throttle |
| `wait` | `number` | The number of milliseconds to throttle invocations to |

## Returns

`function` — The throttled function

## Examples

### Throttle rapid calls

The throttled function is invoked at most once per wait period.

```ts
const fn = throttle(() => console.log('tick'), 100);
fn(); // executes immediately
fn(); // ignored (within wait period)
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/function/throttle.ts)
