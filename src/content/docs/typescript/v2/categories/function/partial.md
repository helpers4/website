---
title: "partial"
sidebar:
  label: "partial"
---

Partially applies arguments to a function, returning a new function that
accepts the remaining arguments.

> Available since v2.0.0

## Import

```ts
import { partial } from '@helpers4/function';
```

## Signature


```ts
partial<A, R>(fn: function, a: A): function
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `fn` | `function` | The function to partially apply |
| `a` | `A` |  |

## Returns

`function` — A function waiting for the remaining arguments

## Examples

### Create a specialised multiplier

Pre-fill the first argument to derive a specialised function.

```ts
const multiply = (a: number, b: number) => a * b;
const double = partial(multiply, 2);
const triple = partial(multiply, 3);

double(5); // => 10
triple(5); // => 15
```

### Pre-fill multiple arguments

Supply several arguments up front, leaving only the last one open.

```ts
const format = (prefix: string, sep: string, value: string) =>
  `${prefix}${sep}${value}`;

const withLabel = partial(format, 'Status', ': ');
withLabel('passing'); // => 'Status: passing'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v2/helpers/function/partial.ts)
