---
title: "snakeCase"
sidebar:
  label: "snakeCase"
---

Converts a string to snake_case.
Handles camelCase, PascalCase, kebab-case, spaces, and mixed formats.

> Available since v2.0.0

## Import

```ts
import { snakeCase } from '@helpers4/string';
```

## Signature


```ts
snakeCase(str: string): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `str` | `string` | The string to convert |

## Returns

`string` — String in snake_case

## Examples

### Convert camelCase to snake_case

Converts a camelCase string to snake_case.

```ts
snakeCase('myVariableName')
// => 'my_variable_name'
```

### Convert kebab-case to snake_case

Also handles kebab-case and other formats.

```ts
snakeCase('my-component-name')
// => 'my_component_name'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v2/helpers/string/snakeCase.ts)
