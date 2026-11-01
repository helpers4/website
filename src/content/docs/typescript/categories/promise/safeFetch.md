---
title: "safeFetch"
sidebar:
  label: "safeFetch"
description: "Wraps `fetch` and returns `null` when the request fails (network error, non-OK status, or parse error) instead of throw…"
version: "3.1.12"
---

Wraps `fetch` and returns `null` when the request fails (network error, non-OK status, or parse
error) instead of throwing.

> Available since v2.0.0

## Import

```ts
import { safeFetch } from '@helpers4/promise';
// or, from the all-in-one package (same code, one install):
import { safeFetch } from 'helpers4/promise';
```

## Signature


```ts
safeFetch<T>(input: RequestInfo | URL, init?: RequestInit, options: SafeFetchOptions): Promise<T | null>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `input` | `RequestInfo \| URL` | URL or \`Request\` object passed to \`fetch\` |
| `init` | `RequestInit` | Optional \`RequestInit\` options passed to \`fetch\` *(optional)* |
| `options` | `SafeFetchOptions` | Parsing options \(default: \`\{ parse: 'json' \}\`\) |

## Returns

`Promise<T | null>` — The parsed response body, or `null` on any failure

## Examples

### safeFetch



```ts
const data = await safeFetch<{ stars: number }>('https://api.example.com/repo');
```

## Related Types

### `SafeFetchOptions`

Options for safeFetch.

```ts
type SafeFetchOptions = FetchSafeFetchOptions
```

:::caution[Name conflict]
A helper named `safeFetch` also exists in [`@helpers4/fetch`](../fetch/safefetch/). If you need both in the same file, rename at import with `as`:

```ts
import { safeFetch as safeFetch4promise } from '@helpers4/promise';
import { safeFetch as safeFetch4fetch } from '@helpers4/fetch';
```

See [Name Conflicts](../../reference/naming-conflicts/) for the full resolution guide.
:::

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/promise/safeFetch.ts)
