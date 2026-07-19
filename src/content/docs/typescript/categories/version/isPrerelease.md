---
title: "isPrerelease"
sidebar:
  label: "isPrerelease"
---

Returns `true` when the version string has a prerelease suffix
(i.e. contains a `-` after the core `MAJOR.MINOR.PATCH`).

> Available since v2.0.0

## Import

```ts
import { isPrerelease } from '@helpers4/version';
```

## Signature


```ts
isPrerelease(version: string): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `version` | `string` | A semantic version string \(e\.g\. \`'2\.0\.0\-alpha\.1'\`, \`'1\.0\.0'\`\)\. |

## Returns

`boolean` — `true` if the version is a prerelease, `false` otherwise.

## Examples

### Detect a prerelease version

Returns true for any version string that contains a prerelease suffix.

```ts
isPrerelease('2.0.0-alpha.1') // true
isPrerelease('1.0.0-rc.0')   // true
```

### Stable versions return false

Returns false when the version has no prerelease suffix.

```ts
isPrerelease('1.0.0') // false
isPrerelease('2.1.3') // false
```

### Accept a ParsedVersion object

Works with the result of parse() — checks the prerelease array instead of string matching.

```ts
isPrerelease(parse('2.0.0-alpha.1')) // true
isPrerelease(parse('1.0.0'))         // false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/version/isPrerelease.ts)
