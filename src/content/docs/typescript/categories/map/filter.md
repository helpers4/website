---
title: "filter"
sidebar:
  label: "filter"
---

Creates a new Map containing only the entries for which the predicate returns true.

> Available since v3.0.3

## Import

```ts
import { filter } from '@helpers4/map';
```

## Signature


```ts
filter<K, V>(map: ReadonlyMap<K, V>, predicate: function): Map<K, V>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `map` | `ReadonlyMap<K, V>` | The Map to filter |
| `predicate` | `function` | Function invoked with \(value, key\) — return true to keep the entry |

## Returns

`Map<K, V>` — A new Map with only the matching entries

## Examples

### Keep only even values

Creates a new Map with only the entries whose value satisfies the predicate.

```ts
filter(new Map([['a', 1], ['b', 2], ['c', 3]]), value => value % 2 === 0)
// => Map(1) { 'b' => 2 }
```

### No matches

Returns an empty Map when nothing matches.

```ts
filter(new Map([['a', 1]]), () => false)
// => Map(0) {}
```

:::caution[Name conflict]
A helper named `filter` also exists in [`@helpers4/set`](../set/filter/). If you need both in the same file, rename at import with `as`:

```ts
import { filter as filter4map } from '@helpers4/map';
import { filter as filter4set } from '@helpers4/set';
```

See [Name Conflicts](../../reference/naming-conflicts/) for the full resolution guide.
:::

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/map/filter.ts)
