---
title: "extractErrorMessage"
sidebar:
  label: "extractErrorMessage"
---

Convert an error to a readable message.

> Available since v1.0.0

## Import

```ts
import { extractErrorMessage } from '@helpers4/string';
```

## Signature


```ts
extractErrorMessage(error: unknown, stringify: string | true): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `error` | `unknown` | an error |
| `stringify` | `string \| true` | stringifies the error if no extractable message is found |

## Returns

`string` — a readable message or a stringified error if stringify is true, otherwise undefined

## Examples

### Extract message from Error object

Returns the stringified Error, including the class prefix.

```ts
extractErrorMessage(new Error('Something went wrong'))
// => 'Error: Something went wrong'
```

### Handle string errors

Returns the string directly when the error is a plain string.

```ts
extractErrorMessage('plain error')
// => 'plain error'
```

### Stringify unknown errors

When stringify is true, falls back to JSON.stringify for unrecognized errors.

```ts
extractErrorMessage(42, true)
// => '42'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v2/helpers/string/extractErrorMessage.ts)
