---
title: "fetchOrThrow"
sidebar:
  label: "fetchOrThrow"
description: "Wraps `fetch` so that a non-2xx response rejects with an HttpError, instead of resolving like any other response — the…"
version: "3.1.11"
---

Wraps `fetch` so that a non-2xx response rejects with an HttpError, instead of
resolving like any other response — the throwing counterpart to `safeFetch`, for when a
failed request should fail loud. Network errors reject as `fetch` itself rejects them.

> Available since v3.1.11

## Import

```ts
import { fetchOrThrow } from '@helpers4/fetch';
// or, from the all-in-one package (same code, one install):
import { fetchOrThrow } from 'helpers4/fetch';
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

### Fail loud on a non-2xx response

Resolves with the response on success, rejects with an HttpError otherwise.

```ts
const response = await fetchOrThrow('https://api.example.com/repo');
const repo = await response.json();
```

### Handle a specific status

HttpError carries the status, the URL and the response, so a caller can branch on it.

```ts
try {
  await fetchOrThrow('https://api.example.com/missing');
} catch (error) {
  if (error instanceof HttpError && error.status === 404) {
    // error.message => 'HTTP 404 Not Found: https://api.example.com/missing'
  }
}
```

:::caution[Name conflict]
A helper named `fetchOrThrow` also exists in [`@helpers4/promise`](../promise/fetchorthrow/). If you need both in the same file, rename at import with `as`:

```ts
import { fetchOrThrow as fetchOrThrow4fetch } from '@helpers4/fetch';
import { fetchOrThrow as fetchOrThrow4promise } from '@helpers4/promise';
```

See [Name Conflicts](../../reference/naming-conflicts/) for the full resolution guide.
:::

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/fetch/fetchOrThrow.ts)
