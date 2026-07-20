---
title: "hasValue"
sidebar:
  label: "hasValue"
---

Checks whether a value exists anywhere in a Map (`Map.prototype.has` checks keys, not values).
Uses `Object.is`-style equality (via `===`, with `NaN` matching `NaN`).

> Available since v3.0.3

## Import

```ts
import { hasValue } from '@helpers4/map';
```

## Signature


```ts
hasValue<K, V>(map: ReadonlyMap<K, V>, value: V): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `map` | `ReadonlyMap<K, V>` | The Map to search |
| `value` | `V` | The value to look for |

## Returns

`boolean` — `true` if the value is found in at least one entry

## Examples

### Check whether a value exists in a Map

Unlike Map.prototype.has (which checks keys), this checks values.

```ts
hasValue(new Map([['a', 1], ['b', 2]]), 2)
// => true
```

### Value absent

Returns false when no entry has that value.

```ts
hasValue(new Map([['a', 1]]), 99)
// => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/map/hasValue.ts)
