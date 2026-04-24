---
sidebar_label: "memoize"
---

# memoize

Returns a memoized version of the function that caches results

> Available since v1.9.0

## Import

```ts
import { memoize } from '@helpers4/function';
```

## Signature


```ts
memoize<A extends unknown[], R>(func: function): function
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `func` | `function` | The function to memoize |

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

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/function/memoize.ts)
