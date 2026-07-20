---
title: "findKey"
sidebar:
  label: "findKey"
---

Returns the first key of a Map whose entry satisfies the predicate, in insertion order.

> Available since v3.0.3

## Import

```ts
import { findKey } from '@helpers4/map';
```

## Signature


```ts
findKey<K, V>(map: ReadonlyMap<K, V>, predicate: function): K | undefined
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `map` | `ReadonlyMap<K, V>` | The Map to search |
| `predicate` | `function` | Function invoked with \(value, key\) |

## Returns

`K | undefined` — The matching key, or `undefined` if none matches

## Examples

### Find the key of the first matching entry

Searches in insertion order and returns the key of the first match.

```ts
findKey(new Map([['a', 1], ['b', 2]]), value => value > 1)
// => 'b'
```

### No match

Returns undefined when nothing satisfies the predicate.

```ts
findKey(new Map([['a', 1]]), value => value > 10)
// => undefined
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/map/findKey.ts)
