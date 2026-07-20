---
title: "every"
sidebar:
  label: "every"
---

Checks if every entry of a Map satisfies the predicate. Short-circuits on the first mismatch.

> Available since v3.0.3

## Import

```ts
import { every } from '@helpers4/map';
```

## Signature


```ts
every<K, V>(map: ReadonlyMap<K, V>, predicate: function): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `map` | `ReadonlyMap<K, V>` | The Map to check |
| `predicate` | `function` | Function invoked with \(value, key\) |

## Returns

`boolean` — `true` if all entries match (vacuously `true` for an empty map), `false` otherwise

## Examples

### Check that all values are positive

Returns false as soon as one entry fails the predicate.

```ts
every(new Map([['a', 1], ['b', 2]]), value => value > 0)
// => true
```

### Empty map

Vacuously true for an empty map.

```ts
every(new Map(), () => false)
// => true
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/map/every.ts)
