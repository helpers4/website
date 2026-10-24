---
title: "debounce"
sidebar:
  label: "debounce"
description: "Creates a debounced function that delays invoking func until after delay milliseconds have elapsed since the last time…"
version: "3.1.7"
---

Creates a debounced function that delays invoking func until after delay milliseconds have elapsed since the last time the debounced function was invoked

Call `cancel()`, or abort the `signal`, on teardown: otherwise the pending call still runs
after its owner is gone.

> Available since v1.9.0

## Import

```ts
import { debounce } from '@helpers4/function';
// or, from the all-in-one package (same code, one install):
import { debounce } from 'helpers4/function';
```

## Signature


```ts
debounce<A extends unknown[], R>(func: function, delay: number, options: DebounceOptions): Debounced<A>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `func` | `function` | The function to debounce |
| `delay` | `number` | The number of milliseconds to delay |
| `options` | `DebounceOptions` | Cancellation — see DebounceOptions |

## Returns

`Debounced<A>` — The debounced function, with a `cancel()` method

## Examples

### Debounce a function

The debounced function is only called once after the delay, even if invoked multiple times.

```ts
const fn = debounce((x: number) => console.log(x), 100);
fn(1);
fn(2);
fn(3);
// Only logs 3 after 100ms
```

### Cancel on teardown

An aborted signal, or cancel(), drops the call still waiting, so it never runs after its owner is gone.

```ts
const controller = new AbortController();
const fn = debounce(() => console.log('late'), 100, { signal: controller.signal });
fn();
fn();
controller.abort();
// nothing is logged after the abort
```

## Related Types

### `Debounced`

A function returned by debounce.

```ts
interface Debounced<A extends unknown[]> {
  cancel(): void;
}
```

### `DebounceOptions`

Options for debounce.

```ts
interface DebounceOptions {
  signal?: AbortSignal;
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/function/debounce.ts)
