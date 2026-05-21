---
title: "consoleLogPromise"
sidebar:
  label: "consoleLogPromise"
---

Returns a function that logs data to the console and passes it through.

> Available since v1.0.0

## Import

```ts
import { consoleLogPromise } from '@helpers4/promise';
```

## Signature


```ts
consoleLogPromise<T>(prefix?: string): function
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `prefix` | `string` | Optional prefix for the console log *(optional)* |

## Returns

`function` — A function that logs and returns the data

## Examples

### Log and pass-through in a promise chain

Creates a function that logs data with an optional prefix and returns it unchanged.

```ts
Promise.resolve(42).then(consoleLogPromise('value:'))
// logs "value: 42" and resolves with 42
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/promise/consoleLogPromise.ts)
