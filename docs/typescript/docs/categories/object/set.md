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
set(obj: Record<string, any>, path: string, value: any): Record<string, any>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `obj` | `Record<string, any>` | The object to set value in |
| `path` | `string` | The dot-notated path (e.g., 'a.b.c') |
| `value` | `any` | The value to set |

## Returns

`Record<string, any>` — The modified object

## Examples

### Set a nested property

Creates intermediate objects as needed along the dot-notated path.

```ts
set({}, 'a.b.c', 42)
// => { a: { b: { c: 42 } } }
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/object/set.ts)
