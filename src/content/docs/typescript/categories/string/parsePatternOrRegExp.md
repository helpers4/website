---
title: "parsePatternOrRegExp"
sidebar:
  label: "parsePatternOrRegExp"
description: "Reads a setting that is either a regular expression or a glob: `/source/flags` is a regular expression when every flag…"
version: "3.1.10"
---

Reads a setting that is either a regular expression or a glob: `/source/flags` is a regular
expression when every flag is valid (`d`, `g`, `i`, `m`, `s`, `u`, `v`, `y`), anything else is
a glob. For font substitution rules, ignore lists, filters. Note that `/usr/lib/img` is the
regular expression `usr/lib` with the flags `img`: for paths, use globToRegExp.

> Available since v3.1.10

## Import

```ts
import { parsePatternOrRegExp } from '@helpers4/string';
// or, from the all-in-one package (same code, one install):
import { parsePatternOrRegExp } from 'helpers4/string';
```

## Signature


```ts
parsePatternOrRegExp(pattern: string, options: MatchGlobOptions): RegExp
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `pattern` | `string` | A \`/source/flags\` regular expression or a glob |
| `options` | `MatchGlobOptions` | How to read a glob — see MatchGlobOptions\. A regular expression keeps its own flags |

## Returns

`RegExp` — The `RegExp`

## Examples

### Glob or regular expression

A /source/flags string is a regular expression; anything else is a glob.

```ts
parsePatternOrRegExp('SF Pro*').test('SF Pro Display') // => true
parsePatternOrRegExp('/^SF Pro/i').test('sf pro text') // => true
```

## Related Types

### `MatchGlobOptions`

Options for matchGlob and parsePatternOrRegExp.

```ts
interface MatchGlobOptions {
  caseInsensitive?: boolean;
  extended?: boolean;
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/string/parsePatternOrRegExp.ts)
