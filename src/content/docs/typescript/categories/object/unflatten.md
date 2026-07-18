---
title: "unflatten"
sidebar:
  label: "unflatten"
---

Rebuilds a nested object from a single-level object whose keys are
dot-notation paths. The inverse of flatten.

Uses set internally, so intermediate nodes are always created as
plain objects (never arrays — see flatten's doc for why), and any
key segment equal to `__proto__`, `constructor`, or `prototype` is silently
rejected (same prototype-pollution guard as `set`).

> Available since v3.0.0

## Import

```ts
import { unflatten } from '@helpers4/object';
```

## Signature


```ts
unflatten(obj: Record<string, unknown>): Record<string, unknown>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `obj` | `Record<string, unknown>` | A single-level object with dot-notation keys |

## Returns

`Record<string, unknown>` — The rebuilt nested object

## Examples

### Rebuild a nested object from dotted keys

The inverse of flatten() — useful for parsing flat config sources (env vars, .ini files).

```ts
unflatten({ 'server.host': 'localhost', 'server.port': 8080 })
// => { server: { host: 'localhost', port: 8080 } }
```

### Multiple keys under the same parent are merged

Every dotted key contributes to the same nested structure.

```ts
unflatten({ 'a.x': 1, 'a.y': 2 })
// => { a: { x: 1, y: 2 } }
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/object/unflatten.ts)
