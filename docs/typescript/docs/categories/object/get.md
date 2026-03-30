---
sidebar_label: "get"
---

# get

Gets a value from an object using a dot-notated path

## Import

```ts
import { get } from '@helpers4/object';
```

## Signature

```ts
function get<T = any>(obj: any, path: string, defaultValue?: T): T | undefined
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `obj` | The object to get value from |
| `path` | The dot-notated path (e.g., 'a.b.c') |
| `defaultValue` | Default value if path doesn't exist |

## Returns

The value at the path or default value

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/object/get.ts)
