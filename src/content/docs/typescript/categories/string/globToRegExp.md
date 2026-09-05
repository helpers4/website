---
title: "globToRegExp"
sidebar:
  label: "globToRegExp"
description: "Compiles a simple glob pattern into a `RegExp` that matches the whole string: `*` matches any sequence of UTF-16 code u…"
version: "3.1.1"
---

Compiles a simple glob pattern into a `RegExp` that matches the whole string: `*` matches any
sequence of UTF-16 code units (including none), `?` matches exactly one UTF-16 code unit.
Everything else is matched literally.

This is not a full shell/minimatch glob — no brace expansion, character classes, or
path-separator-aware `**`, just the two textbook wildcards. Like the rest of this library,
lengths are counted in UTF-16 code units: `?` matches one code unit, not one Unicode code
point, so it matches only half of a surrogate pair (e.g. an emoji outside the Basic
Multilingual Plane).

> Available since v3.1.1

## Import

```ts
import { globToRegExp } from '@helpers4/string';
// or, from the all-in-one package (same code, one install):
import { globToRegExp } from 'helpers4/string';
```

## Signature


```ts
globToRegExp(pattern: string, caseSensitive: boolean): RegExp
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `pattern` | `string` | The glob pattern to compile |
| `caseSensitive` | `boolean` | Whether the resulting \`RegExp\` is case\-sensitive\. Defaults to \`true\`\. |

## Returns

`RegExp` — A `RegExp` matching strings that satisfy `pattern` in full

## Examples

### Match a file extension pattern

"*" matches any sequence of characters.

```ts
globToRegExp('*.test.ts').test('helper.test.ts')
// => true
```

### Match a fixed-width placeholder with "?"

"?" matches exactly one character — handy for fixed-width codes.

```ts
globToRegExp('report-????.csv').test('report-2026.csv')
// => true
```

### Reuse the same pattern for many strings efficiently

Compile the RegExp once and reuse it for every check instead of recompiling per candidate. If you also need to cache across many different call sites, wrap globToRegExp itself with memoize() from @helpers4/function.

```ts
const isTestFile = globToRegExp('*.test.ts');
['a.test.ts', 'a.spec.ts'].filter(name => isTestFile.test(name))
// => ['a.test.ts']
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/string/globToRegExp.ts)
