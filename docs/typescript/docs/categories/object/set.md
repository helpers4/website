---
sidebar_label: "set"
---

# set

Sets a value in an object using a dot-notated path

> Available since v1.9.0

## Import

```ts
import { set } from '@helpers4/object';
```

## Signature

```ts
set(obj: Record<string, unknown>, path: string, value: unknown): Record<string, unknown>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `obj` | `Record<string, unknown>` | The object to set value in |
| `path` | `string` | The dot-notated path (e.g., 'a.b.c') |
| `value` | `unknown` | The value to set |

## Returns

`Record<string, unknown>` — The modified object

## Examples

### Set a nested property

Creates intermediate objects as needed along the dot-notated path.

```ts
set({}, 'a.b.c', 42)
// => { a: { b: { c: 42 } } }
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/object/set.ts)
