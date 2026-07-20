---
title: "toMapByKey"
sidebar:
  label: "toMapByKey"
---

Builds a Map from a Set, keyed by a derived key. When two values derive the same key,
the later value (in iteration order) wins (last-write-wins, matching `Map.prototype.set`).

Named `toMapByKey`, not `keyBy` (lodash's name for the same idea) — lodash's `_.keyBy`
returns a plain object, not a `Map`; the `to<Type>` prefix (matching `toSorted`/`toReversed`)
makes the actual return type unambiguous.

> Available since v3.0.3

## Import

```ts
import { toMapByKey } from '@helpers4/set';
```

## Signature


```ts
toMapByKey<T, K>(set: ReadonlySet<T>, fn: function): Map<K, T>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `set` | `ReadonlySet<T>` | The Set to index |
| `fn` | `function` | Function deriving the key for each value |

## Returns

`Map<K, T>` — A Map from derived key to value

## Examples

### Turn a Set into a lookup Map

Builds a Map keyed by a derived value, for O(1) lookup by that key.

```ts
toMapByKey(new Set([{ id: 'a' }, { id: 'b' }]), item => item.id)
// => Map(2) { 'a' => {...}, 'b' => {...} }
```

:::caution[Name conflict]
A helper named `toMapByKey` also exists in [`@helpers4/map`](../map/tomapbykey/). If you need both in the same file, rename at import with `as`:

```ts
import { toMapByKey as toMapByKey4set } from '@helpers4/set';
import { toMapByKey as toMapByKey4map } from '@helpers4/map';
```

See [Name Conflicts](../../reference/naming-conflicts/) for the full resolution guide.
:::

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/set/toMapByKey.ts)
