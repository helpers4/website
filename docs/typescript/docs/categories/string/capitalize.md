---
sidebar_label: "capitalize"
---

# capitalize

Capitalizes the first letter of a string

> Available since v1.9.0

## Import

```ts
import { capitalize } from '@helpers4/string';
```

## Signature

```ts
capitalize(str: string): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `str` | `string` | The string to capitalize |

## Returns

`string` — String with first letter capitalized

## Examples

### Capitalize a word

Uppercases the first letter and lowercases the rest.

```ts
capitalize('hello')
// => 'Hello'
```

### Handle mixed case

Lowercases all letters except the first one.

```ts
capitalize('hELLO')
// => 'Hello'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/string/capitalize.ts)
