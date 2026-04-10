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
| [`meaningPromiseOrThrow`](meaningPromiseOrThrow) | Returns a function that passes through meaningful data or throws an error. Data is considered meaningless if it is null, undefined, empty string, empty object, or empty array. |
| [`retry`](retry) | Retries a promise-returning function up to maxAttempts times |
| [`truthyPromiseOrThrow`](truthyPromiseOrThrow) | Returns a function that passes through truthy data or throws an error. |

