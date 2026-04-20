---
sidebar_label: "Promise"
sidebar_position: 0
title: "Promise Helpers"
---

# Promise Helpers

Utility functions for working with promise operations.

## Functions

| Function | Description |
|----------|-------------|
| [`consoleLogPromise`](consoleLogPromise) | Returns a function that logs data to the console and passes it through. |
| [`delay`](delay) | Creates a promise that resolves after specified delay |
| [`falsyPromiseOrThrow`](falsyPromiseOrThrow) | Returns a function that passes through falsy data or throws an error. |
| [`guard`](guard) | Wraps a function so that if it throws, a default value is returned instead of propagating the error. |
| [`meaningPromiseOrThrow`](meaningPromiseOrThrow) | Returns a function that passes through meaningful data or throws an error. |
| [`parallel`](parallel) | Runs an array of async functions with a concurrency limit. |
| [`Result`](Result) | Result tuple representing either a successful value or an error. |
| [`retry`](retry) | Retries a promise-returning function up to maxAttempts times |
| [`timeout`](timeout) | Wraps a promise to reject with a `TimeoutError` if it does not resolve within the specified duration. |
| [`truthyPromiseOrThrow`](truthyPromiseOrThrow) | Returns a function that passes through truthy data or throws an error. |
| [`tryit`](tryit) | Wraps a function so it never throws. |
| `withResolvers` | <span class="badge badge--secondary">native JS</span> `Promise.withResolvers()` *(ES2024)* |

