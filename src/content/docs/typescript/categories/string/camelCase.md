---
title: "camelCase"
sidebar:
  label: "camelCase"
description: "Converts a string to camelCase."
version: "3.1.1"
---

Converts a string to camelCase.
Handles PascalCase, kebab-case, snake_case, spaces, and mixed formats.

An embedded run of capitals is treated as an acronym boundary: only its last letter starts
the next word, the rest are lowercased (matching lodash's `camelCase` convention) — so an
already-camelCase identifier containing an acronym is not left untouched.

> Available since v1.9.0

## Import

```ts
import { camelCase } from '@helpers4/string';
// or, from the all-in-one package (same code, one install):
import { camelCase } from 'helpers4/string';
```

## Signature


```ts
camelCase(str: string): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `str` | `string` | The string to convert |

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
