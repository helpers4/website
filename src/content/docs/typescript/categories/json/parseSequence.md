---
title: "parseSequence"
sidebar:
  label: "parseSequence"
description: "Parses a JSON text sequence (RFC 7464, `application/json-seq`): records that each start with the ASCII record separator…"
version: "3.1.8"
---

Parses a JSON text sequence (RFC 7464, `application/json-seq`): records that each start with
the ASCII record separator (RS, U+001E) and hold one JSON text, as written by `jq --seq`.

**Accepts:**
- one strict JSON value per record (each record is read like parseStrict)
- JSON values spread over several lines inside a record — unlike parseLines
- several RS in a row (empty records are ignored, as the RFC's grammar allows)
- an empty text, which holds zero records

**Rejects (as invalid records):**
- anything before the first RS
- a record that isn't strict JSON, or holds only whitespace
- a top-level number, `true`, `false` or `null` not followed by whitespace — RFC 7464 §2.4
  requires dropping it, since it may have been truncated

**On invalid input:** throws a `SyntaxError` naming the 1-based record number, with the
original parse error (if any) as its `cause` — unless `invalidRecords: 'skip'` says to drop it.

> Available since v3.1.3

## Import

```ts
import { parseSequence } from '@helpers4/json';
// or, from the all-in-one package (same code, one install):
import { parseSequence } from 'helpers4/json';
```

## Signature


```ts
parseSequence<T = unknown>(text: string, options: ParseSequenceOptions): T[]
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | `string` | The JSON text sequence |
| `options` | `ParseSequenceOptions` | How to handle invalid records — see ParseSequenceOptions |

## Returns

`T[]` — The parsed values, in record order, typed as `T[]`

## Examples

### Read a JSON text sequence

Each record starts with the record separator U+001E, as jq --seq writes it.

```ts
parseSequence('\u001E{"id":1}\n\u001E{"id":2}\n')
// => [{ id: 1 }, { id: 2 }]
```

### Recover from a truncated log

RFC 7464 recommends skipping invalid records; ask for it with invalidRecords: "skip".

```ts
parseSequence('\u001E{"id":1}\n\u001E{"id', { invalidRecords: 'skip' })
// => [{ id: 1 }]
```

## Related Types

### `ParseSequenceOptions`

Options for parseSequence and safeParseSequence.

```ts
interface ParseSequenceOptions {
  invalidRecords?: "skip" | "fail";
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/json/parseSequence.ts)
