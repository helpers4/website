---
title: "debounce"
sidebar:
  label: "debounce"
---

Creates a debounced function that delays invoking func until after delay milliseconds have elapsed since the last time the debounced function was invoked

> Available since v1.9.0

## Import

```ts
import { debounce } from '@helpers4/function';
```

## Signature


```ts
debounce<A extends unknown[], R>(func: function, delay: number): function
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `func` | `function` | The function to debounce |
| `delay` | `number` | The number of milliseconds to delay |

## Returns

`function` — The debounced function

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

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/function/debounce.ts)
