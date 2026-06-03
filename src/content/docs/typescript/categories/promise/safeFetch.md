---
title: "safeFetch"
sidebar:
  label: "safeFetch"
---

Wraps `fetch` with built-in error handling: returns `null` when the
request fails (network error, non-OK status, or parse error) instead
of throwing.

> Available since v2.0.0

## Import

```ts
import { safeFetch } from '@helpers4/promise';
```

## Signature


```ts
safeFetch<T>(input: RequestInfo | URL, init?: RequestInit, options: SafeFetchOptions): Promise<T | null>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `input` | `RequestInfo \| URL` | URL or `Request` object passed to `fetch` |
| `init` | `RequestInit` | Optional `RequestInit` options passed to `fetch` *(optional)* |
| `options` | `SafeFetchOptions` | Parsing options (default: `{ parse: 'json' }`) |

## Returns

`Promise<T | null>` — The parsed response body, or `null` on any failure

## Examples

### Fetch JSON safely

Returns `null` on network error or non-OK status instead of throwing.

```ts
const repo = await safeFetch<{ stars: number }>(
  'https://api.github.com/repos/helpers4/typescript'
);
if (repo === null) {
  console.warn('Failed to fetch repo data');
} else {
  console.log(repo.stars);
}
```

### Fetch plain text

Pass { parse: "text" } to get the raw response body as a string.

```ts
const content = await safeFetch<string>(
  'https://example.com/data.txt',
  undefined,
  { parse: 'text' }
);
```

## Related Types

### `SafeFetchOptions`

Options for safeFetch.

```ts
interface SafeFetchOptions {
  parse?: "text" | "json";
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/promise/safeFetch.ts)
