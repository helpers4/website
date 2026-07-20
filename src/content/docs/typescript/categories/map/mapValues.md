---
title: "mapValues"
sidebar:
  label: "mapValues"
---

Creates a new Map with the same keys but with each value transformed by a function.

> Available since v3.0.3

## Import

```ts
import { mapValues } from '@helpers4/map';
```

## Signature


```ts
mapValues<K, V, R>(map: ReadonlyMap<K, V>, fn: function): Map<K, R>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `map` | `ReadonlyMap<K, V>` | The Map to transform |
| `fn` | `function` | Function invoked with \(value, key\) that returns the new value |

## Returns

`Map<K, R>` — A new Map with transformed values

## Examples

### Scale every value

Creates a new Map with transformed values and unchanged keys.

```ts
mapValues(new Map([['a', 1], ['b', 2]]), value => value * 10)
// => Map(2) { 'a' => 10, 'b' => 20 }
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/map/mapValues.ts)
