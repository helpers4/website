---
title: "ParsedVersion"
sidebar:
  label: "ParsedVersion"
description: "A version parsed according to SemVer 2.0.0 — alias of ParsedSemVerVersion, kept under this name for backward compatibil…"
version: "3.1.1"
---

A version parsed according to SemVer 2.0.0 — alias of ParsedSemVerVersion, kept under
this name for backward compatibility (public API since 2.0.0, well before Gentoo/Portage
support existed). Use AnyParsedVersion to accept a parsed version in any supported
scheme, e.g. when writing scheme-agnostic code like stringify or isPrerelease.

> Available since v2.0.0

## Import

```ts
import type { ParsedVersion } from '@helpers4/version';
// or, from the all-in-one package (same code, one install):
import type { ParsedVersion } from 'helpers4/version';
```

## Type Definition

```ts
type ParsedVersion = ParsedSemVerVersion
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/version/types.ts)
