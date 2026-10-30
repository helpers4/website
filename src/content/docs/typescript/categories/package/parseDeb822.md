---
title: "parseDeb822"
sidebar:
  label: "parseDeb822"
description: "Parses a deb822 document, the format of Debian `Packages`, `Sources` and `Release` indexes, `control` and `.dsc` and `.…"
version: "3.1.10"
---

Parses a deb822 document, the format of Debian `Packages`, `Sources` and `Release` indexes,
`control` and `.dsc` and `.changes` files, DEP-5 `copyright` files and apt `.sources` files, as
described in the Debian Policy Manual, chapter 5.1 "Syntax of control files".

- Stanzas are separated by one or more blank lines (lines holding only whitespace).
- A field is `Name: value`. The value has its surrounding whitespace removed. Names are
  case-insensitive in Debian: the original spelling is kept in `entries`, and `fields` is keyed
  by the lower-cased name.
- A line starting with a space or a tab continues the previous field. Exactly one leading
  space or tab is removed, the line breaks are kept (joined with `\n`), and a continuation line
  that is just `.` stands for an empty line. A field whose first line is empty (`Files:`) keeps
  that empty first line, so its value starts with `\n`.
- Lines starting with `#` are comments and are ignored anywhere, without ending a stanza or a
  multi-line value. `\r\n` line endings are accepted. Trailing whitespace is dropped.
- A repeated field name inside one stanza: all occurrences stay in `entries`, and the last one
  wins in `fields`.
- A line that is not a comment, a field or a continuation (no colon, a continuation before any
  field, a name with a space before the colon) never throws by default: it is collected in the
  stanza's `unparsed`, so nothing is lost silently. With `{ strict: true }` it throws a
  `SyntaxError` naming the line number and its text instead. A stanza made only of such lines
  is still returned.
- PGP clearsigning armor (`Release`, `.dsc`, `.changes` can be signed) is not interpreted.

To compare the version strings found in `Version` fields, use `compare(a, b, 'debian')` from
`@helpers4/version`; to read `Depends`-like fields, use `parseDependencies`.

> Available since v3.1.10

## Import

```ts
import { parseDeb822 } from '@helpers4/package';
// or, from the all-in-one package (same code, one install):
import { parseDeb822 } from 'helpers4/package';
```

## Signature


```ts
parseDeb822(text: string, options: Deb822Options): Deb822Stanza[]
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | `string` | The document, with \`\\n\` or \`\\r\\n\` line endings |
| `options` | `Deb822Options` | \`\{ strict \}\`, see Deb822Options |

## Returns

`Deb822Stanza[]` — The stanzas in source order; `[]` for an empty or comment-only document

## Examples

### Read the stanzas of a Packages index

A blank line separates the stanzas; field names are looked up in lower case.

```ts
const stanzas = parseDeb822(packagesText);
stanzas.map((stanza) => stanza.fields.package)
// => ['zlib1g', 'zlib1g-dev']
```

### Keep a multi-line description

Continuation lines are joined with line breaks, and a lone " ." is a blank line.

```ts
const [zlib] = parseDeb822(packagesText);
zlib.fields.description
// => 'compression library - runtime\nzlib is a library implementing the deflate compression method.\n\nThis package includes the shared library.'
```

### Keep the original spelling and the duplicates

`entries` is the ordered record of the stanza, whatever the case of the names.

```ts
parseDeb822('SHA256: abc\nTag: a\nTAG: b')[0].entries
// => [{ name: 'SHA256', value: 'abc' }, { name: 'Tag', value: 'a' }, { name: 'TAG', value: 'b' }]
```

## Related Types

### `Deb822Field`

One field of a deb822 stanza, with the name spelled as in the source.

```ts
interface Deb822Field {
  name: string;
  value: string;
}
```

### `Deb822Options`

Options for parseDeb822.

```ts
interface Deb822Options {
  strict?: boolean;
}
```

### `Deb822Stanza`

One stanza (paragraph) of a deb822 document.

`entries` is the faithful, ordered record: every field, in source order, with its original
spelling, duplicates included. `fields` is the convenient view for lookups. It is keyed by the
lower-cased name because Debian field names are case-insensitive (Policy 5.1), so a lookup is
`stanza.fields[name.toLowerCase()]`, and a plain object stays serialisable and diff-friendly,
where a `get()` method would not survive `JSON.stringify` or a structured clone.

```ts
interface Deb822Stanza {
  entries: Deb822Field[];
  fields: Record<string, string>;
  unparsed: string[];
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/package/parseDeb822.ts)
