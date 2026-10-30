---
title: "createRegexMatcher"
sidebar:
  label: "createRegexMatcher"
description: "createMatcher with every string read as the source of a regular expression, without slashes or flags (`'^(Home|Login)$'…"
version: "3.1.10"
---

createMatcher with every string read as the source of a regular expression, without
slashes or flags (`'^(Home|Login)$'`): for a setting documented as "a regular expression".

> Available since v3.1.5

## Import

```ts
import { createRegexMatcher } from '@helpers4/string';
// or, from the all-in-one package (same code, one install):
import { createRegexMatcher } from 'helpers4/string';
```

## Signature


```ts
createRegexMatcher(pattern: MatcherPattern | readonly MatcherPattern[], options: Omit<MatcherOptions, "syntax">): function
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `pattern` | `MatcherPattern \| readonly MatcherPattern[]` | A pattern, or an array of patterns and \`\!\` exclusions |
| `options` | `Omit<MatcherOptions, "syntax">` | Case sensitivity \(adds the \`i\` flag when \`false\`\) |

## Returns

`function` — A function telling whether a string matches

## Examples

### A setting documented as a regular expression

The string is the source, without slashes.

```ts
createRegexMatcher('^(Home|Login)$')('Login') // => true
```

### Ignore case

caseSensitive: false adds the i flag.

```ts
createRegexMatcher('^icon-\\d+$', { caseSensitive: false })('Icon-42') // => true
```

## Related Types

### `MatcherOptions`

Options for createMatcher and createSafeMatcher.

```ts
interface MatcherOptions {
  caseSensitive?: boolean;
  extended?: boolean;
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

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/string/createRegexMatcher.ts)
