---
title: "unorderedPairKey"
sidebar:
  label: "unorderedPairKey"
description: "Builds a canonical, order-independent key for an unordered pair of strings — the same result for `(a, b)` and `(b, a)`."
version: "3.1.1"
---

Builds a canonical, order-independent key for an unordered pair of strings — the same result
for `(a, b)` and `(b, a)`. Useful for deduplicating unordered relationships (edges, matched
pairs, ...) using a `Set`/`Map` keyed by string.

> Available since v3.1.1

## Import

```ts
import { unorderedPairKey } from '@helpers4/string';
// or, from the all-in-one package (same code, one install):
import { unorderedPairKey } from 'helpers4/string';
```

## Signature


```ts
unorderedPairKey(a: string, b: string, separator: string): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `a` | `string` | The first string |
| `b` | `string` | The second string |
| `separator` | `string` | Joins the two strings in the key\. Defaults to \`'\|'\` — pick a separator that cannot appear inside \`a\`/\`b\` themselves, or two distinct pairs could collide on the same key\. |

## Returns

`string` — `a` and `b` joined by `separator`, in whichever of the two lexicographic orders sorts first

## Examples

### Deduplicate unordered relationships in a Set

The same key is produced regardless of which side is passed first.

```ts
const seen = new Set<string>();
seen.add(unorderedPairKey('alice', 'bob'));
seen.has(unorderedPairKey('bob', 'alice'))
// => true
```

### Custom separator

Pick a separator that cannot appear inside the inputs to avoid collisions.

```ts
unorderedPairKey('bob', 'alice', ':')
// => 'alice:bob'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/string/unorderedPairKey.ts)
