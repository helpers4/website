---
title: "extractNumber"
sidebar:
  label: "extractNumber"
---

Extracts the first number embedded anywhere in a string, or passes through a `number`.

Unlike a plain `parseFloat`/`parseInt`, the number does not need to be at the start of
the string: digits are searched for anywhere, so leading/trailing text (units, labels, ...)
is ignored. A `-` before the digits and a scientific-notation suffix (`e`/`E`) are
disambiguated with ExtractNumberOptions.sign and ExtractNumberOptions.exponent.

Returns `undefined` if no number can be found.

> Available since v2.0.3

## Import

```ts
import { extractNumber } from '@helpers4/number';
```

## Signature


```ts
extractNumber(value: unknown, options: ExtractNumberOptions): number | undefined
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to extract a number from |
| `options` | `ExtractNumberOptions` | Options controlling sign and exponent disambiguation |

## Returns

`number | undefined` — The extracted number, or `undefined` if none was found

## Examples

### extractNumber



```ts
extractNumber('16.5px')        // => 16.5
extractNumber('Wafer 10')      // => 10
extractNumber('xxx-111')       // => 111   ('-' glued to text → separator)
extractNumber('xxx -111')      // => -111  ('-' preceded by a space → sign)
extractNumber('-111')          // => -111  ('-' at the start of the string → sign)
extractNumber('1e5 mol')       // => 100000
extractNumber('1e5kg')         // => 1     ('e5' glued to text → mantissa only)
extractNumber('no number')     // => undefined
extractNumber(42)              // => 42
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/number/extractNumber.ts)
