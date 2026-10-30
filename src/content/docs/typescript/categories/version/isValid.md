---
title: "isValid"
sidebar:
  label: "isValid"
description: "Whether `version` is a valid version in the given `scheme`."
version: "3.1.10"
---

Whether `version` is a valid version in the given `scheme`. Never throws: any input that is
not valid, a non-string included, gives `false`.

**`'semver'`** (default) — SemVer 2.0.0, strictly: `MAJOR.MINOR.PATCH` with no leading zeros, an
optional `-prerelease` (numeric identifiers without leading zeros) and an optional `+build`.
Unlike parse, which reads anything, and unlike compare, a leading `v` is refused
by default (`v1.2.3` is a git tag, not a version; see IsValidOptions.prefix to accept or
require it), and so are `1.2` and `1.2.3.4`.

**`'gentoo'`**, **`'debian'`**, **`'rpm'`**, **`'pacman'`**, **`'pep440'`** — whether parse
accepts it (these schemes throw on invalid input, so their grammar is the one `parse` documents).

**`'maven'`** — any non-empty string: Maven reads every text as a version.

> Available since v3.1.9

## Import

```ts
import { isValid } from '@helpers4/version';
// or, from the all-in-one package (same code, one install):
import { isValid } from 'helpers4/version';
```

## Signature


```ts
isValid(version: unknown, scheme: VersionScheme, options: IsValidOptions): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `version` | `unknown` | The value to check |
| `scheme` | `VersionScheme` | Which version scheme to validate against\. Defaults to \`'semver'\`\. |
| `options` | `IsValidOptions` | The treatment of a leading \`v\` — see IsValidOptions |

## Returns

`boolean` — `true` if `version` is a valid version

## Examples

### Validate a release version strictly

Unlike parse, which reads anything, isValid refuses a v prefix, missing parts and leading zeros.

```ts
isValid('1.2.3')    // => true
isValid('v1.2.3')   // => false
isValid('garbage')  // => false
```

### Check a git tag

prefix: 'require' demands the v of a tag; 'allow' accepts both spellings.

```ts
isValid('v1.2.3', 'semver', { prefix: 'require' }) // => true
isValid('1.2.3', 'semver', { prefix: 'require' })  // => false
```

### Validate in another scheme

Debian versions are checked against dpkg's grammar.

```ts
isValid('1:2.30~rc1-3', 'debian') // => true
isValid('1.0_1', 'debian')        // => false
```

## Related Types

### `IsValidOptions`

Options for isValid.

```ts
interface IsValidOptions {
  prefix?: "require" | "forbid" | "allow";
}
```

### `VersionScheme`

Identifies which version scheme parse/compare should use to interpret a
version string. Defaults to `'semver'` everywhere it's accepted.

```ts
type VersionScheme = 'semver' | 'gentoo' | 'debian' | 'rpm' | 'pacman' | 'pep440' | 'maven'
```

:::caution[Name conflict]
A helper named `isValid` also exists in [`@helpers4/date`](../date/isvalid/). If you need both in the same file, rename at import with `as`:

```ts
import { isValid as isValid4version } from '@helpers4/version';
import { isValid as isValid4date } from '@helpers4/date';
```

See [Name Conflicts](../../reference/naming-conflicts/) for the full resolution guide.
:::

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/version/isValid.ts)
