---
title: "countBy"
sidebar:
  label: "countBy"
---

Groups the entries of a Map by a derived key and counts how many fall into each group.

> Available since v3.0.3

## Import

```ts
import { countBy } from '@helpers4/map';
```

## Signature


```ts
countBy<K, V, R>(map: ReadonlyMap<K, V>, fn: function): Map<R, number>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `map` | `ReadonlyMap<K, V>` | The Map to summarize |
| `fn` | `function` | Function deriving the grouping key from \(value, key\) |

## Returns

`Map<R, number>` — A Map from derived key to the number of entries in that group

## Examples

### Count entries by parity

Groups values by a derived key and counts how many fall into each group.

```ts
countBy(new Map([['a', 1], ['b', 2], ['c', 3], ['d', 4]]), v => v % 2 === 0 ? 'even' : 'odd')
// => Map(2) { 'odd' => 2, 'even' => 2 }
```

:::caution[Name conflict]
A helper named `countBy` also exists in [`@helpers4/array`](../array/countby/), [`@helpers4/set`](../set/countby/). If you need both in the same file, rename at import with `as`:

```ts
import { countBy as countBy4map } from '@helpers4/map';
import { countBy as countBy4array } from '@helpers4/array';
import { countBy as countBy4set } from '@helpers4/set';
```

See [Name Conflicts](../../reference/naming-conflicts/) for the full resolution guide.
:::

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/map/countBy.ts)
