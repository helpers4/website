---
title: "countBy"
sidebar:
  label: "countBy"
---

Groups the elements of an array by the key returned by `keyFn` and returns a
record mapping each key to the number of matching elements.

> Available since v2.0.0

## Import

```ts
import { countBy } from '@helpers4/array';
```

## Signature


```ts
countBy<T, K extends PropertyKey>(array: readonly T[], keyFn: function): Partial<Record<K, number>>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `array` | `readonly T[]` | The array to count. |
| `keyFn` | `function` | A function that returns the grouping key for each element. |

## Returns

`Partial<Record<K, number>>` — A `Partial<Record<K, number>>` where each key maps to its element count.

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

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/countBy.ts)
