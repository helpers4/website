---
title: "fetchJson"
sidebar:
  label: "fetchJson"
description: "Fetches a URL and returns its parsed JSON body, retrying transient failures (network errors, `5xx` and `429`)."
version: "3.1.12"
---

Fetches a URL and returns its parsed JSON body, retrying transient failures (network errors,
`5xx` and `429`).

> Available since v3.1.5

## Import

```ts
import { fetchJson } from '@helpers4/promise';
// or, from the all-in-one package (same code, one install):
import { fetchJson } from 'helpers4/promise';
```

## Signature


```ts
fetchJson<T>(input: RequestInfo | URL, init?: RequestInit, options: FetchJsonOptions): Promise<T>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `input` | `RequestInfo \| URL` | URL or \`Request\` object passed to \`fetch\` |
| `init` | `RequestInit` | Optional \`RequestInit\` options passed to \`fetch\` *(optional)* |
| `options` | `FetchJsonOptions` | Retry configuration — see FetchJsonOptions |

## Returns

`Promise<T>` — The parsed JSON body

## Examples

### fetchJson



```ts
const repo = await fetchJson<{ stars: number }>('https://api.example.com/repo');
```

## Related Types

### `FetchJsonOptions`

Options for fetchJson.

```ts
type FetchJsonOptions = FetchFetchJsonOptions
```

:::caution[Name conflict]
A helper named `fetchJson` also exists in [`@helpers4/fetch`](../fetch/fetchjson/). If you need both in the same file, rename at import with `as`:

```ts
import { fetchJson as fetchJson4promise } from '@helpers4/promise';
import { fetchJson as fetchJson4fetch } from '@helpers4/fetch';
```

See [Name Conflicts](../../reference/naming-conflicts/) for the full resolution guide.
:::

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/promise/fetchJson.ts)
