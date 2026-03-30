---
sidebar_label: "delay"
---

# delay

Creates a promise that resolves after specified delay

## Import

```ts
import { delay } from '@helpers4/promise';
```

## Signature

```ts
function delay<T = void>(ms: number, value?: T): Promise<T>
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `ms` | Milliseconds to delay |
| `value` | Optional value to resolve with |

## Returns

Promise that resolves after delay

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/promise/delay.ts)
