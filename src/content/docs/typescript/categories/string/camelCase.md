---
title: "camelCase"
sidebar:
  label: "camelCase"
---

Converts kebab-case to camelCase

> Available since v1.9.0

## Import

```ts
import { camelCase } from '@helpers4/string';
```

## Signature


```ts
camelCase(str: string): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `str` | `string` | The kebab\-case string to convert |

## Returns

`string` — String in camelCase

## Examples

### Convert kebab-case to camelCase

Converts a kebab-case string to camelCase.

```ts
camelCase('my-component-name')
// => 'myComponentName'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/string/camelCase.ts)
