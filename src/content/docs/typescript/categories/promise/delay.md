---
title: "delay"
sidebar:
  label: "delay"
---

# delay

Creates a promise that resolves after specified delay

> Available since v1.9.0

## Import

```ts
import { delay } from '@helpers4/promise';
```

## Signature


```ts
delay<T = void>(ms: number, value?: T): Promise<T>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `ms` | `number` | Milliseconds to delay |
| `value` | `T` | Optional value to resolve with *(optional)* |

## Returns

`Promise<T>` — Promise that resolves after delay

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

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/promise/delay.ts)
