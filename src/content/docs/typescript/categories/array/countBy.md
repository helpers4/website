---
title: "countBy"
sidebar:
  label: "countBy"
---

Groups the elements of an array by the key returned by `keyFn` and returns a
record mapping each key to the number of matching elements.
`null` and `undefined` are treated as empty arrays and return `{}`.
Items whose computed key is a prototype-polluting string (`__proto__`,
`constructor`, `prototype`) are silently skipped.

> Available since v2.0.0

## Import

```ts
import { countBy } from '@helpers4/array';
```

## Signature


```ts
countBy<T, K extends PropertyKey>(array: readonly T[] | null | undefined, keyFn: function): Partial<Record<Exclude<K, UnsafeKey>, number>>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `array` | `readonly T[] \| null \| undefined` | The array to count\. |
| `keyFn` | `function` | A function that returns the grouping key for each element\. |

## Returns

`Partial<Record<Exclude<K, UnsafeKey>, number>>` — A `Partial<Record<K, number>>` where each key maps to its element count.
  Prototype-polluting keys (`__proto__`, `constructor`, `prototype`) are never present.

## Examples

### Count by parity

Groups items by the string key returned by the callback and counts occurrences.

```ts
countBy([1, 2, 3, 4, 5], n => n % 2 === 0 ? 'even' : 'odd')
// => { odd: 3, even: 2 }
```

### Count commit types

Use any string transform as the grouping key.

```ts
const commits = ['feat: add x', 'fix: bug', 'feat: add y'];
countBy(commits, msg => msg.split(':')[0])
// => { feat: 2, fix: 1 }
```

:::caution[Name conflict]
A helper named `countBy` also exists in [`@helpers4/map`](../map/countby/), [`@helpers4/set`](../set/countby/). If you need both in the same file, rename at import with `as`:

```ts
import { countBy as countBy4array } from '@helpers4/array';
import { countBy as countBy4map } from '@helpers4/map';
import { countBy as countBy4set } from '@helpers4/set';
```

See [Name Conflicts](../../reference/naming-conflicts/) for the full resolution guide.
:::

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/countBy.ts)
