---
title: "stringify"
sidebar:
  label: "stringify"
description: "Serializes a value to JSON text — pretty-printed with 2 spaces by default, or canonical."
version: "3.1.3"
---

Serializes a value to JSON text — pretty-printed with 2 spaces by default, or canonical.

**Formatting:**
- default — indented with 2 spaces, like a hand-written config file
- `{ indent: n }` — indented with `n` spaces (an integer from 0 to 10); `{ indent: 0 }` gives a
  compact single line, the same as `JSON.stringify(value)`
- `'canonical'` — canonical JSON (RFC 8785, JSON Canonicalization Scheme): object keys sorted
  by UTF-16 code units, no whitespace at all, numbers in their shortest ECMAScript form. Two
  equal values always give the same bytes, so the output can be hashed, signed or compared.
  Canonical output can't be indented — the RFC fixes every byte.

**Same as `JSON.stringify`:** `toJSON()` is called (a `Date` becomes its ISO string),
`undefined`, functions and symbols are dropped from objects and become `null` in arrays, and
`Number`/`String`/`Boolean` objects are unwrapped. Outside `'canonical'`, `NaN` and `±Infinity`
silently become `null`, as there.

**Throws** instead of returning `undefined` or dropping data silently:
- a `TypeError` when `value` itself is `undefined`, a function or a symbol
- a `TypeError` on a circular structure or a `BigInt` (like `JSON.stringify`)
- with `'canonical'`, a `RangeError` on `NaN`, `±Infinity` or a string with a lone surrogate,
  which canonical JSON can't hold
- a `RangeError` when `indent` isn't an integer from 0 to 10

The output is strict JSON, so it is also valid JSONC and JSON5.

> Available since v3.1.3

## Import

```ts
import { stringify } from '@helpers4/json';
// or, from the all-in-one package (same code, one install):
import { stringify } from 'helpers4/json';
```

## Signature


```ts
stringify(value: unknown, formatting: StringifyFormatting): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to serialize |
| `formatting` | `StringifyFormatting` | \`\{ indent \}\` \(default \`\{ indent: 2 \}\`\) or \`'canonical'\` — see StringifyFormatting |

## Returns

`string` — The JSON text

## Examples

### Pretty-print by default

Indented with 2 spaces, like a hand-written config file.

```ts
stringify({ name: 'app', tags: ['a'] })
// => '{\n  "name": "app",\n  "tags": [\n    "a"\n  ]\n}'
```

### Compact output

indent: 0 gives a single line, like JSON.stringify(value).

```ts
stringify({ b: 1, a: 2 }, { indent: 0 })
// => '{"b":1,"a":2}'
```

### Canonical JSON (RFC 8785)

Sorted keys and no whitespace: equal values always give the same bytes, ready to hash or sign.

```ts
stringify({ b: 1, a: 2 }, 'canonical')
// => '{"a":2,"b":1}'
```

## Related Types

### `StringifyFormatting`

How stringify lays out its output:
- `{ indent }` — pretty-printed with `indent` spaces per level (`0` for a compact single line)
- `'canonical'` — canonical JSON (RFC 8785), byte-for-byte reproducible

```ts
type StringifyFormatting = 'canonical' | { indent?: number }
```

:::caution[Name conflict]
A helper named `stringify` also exists in [`@helpers4/version`](../version/stringify/). If you need both in the same file, rename at import with `as`:

```ts
import { stringify as stringify4json } from '@helpers4/json';
import { stringify as stringify4version } from '@helpers4/version';
```

See [Name Conflicts](../../reference/naming-conflicts/) for the full resolution guide.
:::

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/json/stringify.ts)
