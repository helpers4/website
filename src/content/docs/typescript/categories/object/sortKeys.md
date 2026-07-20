---
title: "sortKeys"
sidebar:
  label: "sortKeys"
---

Creates a new object with the same entries as the input, but with its own keys sorted.
Shallow only — nested objects are copied as-is, their keys are not re-sorted.
Key order matters for things like `JSON.stringify` diffs and snapshot stability; this does
not change equality (`{a:1,b:2}` and `{b:2,a:1}` are already equal), just iteration/serialization order.
Note: integer-index-like keys (`"0"`, `"1"`, `"42"`...) are always iterated first, in numeric
order, by the JS engine itself — no object key ordering can override that language behavior.
A prototype-polluting key (`__proto__`, `constructor`, `prototype`) is silently skipped,
same as the rest of `@helpers4/object`.

> Available since v3.0.3

## Import

```ts
import { sortKeys } from '@helpers4/object';
```

## Signature


```ts
sortKeys<T extends Record<string, unknown>>(obj: T, compareFn?: function): T
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `obj` | `T` | The object whose keys to sort |
| `compareFn` | `function` | Optional custom comparator, passed directly to \`Array\.prototype\.sort\` *(optional)* |

## Returns

`T` — A new object with the same entries, own keys in sorted order

## Examples

### Sort object keys alphabetically

Useful for stable JSON.stringify output or predictable snapshot tests.

```ts
sortKeys({ b: 2, a: 1, c: 3 })
// => { a: 1, b: 2, c: 3 }
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/object/sortKeys.ts)
