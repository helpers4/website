---
title: "isBlob"
sidebar:
  label: "isBlob"
---

# isBlob

Checks if a value is a Blob instance.

Useful for filtering or type-narrowing in a functional pipeline:
`values.filter(isBlob)`

> Available since next

## Import

```ts
import { isBlob } from '@helpers4/type';
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

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/isBlob.ts)
