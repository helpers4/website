---
title: "map"
sidebar:
  label: "map"
---

Creates a new Set with each value transformed by a function. If two values transform to the
same result, duplicates collapse — the returned Set may be smaller than the input.

> Available since v3.0.3

## Import

```ts
import { map } from '@helpers4/set';
```

## Signature


```ts
map<T, R>(set: ReadonlySet<T>, fn: function): Set<R>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `set` | `ReadonlySet<T>` | The Set to transform |
| `fn` | `function` | Function invoked with each value, returning the new value |

## Returns

`Set<R>` — A new Set of transformed values

## Examples

### Transform every value

Creates a new Set with each value transformed by a function.

```ts
map(new Set([1, 2, 3]), value => value * 10)
// => Set(3) { 10, 20, 30 }
```

### Duplicates collapse

If two values transform to the same result, the Set naturally deduplicates.

```ts
map(new Set([1, 2, 3]), () => 'same')
// => Set(1) { 'same' }
```

:::caution[Name conflict]
A helper named `map` also exists in [`@helpers4/object`](../object/map/). If you need both in the same file, rename at import with `as`:

```ts
import { map as map4set } from '@helpers4/set';
import { map as map4object } from '@helpers4/object';
```

See [Name Conflicts](../../reference/naming-conflicts/) for the full resolution guide.
:::

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/set/map.ts)
