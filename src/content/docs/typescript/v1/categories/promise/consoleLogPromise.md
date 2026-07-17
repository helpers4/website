---
title: "consoleLogPromise"
sidebar:
  label: "consoleLogPromise"
---

Generates a `.then()` interceptor that logs the resolved value to the console without altering
it.

> Available since v1.0.1

## Import

```ts
import { consoleLogPromise } from '@helpers4/promise';
```

## Signature

```ts
consoleLogPromise<T>(prefix?: string): (data: T) => T
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `prefix` | `string` | Optional. Prefixes the logged value in the console. |

## Returns

`(data: T) => T` — A `.then()` interceptor: logs `prefix, data` to the console, then returns
`data` unchanged.

## Examples

### Log a value mid-chain

```ts
import { consoleLogPromise } from '@helpers4/promise';

Promise.resolve(42).then(consoleLogPromise('The answer:'));
// => 'The answer:', 42
```

## Source

[View on npm](https://www.npmjs.com/package/@helpers4/promise/v/1.1.0)
