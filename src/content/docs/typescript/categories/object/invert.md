---
title: "invert"
sidebar:
  label: "invert"
---

Returns a new object with keys and values swapped.
If multiple keys share the same value, the last one wins.

> Available since v2.0.0

## Import

```ts
import { invert } from '@helpers4/object';
```

## Signature


```ts
invert<K extends string, V extends PropertyKey>(obj: Record<K, V>): Record<V, K>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `obj` | `Record<K, V>` | The object whose keys and values are to be swapped |

## Returns

`Record<V, K>` — A new object with values as keys and original keys as values

## Examples

### Swap keys and values

Returns a new object with keys and values swapped.

```ts
invert({ a: 'x', b: 'y', c: 'z' })
// => { x: 'a', y: 'b', z: 'c' }
```

### Build a reverse lookup map

Useful when you have a code-to-label map and need label-to-code.

```ts
const STATUS_LABELS = { 200: 'OK', 404: 'Not Found', 500: 'Internal Server Error' };
const LABEL_TO_CODE = invert(STATUS_LABELS);

LABEL_TO_CODE['OK']; // => '200'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/object/invert.ts)
