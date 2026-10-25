---
title: "forEachAsync"
sidebar:
  label: "forEachAsync"
description: "The async counterpart to `Array.prototype.forEach`: runs `fn` for every item for its side effects, discarding any retur…"
version: "3.1.8"
---

The async counterpart to `Array.prototype.forEach`: runs `fn` for every item for its
side effects, discarding any return value. Prefer mapAsync when you need the
results — this only exists to signal that intent clearly, same as the sync
`forEach`/`map` pair.

> Available since v3.0.4

## Import

```ts
import { forEachAsync } from '@helpers4/array';
// or, from the all-in-one package (same code, one install):
import { forEachAsync } from 'helpers4/array';
```

## Signature


```ts
forEachAsync<T>(array: readonly T[], fn: function, options?: number | AsyncArrayOptions): Promise<void>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `array` | `readonly T[]` | The array to iterate |
| `fn` | `function` | Async \(or sync\) function called with \`\(item, index\)\` |
| `options` | `number \| AsyncArrayOptions` | Maximum number of concurrent calls \(defaults to unlimited\), or the options   with a \`signal\` to stop — see AsyncArrayOptions *(optional)* |

## Returns

`Promise<void>` — A promise that resolves once every call has settled

## Examples

### Upload files with a concurrency cap

Runs fn for its side effects only; at most `concurrency` calls at once.

```ts
await forEachAsync(files, (file) => uploadFile(file), 3)
// uploads at most 3 files concurrently
```

## Related Types

### `AsyncArrayOptions`

Options for mapAsync, mapSettled, filterAsync and forEachAsync.

```ts
interface AsyncArrayOptions {
  concurrency?: number;
  signal?: AbortSignal;
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/forEachAsync.ts)
