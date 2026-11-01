---
title: "EditorConfig and git-cliff preset"
sidebar:
  label: "EditorConfig and git-cliff"
  order: 7
version: "3.1.12"
---

Neither tool can read a file from a package, so these two are starting points to copy once:

```bash
cp node_modules/@helpers4/presets/editorconfig .editorconfig
cp node_modules/@helpers4/presets/cliff.toml cliff.toml   # then replace OWNER/REPO
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/tree/main/presets)
