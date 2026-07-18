---
title: "update"
sidebar:
  label: "update"
---

Updates the value at a path by applying a function to its current value,
creating intermediate objects as needed. Equivalent to
`set(obj, path, updater(get(obj, path)))` in a single call.

Uses the same path syntax and type-inference rules as get and
set — see those for the full behavior (string vs. `PropertyKey[]`
paths, prototype-pollution guarding, etc.).

> Available since v3.0.0

## Import

```ts
import { update } from '@helpers4/object';
```

## Signature


```ts
update<T extends object, P extends string | readonly PropertyKey[], V extends unknown>(obj: T, path: P, updater: function): conditional
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `obj` | `T` | The object to mutate |
| `path` | `P` | Dot/bracket-notation string literal or explicit `PropertyKey[]` |
| `updater` | `function` | Called with the current value (`undefined` if the path is   absent); its return value is written back at the path |

## Returns

`conditional` — The mutated object (same reference, narrowed type)

## Examples

### Increment a counter in one call

Equivalent to set(obj, path, updater(get(obj, path))), without repeating the path.

```ts
const state = { count: 1 };
update(state, 'count', (n) => (n ?? 0) + 1)
// => { count: 2 }
```

### Missing paths create intermediate objects, like set()

The updater receives undefined when the path does not exist yet.

```ts
const stats: Record<string, unknown> = {};
update(stats, 'hits.total', (n: number | undefined) => (n ?? 0) + 1)
// => { hits: { total: 1 } }
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/object/update.ts)
