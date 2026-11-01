---
title: "TypeScript preset"
sidebar:
  label: "TypeScript"
  order: 1
version: "3.1.12"
---

Pick `lib.json` (published library: declarations) or `app.json` (application: DOM, JSX, `noEmit`). Both
extend `base.json` (strict, unused code reported, bundler resolution).

```jsonc
// tsconfig.json
{
  "extends": "@helpers4/presets/tsconfig/lib.json",
  "include": ["src"]
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/tree/main/presets)
