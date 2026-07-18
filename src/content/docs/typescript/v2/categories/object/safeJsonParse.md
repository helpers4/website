---
title: "safeJsonParse"
sidebar:
  label: "safeJsonParse"
---

Parses a JSON string, returning `null` (or a fallback) on any parse failure.

Unlike `JSON.parse`, this never throws. Invalid JSON strings and other
parsing edge-cases resolve to `null` or the provided `fallback`.

> Available since v2.0.0

## Import

```ts
import { safeJsonParse } from '@helpers4/object';
```

## Signature


```ts
safeJsonParse<T>(input: string): T | null
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `input` | `string` | The JSON string to parse. |

## Returns

`T | null` — The parsed value typed as `T`, or `fallback` on failure.

## Examples

### Parse valid JSON

Returns the parsed value when the input is valid JSON.

```ts
safeJsonParse<{ a: number }>('{"a":1}')
// => { a: 1 }
```

### Return null on invalid input

Returns null instead of throwing when JSON is malformed.

```ts
safeJsonParse('invalid')
// => null
```

### Use a fallback value

Returns the provided fallback when parsing fails.

```ts
safeJsonParse('invalid', [])
// => []
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v2/helpers/object/safeJsonParse.ts)
