---
title: "Fetch Helpers"
sidebar:
  label: "≡ Overview"
  order: 0
---

Utility functions for working with fetch operations.

## Functions

| Function | Description |
|----------|-------------|
| [`fetchJson`](./fetchjson/) | Fetches a URL and returns its parsed JSON body, retrying transient failures\. |
| [`fetchOrThrow`](./fetchorthrow/) | Wraps \`fetch\` so that a non\-2xx response rejects with an HttpError, instead of resolving like any other response — the… |
| [`safeFetch`](./safefetch/) | Wraps \`fetch\` with built\-in error handling: returns \`null\` when the request fails \(network error, non\-OK status, or par… |

