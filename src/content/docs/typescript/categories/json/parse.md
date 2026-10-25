---
title: "parse"
sidebar:
  label: "parse"
description: "Parses JSON permissively: strict JSON, JSONC (the dialect of `tsconfig.json` and VS Code's `settings.json`, also known…"
version: "3.1.9"
---

Parses JSON permissively: strict JSON, JSONC (the dialect of `tsconfig.json` and VS Code's
`settings.json`, also known as HuJSON or JWCC) and JSON5 — each a superset of the one before.

**Accepts:**
- everything parseStrict accepts (strict JSON, RFC 8259)
- comments: `// …` to the end of the line, and `/* … */`
- one trailing comma after the last item of an object or array
- object keys without quotes, when they are ECMAScript identifiers (`{ name: 1 }`, `{ $id: 1 }`)
- strings in single quotes, and in either quote: the escapes `\'`, `\v`, `\0` and `\xHH`, any
  other escaped character standing for itself, and a backslash before a line break to continue
  the string on the next line
- numbers with a leading `+`, a leading or trailing dot (`.5`, `5.`), in hexadecimal (`0x1F`),
  and `Infinity`, `-Infinity` and `NaN`
- any Unicode whitespace between tokens, including a leading byte order mark (U+FEFF)

**Rejects:** more than one trailing comma in a row, leading zeros (`01`), octal or binary
numbers, unquoted keys that aren't identifiers (`{ my-key: 1 }`), raw line breaks inside a
string, an unterminated comment or string, `undefined`, and more than one value.

**On invalid input:** throws a `SyntaxError` naming the line and column of the first problem.

Strict JSON goes straight to the native `JSON.parse`, and JSONC to `JSON.parse` after its
comments are blanked out; only text that is neither goes through the JSON5 reader (written for
helpers4 from the JSON5 1.0.0 specification), so the common cases cost nothing extra.

Values are built as `JSON.parse` builds them: the last of duplicate keys wins, and a
`__proto__` key is an own property, never the prototype. `NaN` and `Infinity` have no JSON
representation — stringify writes them as `null`.

> Available since v3.1.3

## Import

```ts
import { parse } from '@helpers4/json';
// or, from the all-in-one package (same code, one install):
import { parse } from 'helpers4/json';
```

## Signature


```ts
parse<T = unknown>(text: string): T
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | `string` | The JSON, JSONC or JSON5 text to parse |

## Returns

`T` — The parsed value, typed as `T`

## Examples

### Parse a config file with comments

Reads JSONC — the tsconfig.json / settings.json dialect — as well as strict JSON.

```ts
parse(`{
  // where the build goes
  "outDir": "dist",
}`)
// => { outDir: 'dist' }
```

### Invalid input throws

The SyntaxError names the line and column of the problem.

```ts
parse('{ my-key: 1 }')
// throws SyntaxError: a key with a dash needs quotes
```

### Parse JSON5

Unquoted keys, single quotes, hexadecimal and leading-dot numbers, trailing commas.

```ts
parse("{ name: 'app', retries: 0x3, ratio: .5, }")
// => { name: 'app', retries: 3, ratio: 0.5 }
```

:::caution[Name conflict]
A helper named `parse` also exists in [`@helpers4/version`](../version/parse/). If you need both in the same file, rename at import with `as`:

```ts
import { parse as parse4json } from '@helpers4/json';
import { parse as parse4version } from '@helpers4/version';
```

See [Name Conflicts](../../reference/naming-conflicts/) for the full resolution guide.
:::

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/json/parse.ts)
