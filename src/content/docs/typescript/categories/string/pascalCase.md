---
title: "pascalCase"
sidebar:
  label: "pascalCase"
---

# pascalCase

Converts a string to PascalCase.
Handles camelCase, kebab-case, snake_case, spaces, and mixed formats.

> Available since v2.0.0

## Import

```ts
import { pascalCase } from '@helpers4/string';
```

## Signature


```ts
pascalCase(str: string): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `str` | `string` | The string to convert |

## Returns

`string` — String in PascalCase

## Examples

### Convert kebab-case to PascalCase

Converts a kebab-case string to PascalCase.

```ts
pascalCase('my-component')
// => 'MyComponent'
```

### Convert snake_case to PascalCase

Also handles snake_case and other formats.

```ts
pascalCase('user_first_name')
// => 'UserFirstName'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/string/pascalCase.ts)
