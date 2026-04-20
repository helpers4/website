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
| [`guard`](guard) | Wraps a function so that if it throws, a default value is returned instead of propagating the error. Works with both synchronous and asynchronous functions. |
| [`meaningPromiseOrThrow`](meaningPromiseOrThrow) | Returns a function that passes through meaningful data or throws an error. Data is considered meaningless if it is null, undefined, empty string, empty object, or empty array. |
| [`parallel`](parallel) | Runs an array of async functions with a concurrency limit. At most `limit` functions will be running at any time. |
| [`Result`](Result) | Result tuple representing either a successful value or an error. On success: `[undefined, T]`. On error: `[Error, undefined]`. |
| [`retry`](retry) | Retries a promise-returning function up to maxAttempts times |
| [`timeout`](timeout) | Wraps a promise to reject with a `TimeoutError` if it does not resolve within the specified duration. |
| [`truthyPromiseOrThrow`](truthyPromiseOrThrow) | Returns a function that passes through truthy data or throws an error. |
| [`tryit`](tryit) | Wraps a function so it never throws. Instead, it returns a `[error, result]` tuple. Useful for avoiding try/catch blocks and handling errors in a functional style. |

