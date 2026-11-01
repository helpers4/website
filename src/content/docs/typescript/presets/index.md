---
title: "Presets"
description: "Shared tool configurations of the helpers4 projects: tsconfig, oxlint, oxfmt, Vitest, Stryker, cspell, EditorConfig and git-cliff."
sidebar:
  label: "≡ Overview"
  order: 0
---

:::note[Not a category]
`@helpers4/presets` holds no functions: it ships configuration files that your tools extend.
:::

Shared tool presets of helpers4 projects. Install it as a dev dependency and extend it from each tool's
own configuration; local settings always win.

```bash
pnpm add -D @helpers4/presets
```

The same files are reachable from the unified package as `helpers4/presets/…`.

## Tools

- [TypeScript](./typescript/)
- [oxlint](./oxlint/)
- [oxfmt](./oxfmt/)
- [Vitest](./vitest/)
- [Stryker](./stryker/)
- [cspell](./cspell/)
- [EditorConfig and git-cliff](./editorconfig-and-git-cliff/)

## Versions

`@helpers4/presets` is released with every `@helpers4/*` package, under the same version. A stricter rule
can fail a project's lint or type check: read the changelog before upgrading.

## Source

[View source on GitHub](https://github.com/helpers4/typescript/tree/main/presets)
