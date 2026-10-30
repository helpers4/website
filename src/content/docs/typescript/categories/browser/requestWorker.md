---
title: "requestWorker"
sidebar:
  label: "requestWorker"
description: "Runs one job in a module worker: starts it, posts the request, relays its progress, resolves with its result and ends i…"
version: "3.1.10"
---

Runs one job in a module worker: starts it, posts the request, relays its progress, resolves
with its result and ends it, whatever the outcome (result, error, `error` event or abort).
The worker answers with WorkerReply messages; a result can carry transferables by
posting them as `postMessage(reply, transferList)`.

Outside a browser (no `Worker`), a URL or a string rejects with a `TypeError`; a factory is
called as it is.

> Available since v3.1.10

## Import

```ts
import { requestWorker } from '@helpers4/browser';
// or, from the all-in-one package (same code, one install):
import { requestWorker } from 'helpers4/browser';
```

## Signature


```ts
requestWorker<Request, Result, Progress = never>(worker: string | URL | function, request: Request, options: RequestWorkerOptions<Progress>): Promise<Result>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `worker` | `string \| URL \| function` | The worker's URL, or a function that creates it \(needed for bundlers, which only   see \`new Worker\(new URL\('\./job\.js', import\.meta\.url\), \{ type: 'module' \}\)\` written in place\) |
| `request` | `Request` | The message to post |
| `options` | `RequestWorkerOptions<Progress>` | Transferables, progress and cancellation — see RequestWorkerOptions |

## Returns

`Promise<Result>` — The worker's result

## Examples

### Run a job with progress

The worker replies with progress messages, then a result; it is ended afterwards.

```ts
const bytes = await requestWorker<string, Uint8Array, number>(
  () => new Worker(new URL('./bake.js', import.meta.url), { type: 'module' }),
  'design.fig',
  { onProgress: (done) => bar.update(done) },
);
```

## Related Types

### `RequestWorkerOptions`

Options of requestWorker.

```ts
interface RequestWorkerOptions<Progress> {
  onProgress?: function;
  signal?: AbortSignalLike;
  transfer?: Transferable[];
}
```

### `WorkerReply`

What a worker answers to requestWorker, through `postMessage`: any number of
`{ type: 'progress', value }`, then one `{ type: 'result', value }` or `{ type: 'error', message }`.

```ts
type WorkerReply<Result, Progress = never> =
  | { type: 'progress'; value: Progress }
  | { type: 'result'; value: Result }
  | { type: 'error'; message: string }
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/browser/requestWorker.ts)
