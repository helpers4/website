---
title: "resolveRecord"
sidebar:
  label: "resolveRecord"
---

Resolves an array of keys into a record by calling an async mapper for each key.
All mapper calls run concurrently via `Promise.all`.

Unlike parallel, which returns an array, `resolveRecord` preserves the
key-to-value relationship in the result.

> Available since v2.0.0

## Import

```ts
import { resolveRecord } from '@helpers4/promise';
```

## Signature


```ts
resolveRecord<K extends PropertyKey, V>(keys: readonly K[], mapper: function): Promise<Record<K, V>>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `keys` | `readonly K[]` | The keys to resolve |
| `mapper` | `function` | Async function called for each key, returning the associated value |

## Returns

`Promise<Record<K, V>>` — A record mapping each key to its resolved value

## Examples

### Fetch data for multiple keys concurrently

All mapper calls run in parallel via Promise.all.

```ts
const stars = await resolveRecord(
  ['helpers4/typescript', 'helpers4/devcontainer'],
  async (repo) => fetchRepoStars(repo)
);
// => { 'helpers4/typescript': 42, 'helpers4/devcontainer': 17 }
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v2/helpers/promise/resolveRecord.ts)
