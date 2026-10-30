---
title: "stringifyDependencies"
sidebar:
  label: "stringifyDependencies"
description: "Writes dependency groups back as a field value, the inverse of parseDependencies;"
version: "3.1.10"
---

Writes dependency groups back as a field value, the inverse of parseDependencies; the
type of `groups` is that of `format`.

**`'debian'`** — the canonical spacing of the Debian Policy Manual 7.1: `, ` between entries,
` | ` between alternatives, a space before each `(op version)`, `[archs]` and `<profiles>`.
**`'rpm'`** — `, ` between entries, `name op version`, and `(a or b)` for alternatives.
**`'arch'`** — entries separated by a space, `name>=version`. **`'alpine'`** — the same, with a
leading `!` for a conflict. **`'pep508'`** — one requirement per line,
`name[extras]>=1,<2 ; marker`. The formats without alternatives (`'arch'`, `'alpine'`,
`'pep508'`) throw a `RangeError` for a group of several.

`parseDependencies(stringifyDependencies(groups, f), f)` gives `groups` back, and stringifying a
parsed field normalises its whitespace. An empty group writes nothing, so it does not survive a
round trip.

> Available since v3.1.10

## Import

```ts
import { stringifyDependencies } from '@helpers4/package';
// or, from the all-in-one package (same code, one install):
import { stringifyDependencies } from 'helpers4/package';
```

## Signature


```ts
stringifyDependencies<Format extends keyof DependencyFormats>(groups: readonly DependencyGroup<DependencyOf<NoInfer<Format>>>[], format: Format): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `groups` | `readonly DependencyGroup<DependencyOf<NoInfer<Format>>>[]` | The groups of alternatives, as returned by \`parseDependencies\` |
| `format` | `Format` | How to write the field |

## Returns

`string` — The field value; `''` for `[]`

## Examples

### Write relationships as a field value

Entries are joined with ", " and alternatives with " | ".

```ts
stringifyDependencies([
  [{ name: 'libc6', version: { operator: '>=', version: '2.34' } }],
  [{ name: 'python3', arch: 'any' }, { name: 'python3' }],
], 'debian')
// => 'libc6 (>= 2.34), python3:any | python3'
```

### Normalise a field after editing it

Parse, change the groups, write them back in canonical spacing.

```ts
const groups = parseDependencies('libc6 (>=2.34) ,\n  foo [ amd64 ]', 'debian');
groups.push([{ name: 'bar', profiles: [['!nocheck']] }]);
stringifyDependencies(groups, 'debian')
// => 'libc6 (>= 2.34), foo [amd64], bar <!nocheck>'
```

### Write another format

The same function writes RPM, Arch, Alpine and PEP 508 fields, each from its own dependency type.

```ts
stringifyDependencies([[{ name: 'musl', version: { operator: '>=', version: '1.2' } }], [{ name: 'openrc', conflict: true }]], 'alpine')
// => 'musl>=1.2 !openrc'
```

## Related Types

### `DependencyFormats`

For each supported format, the shape of one dependency and the options its parser takes. This is
what makes parseDependencies and stringifyDependencies type-safe per format.

```ts
interface DependencyFormats {
  alpine: object;
  arch: object;
  debian: object;
  pep508: object;
  rpm: object;
}
```

### `DependencyGroup`

The alternatives (`a | b`) that satisfy one entry of a dependency field. A format without
alternatives (`'arch'`, `'alpine'`, `'pep508'`) always has a single one.

```ts
type DependencyGroup<Dependency> = Dependency[]
```

### `DependencyOf`

The dependency type of a format.

```ts
type DependencyOf<Format extends DependencyFormat> = DependencyFormats[Format]['dependency']
```

### `DependencyFormat`

The formats of dependency fields: `'debian'`, `'rpm'`, `'arch'`, `'alpine'` and `'pep508'`.

```ts
type DependencyFormat = keyof DependencyFormats
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/package/stringifyDependencies.ts)
