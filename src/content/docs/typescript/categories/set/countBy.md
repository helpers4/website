---
title: "countBy"
sidebar:
  label: "countBy"
---

Groups the values of a Set by a derived key and counts how many fall into each group.

> Available since v3.0.3

## Import

```ts
import { countBy } from '@helpers4/set';
```

## Signature


```ts
countBy<T, R>(set: ReadonlySet<T>, fn: function): Map<R, number>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `set` | `ReadonlySet<T>` | The Set to summarize |
| `fn` | `function` | Function deriving the grouping key from each value |

## Returns

`Map<R, number>` — A Map from derived key to the number of values in that group

## Examples

### Count values by parity

Groups values by a derived key and counts how many fall into each group.

```ts
countBy(new Set([1, 2, 3, 4]), v => v % 2 === 0 ? 'even' : 'odd')
// => Map(2) { 'odd' => 2, 'even' => 2 }
```

:::caution[Name conflict]
A helper named `countBy` also exists in [`@helpers4/array`](../array/countby/), [`@helpers4/map`](../map/countby/). If you need both in the same file, rename at import with `as`:

```ts
import { countBy as countBy4set } from '@helpers4/set';
import { countBy as countBy4array } from '@helpers4/array';
import { countBy as countBy4map } from '@helpers4/map';
```

See [Name Conflicts](../../reference/naming-conflicts/) for the full resolution guide.
:::

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/set/countBy.ts)
