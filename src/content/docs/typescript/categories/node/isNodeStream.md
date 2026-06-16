---
title: "isNodeStream"
sidebar:
  label: "isNodeStream"
---

Checks if a value is a Node.js stream (has a `.pipe()` method).

Uses duck-typing: any object with a `pipe` function qualifies, covering
`Readable`, `Writable`, `Duplex`, `Transform`, and custom stream-compatible
objects without importing from `node:stream`.

> Available since v2.0.3

## Import

```ts
import { isNodeStream } from '@helpers4/node';
```

## Signature


```ts
isNodeStream(value: unknown): value is object
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is object` — `true` if value is a Node.js stream

## Examples

### Detect a Node.js stream

Returns true for any object with a .pipe() method (Readable, Writable, Transform, etc.).

```ts
import { Readable } from 'node:stream';
isNodeStream(new Readable({ read() {} })) // => true
isNodeStream({})                          // => false
isNodeStream(null)                        // => false
```

### Guard before piping an unknown value

Use isNodeStream to safely pipe only known streams.

```ts
import { Writable } from 'node:stream';
function pipeToOutput(source: unknown, dest: Writable): void {
  if (isNodeStream(source)) {
    source.pipe(dest);
  }
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/node/isNodeStream.ts)
