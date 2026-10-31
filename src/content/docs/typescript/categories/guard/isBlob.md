---
title: "isBlob"
sidebar:
  label: "isBlob"
description: "Checks if a value is a Blob instance."
version: "3.1.11"
---

Checks if a value is a Blob instance.

Useful for filtering or type-narrowing in a functional pipeline:
`values.filter(isBlob)`

**Known limitation:** the declared type is the DOM `Blob`, so a project compiled without the DOM
lib (GJS, for example) gets `Cannot find name 'Blob'` from this package's `index.d.ts`. At
runtime it is safe everywhere: it returns `false` where `Blob` does not exist. The alternatives
are not clearly better, so it is left as is: a structural `BlobLike` type would narrow to that
type instead of `Blob` for callers that have the DOM, moving it to `browser` would break
existing imports (and `Blob` also exists in Node.js, Deno and Bun), and a polyfill would not fix
the compile error. To be reconsidered for v4.

> Available since v2.0.0

## Import

```ts
import { isBlob } from '@helpers4/guard';
// or, from the all-in-one package (same code, one install):
import { isBlob } from 'helpers4/guard';
```

## Signature


```ts
isBlob(value: unknown): value is Blob
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is Blob` — True if value is a Blob

## Examples

### Detect a Blob

Returns true only for Blob instances.

```ts
isBlob(new Blob(['hello'])) // => true
isBlob(new Blob([], { type: 'application/json' })) // => true
isBlob('hello')             // => false
```

### Filter Blobs from a mixed array

Use as a predicate in .filter() to extract Blob values.

```ts
const values = [new Blob(['a']), 'text', new Blob(['b']), 42];
values.filter(isBlob)
// => [Blob, Blob]
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/guard/isBlob.ts)
