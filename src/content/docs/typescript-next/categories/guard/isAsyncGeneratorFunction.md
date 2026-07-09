---
title: "isAsyncGeneratorFunction"
sidebar:
  label: "isAsyncGeneratorFunction"
---

Checks if a value is an async generator function (an `async function*` declaration or expression).

Distinct from isAsyncGenerator: this predicate targets the *function* itself,
not the async iterator it produces when called.

> Available since v2.0.3

## Import

```ts
import { isAsyncGeneratorFunction } from '@helpers4/guard';
```

## Signature


```ts
isAsyncGeneratorFunction(value: unknown): value is AsyncGeneratorFunction
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is AsyncGeneratorFunction` — `true` if value is an AsyncGeneratorFunction

## Examples

### Detect an async generator function

Returns true for async function* declarations and expressions.

```ts
async function* gen() { yield 1; }
isAsyncGeneratorFunction(gen)         // => true
isAsyncGeneratorFunction(gen())       // => false  (instance)
isAsyncGeneratorFunction(async () => {}) // => false
```

### Distinguish async generator functions from sync generator functions

isAsyncGeneratorFunction is false for sync function*.

```ts
function* sync() { yield 1; }
async function* async_() { yield 1; }
isAsyncGeneratorFunction(sync)   // => false
isAsyncGeneratorFunction(async_) // => true
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/guard/isAsyncGeneratorFunction.ts)
