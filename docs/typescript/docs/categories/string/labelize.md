---
sidebar_label: "labelize"
---

# labelize

Transform string to lowercase with capitalized first letters and with spaces between words

> Available since v1.0.0

## Import

```ts
import { labelize } from '@helpers4/string';
```

## Signature

```ts
labelize(str: string): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `str` | `string` | the string to convert |

## Returns

`string` — 

## Examples

### Convert kebab-case to label

Transforms a delimited string into a label with capitalized words.

```ts
labelize('my-component-name')
// => 'My Component Name'
```

### Convert snake_case to label

Also works with underscore and space delimiters.

```ts
labelize('user_first_name')
// => 'User First Name'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/string/labelize.ts)
