---
title: "isJSONValue"
sidebar:
  label: "isJSONValue"
---

Checks whether a value is composed entirely of JSON-representable types: `string`, finite
`number`, `boolean`, `null`, arrays of JSON values, or plain objects of JSON values.
`undefined`, functions, symbols, `NaN`/`Infinity`, and non-plain objects (`Date`, `Map`,
`Set`, class instances...) all return `false`, since none survive a real `JSON.stringify` /
`JSON.parse` round-trip unchanged. Circular references also return `false` for the same
reason, instead of recursing forever.

> Available since v3.0.3

## Import

```ts
import { isJSONValue } from '@helpers4/guard';
```

## Signature


```ts
isJSONValue(value: unknown): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`boolean` — `true` if the value is a valid JSON value

## Examples

### Validate a value before sending it as JSON

Recursively checks that a value only contains JSON-representable types.

```ts
isJSONValue({ a: [1, 'two', null, { b: true }] })
// => true
isJSONValue({ a: new Date() })
// => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/guard/isJSONValue.ts)
