---
title: "some"
sidebar:
  label: "some"
---

Checks if at least one entry of a Map satisfies the predicate. Short-circuits on the first match.

> Available since v3.0.3

## Import

```ts
import { some } from '@helpers4/map';
```

## Signature


```ts
some<K, V>(map: ReadonlyMap<K, V>, predicate: function): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `map` | `ReadonlyMap<K, V>` | The Map to check |
| `predicate` | `function` | Function invoked with \(value, key\) |

## Returns

`boolean` — `true` if at least one entry matches, `false` otherwise (including for an empty map)

## Examples

### Check if any value exceeds a threshold

Returns true as soon as one entry satisfies the predicate.

```ts
some(new Map([['a', 1], ['b', 2]]), value => value > 1)
// => true
```

### Empty map

Always returns false for an empty map.

```ts
some(new Map(), () => true)
// => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/map/some.ts)
