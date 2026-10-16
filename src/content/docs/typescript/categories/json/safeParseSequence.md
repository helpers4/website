---
title: "safeParseSequence"
sidebar:
  label: "safeParseSequence"
description: "Parses a JSON text sequence (RFC 7464) like parseSequence, but returns `null` (or `fallback`) instead of throwing on in…"
version: "3.1.4"
---

Parses a JSON text sequence (RFC 7464) like parseSequence, but returns `null` (or
`fallback`) instead of throwing on invalid input.

**Accepts / rejects:** exactly what parseSequence does, with the same
ParseSequenceOptions.

**On invalid input:** returns `fallback` when one is given — even `undefined`, which is told
apart from an omitted argument — and `null` otherwise. Never throws. To pass `options` without
a fallback, pass `null` as the fallback.

> Available since v3.1.3

## Import

```ts
import { safeParseSequence } from '@helpers4/json';
// or, from the all-in-one package (same code, one install):
import { safeParseSequence } from 'helpers4/json';
```

## Signature


```ts
safeParseSequence<T = unknown>(text: string): T[] | null
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | `string` | The JSON text sequence |

## Returns

`T[] | null` — The parsed values typed as `T[]`, or `fallback` on invalid input

## Examples

### Read a sequence without throwing

Returns null if any record is invalid.

```ts
safeParseSequence('\u001E1\n') // => [1]
safeParseSequence('\u001E{\n') // => null
```

### Provide a fallback

The fallback is returned on invalid input.

```ts
safeParseSequence('\u001E{\n', [])
// => []
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

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/json/safeParseSequence.ts)
