---
title: "template"
sidebar:
  label: "template"
---

Interpolates `{{key}}` placeholders in a template string with values from
a data record. Unknown keys are replaced with an empty string.

No `eval` or `Function` constructor is used — substitution is purely
regex-based. Nested expressions and logic are intentionally out of scope.

> Available since v2.0.0

## Import

```ts
import { template } from '@helpers4/string';
```

## Signature


```ts
template(str: string, data: Record<string, unknown>): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `str` | `string` | The template string containing `{{key}}` placeholders. |
| `data` | `Record<string, unknown>` | A record mapping placeholder names to replacement values. |

## Returns

`string` — The template string with all placeholders replaced.

## Examples

### Simple interpolation

Replaces {{key}} placeholders with values from the data object.

```ts
template('Hello, {{name}}!', { name: 'Alice' })
// => 'Hello, Alice!'
```

### Multiple placeholders

All matching placeholders are replaced in a single pass.

```ts
template('{{greeting}}, {{name}}!', { greeting: 'Hi', name: 'Bob' })
// => 'Hi, Bob!'
```

### Missing keys become empty string

Unknown placeholders are replaced with an empty string.

```ts
template('Hello, {{name}}!', {})
// => 'Hello, !'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v2/helpers/string/template.ts)
