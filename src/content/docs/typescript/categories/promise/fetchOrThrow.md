---
title: "fetchOrThrow"
sidebar:
  label: "fetchOrThrow"
description: "Wraps `fetch` so that a non-2xx response rejects with an HttpError."
version: "3.1.12"
---

Wraps `fetch` so that a non-2xx response rejects with an HttpError.

> Available since v3.1.3

## Import

```ts
import { fetchOrThrow } from '@helpers4/promise';
// or, from the all-in-one package (same code, one install):
import { fetchOrThrow } from 'helpers4/promise';
```

## Signature


```ts
fetchOrThrow(input: RequestInfo | URL, init?: RequestInit): Promise<Response>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `input` | `RequestInfo \| URL` | URL or \`Request\` object passed to \`fetch\` |
| `init` | `RequestInit` | Optional \`RequestInit\` options passed to \`fetch\` *(optional)* |

## Returns

`Promise<Response>` — The response, body unread, when its status is 2xx

## Examples

### fetchOrThrow



```ts
const response = await fetchOrThrow('https://api.example.com/repo');
```

## Related Types

### `HttpError`



```ts
type HttpError = FetchHttpError
```

:::caution[Name conflict]
A helper named `fetchOrThrow` also exists in [`@helpers4/fetch`](../fetch/fetchorthrow/). If you need both in the same file, rename at import with `as`:

```ts
import { fetchOrThrow as fetchOrThrow4promise } from '@helpers4/promise';
import { fetchOrThrow as fetchOrThrow4fetch } from '@helpers4/fetch';
```

See [Name Conflicts](../../reference/naming-conflicts/) for the full resolution guide.
:::

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/promise/fetchOrThrow.ts)
