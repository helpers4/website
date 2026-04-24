---
sidebar_label: "isIterable"
---

# isIterable

Checks if a value is iterable (has a `Symbol.iterator` method).

Returns `true` for strings, arrays, Maps, Sets, generators, and any object
implementing the iterable protocol.

> Available since v2.0.0

## Import

```ts
import { isIterable } from '@helpers4/type';
```

## Signature


```ts
isIterable(value: unknown): value is Iterable<unknown, any, any>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is Iterable<unknown, any, any>` — True if value is iterable

## Examples

### isIterable



```ts
isIterable([1, 2, 3])      // => true
isIterable('hello')        // => true
isIterable(new Map())      // => true
isIterable(new Set())      // => true
isIterable({})             // => false
isIterable(42)             // => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/isIterable.ts)
