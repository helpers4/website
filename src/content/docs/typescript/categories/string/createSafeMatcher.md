---
title: "createSafeMatcher"
sidebar:
  label: "createSafeMatcher"
description: "Like createMatcher, but returns `null` instead of throwing when a string pattern is an invalid regular expression, to r…"
version: "3.1.6"
---

Like createMatcher, but returns `null` instead of throwing when a string pattern is an
invalid regular expression, to report bad user input without a `try`.

> Available since v3.1.5

## Import

```ts
import { createSafeMatcher } from '@helpers4/string';
// or, from the all-in-one package (same code, one install):
import { createSafeMatcher } from 'helpers4/string';
```

## Signature


```ts
createSafeMatcher(pattern: MatcherPattern | readonly MatcherPattern[], options?: MatcherOptions): function | null
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `pattern` | `MatcherPattern \| readonly MatcherPattern[]` | A pattern, or an array of patterns and exclusions |
| `options` | `MatcherOptions` | Syntax of string patterns and case sensitivity — see MatcherOptions *(optional)* |

## Returns

`function | null` — A function telling whether a string matches, or `null` for an invalid regular expression

## Examples

### Validate a user filter

An invalid regular expression gives null, to report it without a try.

```ts
const matches = createSafeMatcher(input);
if (!matches) console.error('Invalid filter');
```

### Use it like createMatcher

For valid patterns, the result is the same predicate.

```ts
createSafeMatcher('*.fig')?.('a.fig') // => true
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

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/string/createSafeMatcher.ts)
