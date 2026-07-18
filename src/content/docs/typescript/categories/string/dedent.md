---
title: "dedent"
sidebar:
  label: "dedent"
---

Strips the common leading whitespace from every line of a multi-line
string, and trims a single leading/trailing blank line if present.

Lets you write readable, indented multi-line strings in source code
(typically template literals) without that indentation leaking into
the output.

> Available since v3.0.0

## Import

```ts
import { dedent } from '@helpers4/string';
```

## Signature


```ts
dedent(str: string): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `str` | `string` | The string to dedent |

## Returns

`string` — The dedented string

## Examples

### Write readable multi-line strings without leaking source indentation

Strips the common leading whitespace and the wrapping blank lines.

```ts
dedent(`
  Hello
    World
`)
// => 'Hello\n  World'
```

### The minimum indentation across all lines is what gets removed

Lines with more indentation than the minimum keep their relative indent.

```ts
dedent('    a\n  b\n      c')
// => '  a\nb\n    c'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/string/dedent.ts)
