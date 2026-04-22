---
sidebar_label: "tryit"
---

# tryit

Wraps a function so it never throws. Instead, it returns a `[error, result]` tuple.
Useful for avoiding try/catch blocks and handling errors in a functional style.

> Available since v2.0.0

## Import

```ts
import { tryit } from '@helpers4/promise';
```

## Signature

```ts
tryit<TArgs extends readonly unknown[], TReturn>(fn: function): function
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `fn` | `function` | The function to wrap (sync or async) |

## Returns

`function` — A new function that returns a `Result` tuple

## Examples

### Safe JSON parsing

Wraps JSON.parse to return a tuple instead of throwing.

```ts
const safeParse = tryit(JSON.parse);
const [error, data] = safeParse('{"a":1}');
// error === undefined, data === { a: 1 }
```

### Catching errors without try/catch

On error, the first element of the tuple is the Error.

```ts
const safeParse = tryit(JSON.parse);
const [error, data] = safeParse('invalid');
// error instanceof SyntaxError, data === undefined
```

## Related Types

### `Result`

Result tuple representing either a successful value or an error.
On success: `[undefined, T]`. On error: `[Error, undefined]`.

```ts
type Result<T> = [error: undefined, value: T] | [error: Error, value: undefined]
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/promise/tryit.ts)
