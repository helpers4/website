---
title: "mapKeys"
sidebar:
  label: "mapKeys"
---

Creates a new Map with the same values but with each key transformed by a function.
If two entries derive the same new key, the later one (in insertion order) wins.

> Available since v3.0.3

## Import

```ts
import { mapKeys } from '@helpers4/map';
```

## Signature


```ts
mapKeys<K, V, R>(map: ReadonlyMap<K, V>, fn: function): Map<R, V>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `map` | `ReadonlyMap<K, V>` | The Map to transform |
| `fn` | `function` | Function invoked with \(key, value\) that returns the new key |

## Returns

`Map<R, V>` — A new Map with transformed keys

## Examples

### Uppercase every key

Creates a new Map with transformed keys and unchanged values.

```ts
mapKeys(new Map([['a', 1], ['b', 2]]), key => key.toUpperCase())
// => Map(2) { 'A' => 1, 'B' => 2 }
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/map/mapKeys.ts)
