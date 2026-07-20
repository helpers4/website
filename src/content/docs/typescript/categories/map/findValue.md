---
title: "findValue"
sidebar:
  label: "findValue"
---

Returns the first value of a Map whose entry satisfies the predicate, in insertion order.

> Available since v3.0.3

## Import

```ts
import { findValue } from '@helpers4/map';
```

## Signature


```ts
findValue<K, V>(map: ReadonlyMap<K, V>, predicate: function): V | undefined
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `map` | `ReadonlyMap<K, V>` | The Map to search |
| `predicate` | `function` | Function invoked with \(value, key\) |

## Returns

`V | undefined` — The matching value, or `undefined` if none matches

## Examples

### Find the first matching value

Searches in insertion order and returns the value of the first match.

```ts
findValue(new Map([['a', 1], ['b', 2]]), value => value > 1)
// => 2
```

### No match

Returns undefined when nothing satisfies the predicate.

```ts
findValue(new Map([['a', 1]]), value => value > 10)
// => undefined
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/map/findValue.ts)
