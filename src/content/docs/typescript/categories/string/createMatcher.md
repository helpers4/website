---
title: "createMatcher"
sidebar:
  label: "createMatcher"
description: "Turns user-supplied filters (a setting, a CLI flag, a list of rules) into one predicate."
version: "3.1.10"
---

Turns user-supplied filters (a setting, a CLI flag, a list of rules) into one predicate.

- A string is a glob, or a regular expression — see MatcherOptions.syntax. A `re:` or
  `glob:` prefix (`'re:^v\\d+$'`, `'glob:*.ts'`) fixes the reading of that one pattern when the
  syntax is `'auto'` (the default); with an explicit `'glob'` or `'regex'` syntax the prefixes
  are plain text, so createGlobMatcher never reads a regular expression. To match a
  string that really starts with one of them under `'auto'`, spell it `'glob:re:…'`.
- A `RegExp` is used as is, except that its `g` and `y` flags are dropped: they make
  `test()` depend on the previous call.
- A function is called as is.
- An array matches when one of its patterns matches and none of its exclusions does. An
  exclusion is a string starting with `!` (`'!draft-*'`); write `'\\!'` for a pattern that really
  starts with `!`. The order does not matter. An array with only exclusions matches everything
  else, and an empty array matches everything (no filter).

> Available since v3.1.5

## Import

```ts
import { createMatcher } from '@helpers4/string';
// or, from the all-in-one package (same code, one install):
import { createMatcher } from 'helpers4/string';
```

## Signature


```ts
createMatcher(pattern: MatcherPattern | readonly MatcherPattern[], options: MatcherOptions): function
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `pattern` | `MatcherPattern \| readonly MatcherPattern[]` | A pattern, or an array of patterns and exclusions |
| `options` | `MatcherOptions` | Syntax of string patterns and case sensitivity — see MatcherOptions |

## Returns

`function` — A function telling whether a string matches

## Examples

### Filter names with globs, regular expressions and exclusions

An array matches when one pattern matches and no ! exclusion does.

```ts
const isScreen = createMatcher(['Screen *', '/^(Home|Login)$/', '!* (old)']);
isScreen('Screen 2')       // => true
isScreen('Login')          // => true
isScreen('Screen 2 (old)') // => false
```

### Paths only

With syntax 'glob', a pattern like /usr/lib/img is never read as a regular expression.

```ts
createMatcher('/usr/lib/*', { syntax: 'glob' })('/usr/lib/img') // => true
```

### Fix the reading of one pattern with re: or glob:

A prefix overrides the syntax option for that pattern only, so globs and regular expressions mix freely.

```ts
const matches = createMatcher(['glob:src/*', 're:\\.tsx?$', '!re:test']);
matches('lib/b.ts')      // => true
matches('lib/b.test.ts') // => false
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

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/string/createMatcher.ts)
