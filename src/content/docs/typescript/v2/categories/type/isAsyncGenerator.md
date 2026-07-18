---
title: "isAsyncGenerator"
sidebar:
  label: "isAsyncGenerator"
---

Checks if a value is an async generator object (the result of calling an `async function*`).

Distinct from isAsyncGeneratorFunction: this predicate targets the
*instance* produced by calling an async generator function, not the function itself.

> Available since v2.0.3

## Import

```ts
import { isAsyncGenerator } from '@helpers4/type';
```

## Signature


```ts
isAsyncGenerator(value: unknown): value is AsyncGenerator<unknown, unknown, unknown>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is AsyncGenerator<unknown, unknown, unknown>` — `true` if value is an AsyncGenerator instance

## Examples

### Detect an async generator instance

Returns true only for the object produced by calling an async function*.

```ts
async function* gen() { yield 1; }
isAsyncGenerator(gen())  // => true   (instance)
isAsyncGenerator(gen)    // => false  (function)
isAsyncGenerator([])     // => false
```

### Distinguish async from sync generators

isAsyncGenerator is false for sync generator instances.

```ts
function* sync() { yield 1; }
async function* async_() { yield 1; }
isAsyncGenerator(sync())   // => false
isAsyncGenerator(async_()) // => true
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v2/helpers/type/isAsyncGenerator.ts)
