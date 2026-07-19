---
title: "parsePropertyPath"
sidebar:
  label: "parsePropertyPath"
---

Parses a dot/bracket-notation property path into an array of string/number
key segments — the same notation accepted by get and set.

- Dot separators (`.`) split segments; each segment becomes a string key.
- Bracket indices (`[n]`) become number keys.
- A leading `.` is treated as "current level" and stripped before parsing,
  so `.[0]` ≡ `[0]` and `.a.b` ≡ `a.b`.
- Empty string (or a bare `.`) returns `['']` (addresses the `''` key on the root object).
- Consecutive dots (`a..b`) produce an empty-string segment: `['a', '', 'b']`.

Results are cached (up to 500 distinct path strings, oldest evicted first)
since real-world callers tend to reuse a small, fixed set of literal paths.

> Available since v3.0.0

## Import

```ts
import { parsePropertyPath } from '@helpers4/object';
```

## Signature


```ts
parsePropertyPath(path: string): readonly string | number[]
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `path` | `string` | The dot/bracket\-notation path string to parse |

## Returns

`readonly string | number[]` — The parsed key segments

## Examples

### Parse a dot/bracket-notation path into key segments

The same notation accepted by get() and set() — bracket indices become numbers.

```ts
parsePropertyPath('layers[1].name')
// => ['layers', 1, 'name']
```

### Malformed paths throw instead of silently misparsing

Text trailing a closing bracket within a segment is ambiguous — use 'a[0].b' instead.

```ts
parsePropertyPath('a[0]b')
// => throws RangeError
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/object/parsePropertyPath.ts)
