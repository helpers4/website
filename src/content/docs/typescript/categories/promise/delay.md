---
title: "delay"
sidebar:
  label: "delay"
description: "Creates a promise that resolves after specified delay"
version: "3.1.9"
---

Creates a promise that resolves after specified delay

> Available since v1.9.0

## Import

```ts
import { delay } from '@helpers4/promise';
// or, from the all-in-one package (same code, one install):
import { delay } from 'helpers4/promise';
```

## Signature


```ts
delay<T = void>(ms: number, value?: T, options: DelayOptions): Promise<T>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `ms` | `number` | Milliseconds to delay |
| `value` | `T` | Optional value to resolve with *(optional)* |
| `options` | `DelayOptions` | Cancellation — see DelayOptions |

## Returns

`Promise<T>` — Promise that resolves after delay, or rejects with the signal's reason if aborted first

## Examples

### Wait a specified duration

Creates a promise that resolves after the given milliseconds.

```ts
await delay(100)
// resolves after 100ms
```

### Resolve with a value

Optionally resolves with a provided value.

```ts
const result = await delay(100, 'done')
// => 'done'
```

### Cancel the wait

An aborted signal clears the timer and rejects with its reason, so nothing is left running on teardown.

```ts
const controller = new AbortController()
const wait = delay(5000, undefined, { signal: controller.signal })
controller.abort('disabled')
await wait
// rejects with 'disabled', at once
```

## Related Types

### `DelayOptions`

Options for delay.

```ts
interface DelayOptions {
  signal?: AbortSignal;
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/promise/delay.ts)
