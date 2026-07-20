---
title: "isJSON"
sidebar:
  label: "isJSON"
---

Checks whether a value is a string containing valid, parseable JSON text.

Distinct from isJSONValue, which checks an already-parsed runtime value's *shape*
— this checks a *string* before you parse it. Pairs naturally with `@helpers4/object`'s
`safeJsonParse`, which is the safe-parse counterpart once you know the string is valid —
this helper reuses it internally rather than re-implementing the parse/catch itself.

> Available since v3.0.3

## Import

```ts
import { isJSON } from '@helpers4/guard';
```

## Signature


```ts
isJSON(value: unknown): value is string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is string` — `true` if value is a string and `JSON.parse` succeeds on it

## Examples

### Check a string before parsing it

Validates that a string is parseable JSON before calling JSON.parse.

```ts
isJSON('{"a":1}')
// => true
isJSON('not json')
// => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/guard/isJSON.ts)
