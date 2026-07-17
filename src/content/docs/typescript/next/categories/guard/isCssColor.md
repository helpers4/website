---
title: "isCssColor"
sidebar:
  label: "isCssColor"
---

Checks whether a value is a syntactically-safe, plain CSS color: a hex color
(`#rgb`, `#rgba`, `#rrggbb`, `#rrggbbaa`), a functional notation (`rgb()`,
`rgba()`, `hsl()`, `hsla()`), or a single-word named color (`red`,
`rebeccapurple`).

Intended to sanitize a color value before interpolating it into inline
`style`/`cssText` — it does not implement the full CSS color grammar or
validate named colors against the real keyword list, it only rejects
characters (`{`, `}`, `;`, ``) or shapes that could smuggle extra CSS
declarations into the surrounding rule.

> Available since next

## Import

```ts
import { isCssColor } from '@helpers4/guard';
```

## Signature


```ts
isCssColor(value: unknown): value is string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is string` — `true` if value is a string that looks like a safe, plain CSS color

## Examples

### Validate a color before writing it to inline style

Accepts hex, functional (rgb/rgba/hsl/hsla), and named colors.

```ts
isCssColor('#ff0000')            // => true
isCssColor('rgba(0, 0, 0, 0.5)') // => true
isCssColor('rebeccapurple')      // => true
isCssColor(42)                   // => false
```

### Reject values that could inject extra CSS declarations

Guards against untrusted data smuggling a second declaration into a style attribute.

```ts
isCssColor('red; background: url(evil)') // => false
isCssColor('red}body{color:blue')        // => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/guard/isCssColor.ts)
