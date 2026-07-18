---
title: "pipe"
sidebar:
  label: "pipe"
---

Composes functions left-to-right: the output of each function is passed as
input to the next.

The inverse of compose, which applies functions right-to-left.

> Available since v2.0.0

## Import

```ts
import { pipe } from '@helpers4/function';
```

## Signature


```ts
pipe<A, B>(fn1: function): function
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `fn1` | `function` |  |

## Returns

`function` — A function that applies `fns` in order

## Examples

### Transform a value through a pipeline

Functions are applied left-to-right; the output of each becomes the input of the next.

```ts
const process = pipe(
  (x: number) => x + 1,
  (x: number) => x * 2,
  String
);
process(3); // => "8"
```

### Sanitise a string

Chain string transforms left-to-right with pipe.

```ts
const sanitize = pipe(
  (s: string) => s.trim(),
  (s: string) => s.toLowerCase(),
  (s: string) => s.replace(/\s+/g, '-')
);
sanitize('  Hello World  '); // => "hello-world"
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v2/helpers/function/pipe.ts)
