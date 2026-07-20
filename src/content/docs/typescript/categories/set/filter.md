---
title: "filter"
sidebar:
  label: "filter"
---

Creates a new Set containing only the values for which the predicate returns true.

> Available since v3.0.3

## Import

```ts
import { filter } from '@helpers4/set';
```

## Signature


```ts
filter<T>(set: ReadonlySet<T>, predicate: function): Set<T>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `set` | `ReadonlySet<T>` | The Set to filter |
| `predicate` | `function` | Function invoked with each value — return true to keep it |

## Returns

`Set<T>` — A new Set with only the matching values

## Examples

### Keep only even values

Creates a new Set with only the values that satisfy the predicate.

```ts
filter(new Set([1, 2, 3, 4]), value => value % 2 === 0)
// => Set(2) { 2, 4 }
```

:::caution[Name conflict]
A helper named `filter` also exists in [`@helpers4/map`](../map/filter/). If you need both in the same file, rename at import with `as`:

```ts
import { filter as filter4set } from '@helpers4/set';
import { filter as filter4map } from '@helpers4/map';
```

See [Name Conflicts](../../reference/naming-conflicts/) for the full resolution guide.
:::

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/set/filter.ts)
