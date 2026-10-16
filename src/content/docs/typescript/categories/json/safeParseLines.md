---
title: "safeParseLines"
sidebar:
  label: "safeParseLines"
description: "Parses newline-delimited JSON (NDJSON, JSON Lines) like parseLines, but returns `null` (or `fallback`) instead of throw…"
version: "3.1.4"
---

Parses newline-delimited JSON (NDJSON, JSON Lines) like parseLines, but returns `null`
(or `fallback`) instead of throwing on invalid input.

**Accepts / rejects:** exactly what parseLines does, with the same
ParseLinesOptions.

**On invalid input:** returns `fallback` when one is given — even `undefined`, which is told
apart from an omitted argument — and `null` otherwise. Never throws. To pass `options` without
a fallback, pass `null` as the fallback.

> Available since v3.1.3

## Import

```ts
import { safeParseLines } from '@helpers4/json';
// or, from the all-in-one package (same code, one install):
import { safeParseLines } from 'helpers4/json';
```

## Signature


```ts
safeParseLines<T = unknown>(text: string): T[] | null
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | `string` | The newline\-delimited JSON text |

## Returns

`T[] | null` — The parsed values typed as `T[]`, or `fallback` on invalid input

## Examples

### Read NDJSON without throwing

Returns null if any line is invalid.

```ts
safeParseLines('1\n2\n') // => [1, 2]
safeParseLines('1\n{')   // => null
```

### Options without a fallback

Pass null as the fallback to give options.

```ts
safeParseLines('1\n\n2', null, { blankLines: 'fail' })
// => null (JSON Lines forbids blank lines)
```

## Related Types

### `ParseLinesOptions`

Options for parseLines and safeParseLines.

```ts
interface ParseLinesOptions {
  blankLines?: "skip" | "fail";
  invalidLines?: "skip" | "fail";
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/json/safeParseLines.ts)
