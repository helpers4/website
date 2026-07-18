---
title: "capitalize"
sidebar:
  label: "capitalize"
---

Capitalizes the first letter of a string.
By default, lowercases the remaining characters.
Pass `{ lowercaseRest: false }` to only uppercase the first character.

> Available since v1.9.0

## Import

```ts
import { capitalize } from '@helpers4/string';
```

## Signature


```ts
capitalize(str: string, options?: CapitalizeOptions): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `str` | `string` | The string to capitalize |
| `options` | `CapitalizeOptions` | Options *(optional)* |

## Returns

`string` — String with first letter uppercased

## Examples

### Capitalize a word

Uppercases the first letter and lowercases the rest.

```ts
capitalize('hello')
// => 'Hello'
```

### Handle mixed case

Lowercases all letters except the first one (default behaviour).

```ts
capitalize('hELLO')
// => 'Hello'
```

### Uppercase first only — leave rest untouched

Use { lowercaseRest: false } to preserve the original casing of the remaining characters.

```ts
capitalize('hELLO', { lowercaseRest: false })
// => 'HELLO'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v2/helpers/string/capitalize.ts)
