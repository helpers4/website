---
title: "toMapByKey"
sidebar:
  label: "toMapByKey"
---

Builds a Map from an iterable of items, keyed by a derived key. When two items derive the
same key, the later item wins (last-write-wins, matching `Map.prototype.set` semantics).

Named `toMapByKey`, not `keyBy` (lodash's name for the same idea) — lodash's `_.keyBy`
returns a plain object, not a `Map`; the `to<Type>` prefix (matching `toSorted`/`toReversed`)
makes the actual return type unambiguous.

> Available since v3.0.3

## Import

```ts
import { toMapByKey } from '@helpers4/map';
```

## Signature


```ts
toMapByKey<T, K>(items: Iterable<T>, fn: function): Map<K, T>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `items` | `Iterable<T>` | The items to index |
| `fn` | `function` | Function deriving the key for each item |

## Returns

`Map<K, T>` — A Map from derived key to item

## Examples

### Index an array of records by id

Builds a Map keyed by a derived value, for O(1) lookup by that key.

```ts
toMapByKey([{ id: 'a', n: 1 }, { id: 'b', n: 2 }], item => item.id)
// => Map(2) { 'a' => {...}, 'b' => {...} }
```

### Last item wins on collision

When two items derive the same key, the later one overwrites the earlier one.

```ts
toMapByKey([{ id: 'a', n: 1 }, { id: 'a', n: 2 }], item => item.id).get('a')
// => { id: 'a', n: 2 }
```

:::caution[Name conflict]
A helper named `toMapByKey` also exists in [`@helpers4/set`](../set/tomapbykey/). If you need both in the same file, rename at import with `as`:

```ts
import { toMapByKey as toMapByKey4map } from '@helpers4/map';
import { toMapByKey as toMapByKey4set } from '@helpers4/set';
```

See [Name Conflicts](../../reference/naming-conflicts/) for the full resolution guide.
:::

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/map/toMapByKey.ts)
