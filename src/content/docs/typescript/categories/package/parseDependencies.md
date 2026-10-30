---
title: "parseDependencies"
sidebar:
  label: "parseDependencies"
description: "Parses the value of a package dependency field (`Depends`, `Requires`, `depends`, ...) into a structure: groups of alte…"
version: "3.1.10"
---

Parses the value of a package dependency field (`Depends`, `Requires`, `depends`, ...) into a
structure: groups of alternatives, each alternative a name with an optional version constraint.
`format` says how the text is written, and decides the exact shape of each dependency and the
operator spellings (see DependencyFormats); the options are those of that format only.

**`'debian'`** — a relationship field of the Debian Policy Manual, chapter 7.1 (`Depends`,
`Pre-Depends`, `Recommends`, `Suggests`, `Enhances`, `Breaks`, `Conflicts`, `Provides`,
`Replaces`, `Build-Depends`, ...). Commas separate the entries that must all hold (AND), `|`
separates the alternatives inside an entry (OR). Each alternative is
`name[:arch] [(op version)] [[archs]] [<profiles>]`, in that order, with any whitespace (line
breaks included, as in a multi-line `Depends`) between the parts. The operators are Debian's
`<<`, `<=`, `=`, `>=` and `>>`, kept as written; the obsolete `<` and `>` throw unless
`options.compat` is set, in which case they are read as `<=` and `>=` like dpkg does.
Whitespace-only entries (a trailing comma, `a,, b`) are skipped, as dpkg does. The
`${substvars}` of source `debian/control` files are not supported.

**`'rpm'`** — an RPM `Requires` value: capabilities separated by commas and/or whitespace, each
`name [op version]` with `<`, `<=`, `=`, `>=` or `>`; boolean dependencies `(a or b)` give the
alternatives of a group.

**`'arch'`** — an Arch Linux `depends` array or `.PKGINFO` list: entries separated by whitespace
(quotes and surrounding parentheses of a PKGBUILD array are accepted), each `name[op version]`.

**`'alpine'`** — an Alpine `depends` list: entries separated by whitespace, each
`[!]name[op version]` (`!` is a conflict).

**`'pep508'`** — PEP 508 requirements, one per line (as in `requirements.txt` or the
`dependencies` of a `pyproject.toml`): `name[extras] specifiers ; marker`, or `name @ url`.

Every entry that is not valid throws a `SyntaxError` quoting the offending text. Parsing is
linear in the input.

> Available since v3.1.10

## Import

```ts
import { parseDependencies } from '@helpers4/package';
// or, from the all-in-one package (same code, one install):
import { parseDependencies } from 'helpers4/package';
```

## Signature


```ts
parseDependencies<Format extends keyof DependencyFormats>(field: string, format: Format, options: ParseDependenciesOptions<Format>): DependencyGroup<DependencyOf<Format>>[]
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `field` | `string` | The value of a dependency field |
| `format` | `Format` | How the field is written |
| `options` | `ParseDependenciesOptions<Format>` | The options of \`format\`, if it has any |

## Returns

`DependencyGroup<DependencyOf<Format>>[]` — One group of alternatives per entry

## Examples

### Read a Depends field

Commas are AND, `|` is OR inside an entry; each alternative carries its qualifier, version and restrictions.

```ts
parseDependencies('libc6 (>= 2.34), python3:any | python3 (>= 3.8) [amd64], foo <!nocheck>', 'debian')
// => [
//   [{ name: 'libc6', version: { operator: '>=', version: '2.34' } }],
//   [
//     { name: 'python3', arch: 'any' },
//     { name: 'python3', version: { operator: '>=', version: '3.8' }, architectures: ['amd64'] },
//   ],
//   [{ name: 'foo', profiles: [['!nocheck']] }],
// ]
```

### Read a multi-line field and list the package names

Line breaks are plain whitespace, and a trailing comma is tolerated.

```ts
parseDependencies('debhelper-compat (= 13),\n dh-python,\n pkg-config,\n', 'debian').map((group) => group[0].name)
// => ['debhelper-compat', 'dh-python', 'pkg-config']
```

### Reject an invalid field

A fragment that is not valid throws a SyntaxError that quotes it.

```ts
parseDependencies('libc6 (>= 2.34', 'debian')
// => throws SyntaxError: parseDependencies: unexpected "(>= 2.34" in "libc6 (>= 2.34" ...
```

### Read the obsolete < and > of old packages

They are refused by default; compat mode reads them as dpkg does, <= and >=.

```ts
parseDependencies('libfoo (< 2)', 'debian', { compat: true })
// => [[{ name: 'libfoo', version: { operator: '<=', version: '2' } }]]
```

### Read an RPM Requires, with an alternative

Boolean dependencies (a or b) become the alternatives of a group.

```ts
parseDependencies('glibc >= 2.28, (nginx or httpd)', 'rpm')
// => [[{ name: 'glibc', version: { operator: '>=', version: '2.28' } }], [{ name: 'nginx' }, { name: 'httpd' }]]
```

### Read a PKGBUILD depends array

Quotes and the surrounding parentheses of the array are accepted.

```ts
parseDependencies("('glibc>=2.38' bash)", 'arch')
// => [[{ name: 'glibc', version: { operator: '>=', version: '2.38' } }], [{ name: 'bash' }]]
```

### Read an Alpine depends list, with a conflict

A leading ! marks a package that must not be installed.

```ts
parseDependencies('musl>=1.2 !openrc', 'alpine')
// => [[{ name: 'musl', version: { operator: '>=', version: '1.2' } }], [{ name: 'openrc', conflict: true }]]
```

### Read Python requirements

Extras, specifiers and the environment marker are separated; the marker is kept as written.

```ts
parseDependencies('requests[security]>=2.8,<3 ; python_version < "3.12"', 'pep508')
// => [[{ name: 'requests', extras: ['security'], specifiers: [{ operator: '>=', version: '2.8' }, { operator: '<', version: '3' }], marker: 'python_version < "3.12"' }]]
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

### `ParseDependenciesOptions`

The extra arguments of parseDependencies: the options of the format if it has some, none
otherwise.

```ts
type ParseDependenciesOptions<Format extends DependencyFormat> = DependencyFormats[Format]['options'] extends undefined
  ? []
  : [options?: DependencyFormats[Format]['options']]
```

### `DependencyFormat`

The formats of dependency fields: `'debian'`, `'rpm'`, `'arch'`, `'alpine'` and `'pep508'`.

```ts
type DependencyFormat = keyof DependencyFormats
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/package/parseDependencies.ts)
