---
sidebar_label: "isAsyncFunction"
---

# isAsyncFunction

Checks if a value is an async function.

Returns `true` for any function declared with `async`.

> Available since v2.0.0

## Import

```ts
import { isAsyncFunction } from '@helpers4/type';
```

## Signature

```ts
isAsyncFunction(value: unknown): value
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value` — True if value is an async function

## Examples

### isAsyncFunction



```ts
```ts
isAsyncFunction(async () => {})      // => true
isAsyncFunction(async function() {}) // => true
isAsyncFunction(() => {})            // => false
isAsyncFunction(42)                  // => false
```
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/isAsyncFunction.ts)
