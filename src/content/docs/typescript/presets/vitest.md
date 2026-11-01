---
title: "Vitest preset"
sidebar:
  label: "Vitest"
  order: 4
version: "3.1.12"
---

File lists are options, not something to merge: `mergeConfig` concatenates arrays.

```ts
// vitest.config.ts
import { defineConfig, mergeConfig } from 'vitest/config';
import { vitestConfig } from '@helpers4/presets/vitest';

export default mergeConfig(
  vitestConfig({ coverage: 100, include: ['src/**/*.test.ts'] }),
  defineConfig({ test: { globals: false } })
);
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/tree/main/presets)
