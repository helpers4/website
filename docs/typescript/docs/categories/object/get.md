---
sidebar_label: "get"
---

# get

Gets a value from an object using a dot-notated path

> Available since v1.9.0

## Import

```ts
import { get } from '@helpers4/object';
```

## Signature

```ts
get<T = unknown>(obj: unknown, path: string, defaultValue?: T): T | undefined
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `obj` | `unknown` | The object to get value from |
| `path` | `string` | The dot-notated path (e.g., 'a.b.c') |
| `defaultValue` | `T` | Default value if path doesn't exist *(optional)* |

## Returns

`T | undefined` — The value at the path or default value

## Examples

### Access a nested property

Uses a dot-notated path to retrieve a deeply nested value.

```ts
get({ a: { b: { c: 42 } } }, 'a.b.c')
// => 42
```

### Return default for missing path

Returns the default value when the path does not exist.

```ts
get({ a: 1 }, 'b.c', 'default')
// => 'default'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/object/get.ts)
