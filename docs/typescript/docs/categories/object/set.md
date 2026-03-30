---
sidebar_label: "set"
---

# set

Sets a value in an object using a dot-notated path

## Import

```ts
import { set } from '@helpers4/object';
```

## Signature

```ts
function set(obj: Record<string, any>, path: string, value: any): Record<string, any>
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `obj` | The object to set value in |
| `path` | The dot-notated path (e.g., 'a.b.c') |
| `value` | The value to set |

## Returns

The modified object

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/object/set.ts)
