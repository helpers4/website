---
title: "formatPartial"
sidebar:
  label: "formatPartial"
description: "Formats a partial ISO date at the precision it was given, in UTC: a year alone is approximate and reads `c."
version: "3.1.5"
---

Formats a partial ISO date at the precision it was given, in UTC: a year alone is
approximate and reads `c. 2008`, a month `Mar 2008` and a full day `Mar 9, 2008`.

Month names and their order follow `locale`. The marker before a year alone does not: see
FormatPartialOptions.

Returns `null` when parsePartial would, or when the locale is invalid.

> Available since v3.1.5

## Import

```ts
import { formatPartial } from '@helpers4/date';
// or, from the all-in-one package (same code, one install):
import { formatPartial } from 'helpers4/date';
```

## Signature


```ts
formatPartial(input: string, options: FormatPartialOptions): string | null
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `input` | `string` | A \`YYYY\`, \`YYYY\-MM\` or \`YYYY\-MM\-DD\` string |
| `options` | `FormatPartialOptions` | Locale and approximate\-year marker — see FormatPartialOptions |

## Returns

`string | null` — The label, or `null`

## Examples

### Label at the known precision

An approximate year reads "c. 2008", a month "Mar 2008", a day "Mar 9, 2008".

```ts
formatPartial('2008')       // => 'c. 2008'
formatPartial('2008-03')    // => 'Mar 2008'
formatPartial('2008-03-09') // => 'Mar 9, 2008'
```

### Another language

The locale sets the month names; the marker for a year alone is a word, so you give it.

```ts
formatPartial('2008', { locale: 'fr', approximate: 'vers' }) // => 'vers 2008'
formatPartial('2008-03-09', { locale: 'fr' })                // => '9 mars 2008'
```

### Invalid input

Returns null instead of a wrong label.

```ts
formatPartial('2008-13') // => null
```

## Related Types

### `FormatPartialOptions`

Options for formatPartial.

```ts
interface FormatPartialOptions {
  approximate?: string;
  locale?: string;
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/formatPartial.ts)
