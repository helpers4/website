---
title: "Stryker preset"
sidebar:
  label: "Stryker"
  order: 5
version: "3.1.12"
---

```js
// stryker.config.mjs
import { strykerConfig } from '@helpers4/presets/stryker';

export default {
  ...strykerConfig({ dashboardProject: 'github.com/owner/repo' }),
  thresholds: { break: 60, high: 90, low: 70 }
};
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/tree/main/presets)
