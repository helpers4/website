---
title: "createGlobMatcher"
sidebar:
  label: "createGlobMatcher"
description: "createMatcher with every string read as a glob (`*`, `?`): no string is ever taken for a regular expression, so it neve…"
version: "3.1.7"
---

createMatcher with every string read as a glob (`*`, `?`): no string is ever taken
for a regular expression, so it never throws. The right choice for paths and file names.

> Available since v3.1.5

## Import

```ts
import { createGlobMatcher } from '@helpers4/string';
// or, from the all-in-one package (same code, one install):
import { createGlobMatcher } from 'helpers4/string';
```

## Signature


```ts
createGlobMatcher(pattern: MatcherPattern | readonly MatcherPattern[], options: Omit<MatcherOptions, "syntax">): function
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `pattern` | `MatcherPattern \| readonly MatcherPattern[]` | A pattern, or an array of patterns and \`\!\` exclusions |
| `options` | `Omit<MatcherOptions, "syntax">` | Case sensitivity |

## Returns

`function` — A function telling whether a string matches

## Examples

### Filter paths

Strings are always globs, so a path is never taken for a regular expression.

```ts
const isSource = createGlobMatcher(['/src/*.ts', '!*.test.ts']);
isSource('/src/index.ts')      // => true
isSource('/src/index.test.ts') // => false
```

### Ignore case

caseSensitive: false matches letters of any case.

```ts
createGlobMatcher('*.FIG', { caseSensitive: false })('a.fig') // => true
```

## Related Types

### `MatcherOptions`

Options for createMatcher and createSafeMatcher.

```ts
interface MatcherOptions {
  caseSensitive?: boolean;
  syntax?: "auto" | "regex" | "glob";
}
```

### `MatcherPattern`

One pattern accepted by createMatcher: a string (read according to
MatcherOptions.syntax), a `RegExp`, or a predicate of your own.

```ts
type MatcherPattern = string | RegExp | ((text: string) => boolean)
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/string/createGlobMatcher.ts)
