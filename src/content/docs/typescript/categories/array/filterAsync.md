---
title: "filterAsync"
sidebar:
  label: "filterAsync"
---

The async counterpart to `Array.prototype.filter`: runs `predicate` for every item and
resolves to the items whose predicate was truthy, in their original relative order.

`predicate` runs for every item up front (respecting `concurrency`) before any filtering
happens — unlike the sync `.filter()`, there's no short-circuiting, since every predicate
call may already be in flight by the time an earlier one resolves.

> Available since v3.0.4

## Import

```ts
import { filterAsync } from '@helpers4/array';
```

## Signature


```ts
filterAsync<T>(array: readonly T[], predicate: function, concurrency?: number): Promise<T[]>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `array` | `readonly T[]` | The array to filter |
| `predicate` | `function` | Async \(or sync\) predicate called with \`\(item, index\)\` |
| `concurrency` | `number` | Maximum number of concurrent predicate calls\. Defaults to unlimited\. *(optional)* |

## Returns

`Promise<T[]>` — The items whose predicate resolved truthy, in original order

## Examples

### Keep only the files that pass an async check

Every predicate call runs concurrently; matches keep their original order.

```ts
await filterAsync(files, (file) => fileExists(file))
// => only the files that actually exist
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/filterAsync.ts)
