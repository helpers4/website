---
title: "fetchJson"
sidebar:
  label: "fetchJson"
description: "Fetches a URL and returns its parsed JSON body, retrying transient failures."
version: "3.1.7"
---

Fetches a URL and returns its parsed JSON body, retrying transient failures.

Retried: network errors, `5xx` and `429` responses. Not retried, and thrown at once: other
`4xx` responses, a body that is not valid JSON (a `SyntaxError`) and an aborted request.
After the last attempt, the last error is thrown: an HttpError (with `status` and
`url`) for a bad status, or whatever `fetch` rejected with.

Pass a URL or a string: a `Request` with a body cannot be sent twice, so it can't be retried.

`init.signal` cancels the whole call: the running request, and the wait before the next one.

> Available since v3.1.5

## Import

```ts
import { fetchJson } from '@helpers4/promise';
// or, from the all-in-one package (same code, one install):
import { fetchJson } from 'helpers4/promise';
```

## Signature


```ts
fetchJson<T>(input: URL | RequestInfo, init?: RequestInit, options: FetchJsonOptions): Promise<T>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `input` | `URL \| RequestInfo` | URL or \`Request\` object passed to \`fetch\` |
| `init` | `RequestInit` | Optional \`RequestInit\` options passed to \`fetch\` *(optional)* |
| `options` | `FetchJsonOptions` | Retry configuration — see FetchJsonOptions |

## Returns

`Promise<T>` — The parsed JSON body

## Examples

### Fetch JSON, retrying transient failures

A 503 is retried; once the server answers, the parsed body is returned.

```ts
// the server answers 503, then 200 with { "stars": 42 }
await fetchJson<{ stars: number }>('https://api.example.com/repo', undefined, { retry: { delayMs: 0 } })
// => { stars: 42 }
```

### A 404 is not retried

Client errors fail at once with an HttpError carrying the status.

```ts
await fetchJson('https://api.example.com/missing')
// throws HttpError { status: 404 } after a single request
```

## Related Types

### `FetchJsonOptions`

Options for fetchJson.

```ts
interface FetchJsonOptions {
  retry?: RetryOptions;
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/promise/fetchJson.ts)
