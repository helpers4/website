---
title: "matchGlob"
sidebar:
  label: "matchGlob"
description: "Whether `text` matches a glob pattern in full: `*` matches any run of characters, `?` exactly one."
version: "3.1.10"
---

Whether `text` matches a glob pattern in full: `*` matches any run of characters, `?` exactly
one. A one-shot shortcut for `globToRegExp(pattern).test(text)`; to test many strings with the
same pattern, build the `RegExp` once with globToRegExp or createGlobMatcher.

> Available since v3.1.10

## Import

```ts
import { matchGlob } from '@helpers4/string';
// or, from the all-in-one package (same code, one install):
import { matchGlob } from 'helpers4/string';
```

## Signature


```ts
matchGlob(pattern: string, text: string, options: MatchGlobOptions): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `pattern` | `string` | The glob pattern |
| `text` | `string` | The string to test |
| `options` | `MatchGlobOptions` | Case insensitivity and path globs — see MatchGlobOptions |

## Returns

`boolean` — `true` if `text` matches `pattern`

## Examples

### Test a name against a glob

One call, with an option to ignore case.

```ts
matchGlob('screen *', 'Screen 2', { caseInsensitive: true }) // => true
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

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/string/matchGlob.ts)
