---
title: "titleCase"
sidebar:
  label: "titleCase"
---

# titleCase

Converts a string to Title Case.
Handles camelCase, PascalCase, kebab-case, snake_case, spaces, and mixed formats.

> Available since v2.0.0

## Import

```ts
import { titleCase } from '@helpers4/string';
```

## Signature


```ts
titleCase(str: string): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `str` | `string` | The string to convert |

## Returns

`string` — String in Title Case

## Examples

### Convert kebab-case to Title Case

Transforms a delimited string into Title Case.

```ts
titleCase('my-component-name')
// => 'My Component Name'
```

### Convert camelCase to Title Case

Also handles camelCase by splitting on uppercase transitions.

```ts
titleCase('queryItems')
// => 'Query Items'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/string/titleCase.ts)
