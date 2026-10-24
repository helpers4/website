---
title: "parseLines"
sidebar:
  label: "parseLines"
description: "Parses newline-delimited JSON — one JSON value per line."
version: "3.1.7"
---

Parses newline-delimited JSON — one JSON value per line. Covers both NDJSON
(`application/x-ndjson`, `.ndjson`) and JSON Lines (`.jsonl`), which are the same format.

**Accepts:**
- one strict JSON value per line (each line is read like parseStrict)
- `\n` and `\r\n` line endings
- a trailing line break after the last value, or none
- blank lines, skipped by default (see ParseLinesOptions.blankLines)
- an empty text, which holds zero values

**Rejects:** comments, trailing commas and any other non-strict JSON on a line, a value spread
over several lines, and a leading byte order mark (JSON Lines forbids it).

**On invalid input:** throws a `SyntaxError` naming the 1-based line number, with the
original parse error as its `cause` — unless `invalidLines`/`blankLines` say to skip it.

> Available since v3.1.3

## Import

```ts
import { parseLines } from '@helpers4/json';
// or, from the all-in-one package (same code, one install):
import { parseLines } from 'helpers4/json';
```

## Signature


```ts
parseLines<T = unknown>(text: string, options: ParseLinesOptions): T[]
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | `string` | The newline\-delimited JSON text |
| `options` | `ParseLinesOptions` | How to handle blank and invalid lines — see ParseLinesOptions |

## Returns

`T[]` — The parsed values, in line order, typed as `T[]`

## Examples

### Read NDJSON / JSON Lines

One JSON value per line; a trailing line break is optional.

```ts
parseLines('{"id":1}\n{"id":2}\n')
// => [{ id: 1 }, { id: 2 }]
```

### Skip a truncated last line

With invalidLines: "skip", a line cut by a crash is dropped instead of failing the whole parse.

```ts
parseLines('{"id":1}\n{"id":', { invalidLines: 'skip' })
// => [{ id: 1 }]
```

### Fail on an invalid line by default

The SyntaxError names the line.

```ts
parseLines('1\n{\n3')
// throws SyntaxError: parseLines: line 2: ...
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

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/json/parseLines.ts)
