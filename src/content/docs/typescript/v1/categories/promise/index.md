---
title: "Promise Helpers"
sidebar:
  label: "Promise"
  order: 0
---

`.then()` interceptors for guarding promise chains and logging values in-line.

## Functions

| Function | Description |
|----------|-------------|
| [`consoleLogPromise`](./consolelogpromise/) | Logs the resolved value to the console without altering it. |
| [`falsyPromiseOrThrow`](./falsypromiseorthrow/) | Throws if the resolved value is truthy. |
| [`meaningPromiseOrThrow`](./meaningpromiseorthrow/) | Throws if the resolved value is empty (`""`, `null`, `undefined`, `[]`, `{}`). |
| [`truthyPromiseOrThrow`](./truthypromiseorthrow/) | Throws if the resolved value is falsy. |
