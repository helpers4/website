---
title: "oxlint preset"
sidebar:
  label: "oxlint"
  order: 2
version: "3.1.12"
---

`strict.json` is the configuration of helpers4/typescript. `app.json` adds the Vitest and accessibility
plugins and reports `perf` as warnings. Both forbid `any` outside test files.

```jsonc
// .oxlintrc.json
{
  "extends": ["./node_modules/@helpers4/presets/oxlint/strict.json"]
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/tree/main/presets)
