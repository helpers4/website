---
title: "memoize"
sidebar:
  label: "memoize"
---

Returns a memoized version of the function that caches results.

Cache keys are derived via `JSON.stringify`; `undefined` arguments are
correctly distinguished from `null`. Arguments that are not JSON-serializable
(functions, symbols, class instances, circular references) produce a
`null`-equivalent key and are not supported.

> Available since v1.9.0

## Import

```ts
import { memoize } from '@helpers4/function';
```

## Signature


```ts
memoize<A extends unknown[], R>(func: function, options?: MemoizeOptions): function
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `func` | `function` | The function to memoize |
| `options` | `MemoizeOptions` | Optional settings (e.g. `maxSize` to cap memory usage) *(optional)* |

## Returns

`function` — The memoized function

## Examples

### Cache function results

The underlying function is only called once for the same arguments.

```ts
let calls = 0;
const expensive = memoize((n: number) => { calls++; return n * 2; });
expensive(5); // => 10 (computed)
expensive(5); // => 10 (cached)
```

## Related Types

### `MemoizeOptions`

Options for memoize.

```ts
interface MemoizeOptions {
  maxSize?: number;
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v2/helpers/function/memoize.ts)
