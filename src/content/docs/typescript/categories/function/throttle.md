---
title: "throttle"
sidebar:
  label: "throttle"
description: "Creates a throttled function that only invokes func at most once per every wait milliseconds  Call `cancel()`, or abort…"
version: "3.1.10"
---

Creates a throttled function that only invokes func at most once per every wait milliseconds

Call `cancel()`, or abort the `signal`, on teardown: otherwise the trailing call still runs
after its owner is gone.

> Available since v1.9.0

## Import

```ts
import { throttle } from '@helpers4/function';
// or, from the all-in-one package (same code, one install):
import { throttle } from 'helpers4/function';
```

## Signature


```ts
throttle<A extends unknown[], R>(func: function, wait: number, options: ThrottleOptions): Throttled<A>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `func` | `function` | The function to throttle |
| `wait` | `number` | The number of milliseconds to throttle invocations to |
| `options` | `ThrottleOptions` | Cancellation — see ThrottleOptions |

## Returns

`Throttled<A>` — The throttled function, with a `cancel()` method

## Examples

### Throttle rapid calls

The throttled function is invoked at most once per wait period.

```ts
const fn = throttle(() => console.log('tick'), 100);
fn(); // executes immediately
fn(); // ignored (within wait period)
```

### Cancel on teardown

An aborted signal, or cancel(), drops the call still waiting, so it never runs after its owner is gone.

```ts
const controller = new AbortController();
const fn = throttle(() => console.log('late'), 100, { signal: controller.signal });
fn();
fn();
controller.abort();
// nothing is logged after the abort
```

## Related Types

### `Throttled`

A function returned by throttle.

```ts
interface Throttled<A extends unknown[]> {
  cancel(): void;
}
```

### `ThrottleOptions`

Options for throttle.

```ts
interface ThrottleOptions {
  signal?: AbortSignalLike;
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/function/throttle.ts)
