---
title: "Promise Helpers"
sidebar:
  label: "Promise"
  order: 0
---

Utility functions for working with promise operations.

## Functions

| Function | Description |
|----------|-------------|
| [`consoleLogPromise`](./consolelogpromise/) | Returns a function that logs data to the console and passes it through\. |
| [`createMutex`](./createmutex/) | Creates a mutex: a lock allowing at most one holder at a time, queueing excess \`acquire\(\)\` callers in FIFO order\. |
| [`createSemaphore`](./createsemaphore/) | Creates a semaphore limiting concurrent access to \`permits\` holders at a time, queueing excess \`acquire\(\)\` callers in… |
| [`defer`](./defer/) | Runs an async function and guarantees that all deferred callbacks are executed afterwards, in LIFO order \(last regist… |
| [`delay`](./delay/) | Creates a promise that resolves after specified delay |
| [`falsyPromiseOrThrow`](./falsypromiseorthrow/) | Returns a function that passes through falsy data or throws an error\. |
| [`guard`](./guard/) | Wraps a function so that if it throws, a default value is returned instead of propagating the error\. |
| [`meaningPromiseOrThrow`](./meaningpromiseorthrow/) | Returns a function that passes through meaningful data or throws an error\. |
| [`parallel`](./parallel/) | Runs an array of async functions with a concurrency limit\. |
| [`parallelSettle`](./parallelsettle/) | Runs an array of async functions with a concurrency limit, partitioning the outcomes instead of rejecting on the firs… |
| [`resolveRecord`](./resolverecord/) | Resolves an array of keys into a record by calling an async mapper for each key\. |
| [`retry`](./retry/) | Retries a promise\-returning function up to maxAttempts times |
| [`safeFetch`](./safefetch/) | Wraps \`fetch\` with built\-in error handling: returns \`null\` when the request fails \(network error, non\-OK status, or p… |
| [`settle`](./settle/) | Runs an array of promises concurrently and partitions the outcomes instead of rejecting on the first failure, unlike … |
| [`timeout`](./timeout/) | Wraps a promise to reject with a \`TimeoutError\` if it does not resolve within the specified duration\. |
| [`truthyPromiseOrThrow`](./truthypromiseorthrow/) | Returns a function that passes through truthy data or throws an error\. |
| [`tryit`](./tryit/) | Wraps a function so it never throws\. |
| `withResolvers` | <span class="badge badge--secondary">native JS</span> `Promise.withResolvers()` *(ES2024)* |

