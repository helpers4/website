---
title: "isSharedArrayBuffer"
sidebar:
  label: "isSharedArrayBuffer"
---

Checks if a value is a `SharedArrayBuffer` instance.

`SharedArrayBuffer` enables shared memory between the main thread and worker
threads. In browsers without COOP/COEP headers, `SharedArrayBuffer` may be
unavailable; this function returns `false` in that case.

> Available since v2.0.3

## Import

```ts
import { isSharedArrayBuffer } from '@helpers4/node';
```

## Signature


```ts
isSharedArrayBuffer(value: unknown): value is SharedArrayBuffer
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is SharedArrayBuffer` — `true` if value is a SharedArrayBuffer

## Examples

### Distinguish SharedArrayBuffer from ArrayBuffer

Returns true only for SharedArrayBuffer instances, not plain ArrayBuffers.

```ts
isSharedArrayBuffer(new SharedArrayBuffer(8)) // => true
isSharedArrayBuffer(new ArrayBuffer(8))       // => false
isSharedArrayBuffer(null)                     // => false
```

### Safe shared memory check before worker communication

Use as a guard to ensure a buffer can be transferred to a Worker.

```ts
function sendToWorker(buffer: unknown): void {
  if (isSharedArrayBuffer(buffer)) {
    // buffer is SharedArrayBuffer — can be shared directly
    // worker.postMessage({ buffer });
  } else {
    // must transfer or copy
  }
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/node/isSharedArrayBuffer.ts)
