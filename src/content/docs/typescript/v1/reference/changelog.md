---
title: Changelog — v1 (archived)
sidebar:
  label: Changelog
  order: 2
---

v1 predates the current monorepo and its auto-generated, unified changelog. Each of the four
packages was released independently from its own repository — this timeline is reconstructed
from each package's own `CHANGELOG.md` as published on npm.

## 2022-10-27 — `@helpers4/promise` 1.1.0

Added `truthyPromiseOrThrow`, `falsyPromiseOrThrow`, and `consoleLogPromise`.

## 2022-09-05 — `@helpers4/promise` 1.0.1

Patch release, no functional change.

## 2022-09-04 — `@helpers4/observable` 1.0.1

Patch release, no functional change.

## 2022-09-03 — `@helpers4/string` 1.0.1, `@helpers4/url` 1.0.1

Patch releases, no functional change.

## 2022-09-03 — Initial release

First publish of all four packages:

| Package | Function(s) |
|---------|-------------|
| `@helpers4/observable` | `combine` |
| `@helpers4/promise` | `meaningPromiseOrThrow` |
| `@helpers4/string` | `labelize` |
| `@helpers4/url` | `removeEndingSlash`, `addLeadingSlash`, `extractPureURI` |
