---
sidebar_position: 2
title: Installation & Setup
---

# Installation & Setup

## NPM Installation

### Full Library

Install all helpers:

```bash
npm install @helpers4/all
```

Or with pnpm (recommended):

```bash
pnpm add @helpers4/all
```

### Individual Packages

Installation by category:

```bash
pnpm add @helpers4/array @helpers4/date @helpers4/function
```

Available packages:

- `@helpers4/array`
- `@helpers4/date`
- `@helpers4/function`
- `@helpers4/math`
- `@helpers4/number`
- `@helpers4/object`
- `@helpers4/observable`
- `@helpers4/promise`
- `@helpers4/string`
- `@helpers4/type`
- `@helpers4/url`
- `@helpers4/version`

## Usage in Different Environments

### ES Modules (Recommended)

```typescript
import { chunk } from '@helpers4/array';
import { debounce } from '@helpers4/function';

const chunks = chunk([1, 2, 3], 2);
const delayed = debounce(() => {}, 300);
```

### CommonJS

```javascript
const { chunk } = require('@helpers4/array');
const { debounce } = require('@helpers4/function');
```

### TypeScript Configuration

Ensure your `tsconfig.json` is configured for modern JavaScript:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "lib": ["ES2022"],
    "strict": true,
    "skipLibCheck": true,
    "esModuleInterop": true
  }
}
```

## Framework Integration

### React

```typescript
import { useCallback } from 'react';
import { debounce } from '@helpers4/function';

export function Search() {
  const handleSearch = useCallback(
    debounce((query) => {
      // API call
    }, 300),
    []
  );

  return <input onChange={(e) => handleSearch(e.target.value)} />;
}
```

### Vue

```vue
<template>
  <input @input="handleSearch" />
</template>

<script setup>
import { ref } from 'vue';
import { debounce } from '@helpers4/function';

const handleSearch = debounce((query) => {
  // API call
}, 300);
</script>
```

### Angular

```typescript
import { Component } from '@angular/core';
import { debounce } from '@helpers4/function';

@Component({
  selector: 'app-search',
  template: `<input (input)="onSearch($event)" />`
})
export class SearchComponent {
  onSearch = debounce((event) => {
    // Handle search
  }, 300);
}
```

## Bundler Configuration

### Vite

No additional configuration needed - Vite handles tree-shaking automatically.

```javascript
// vite.config.js
export default {
  // No special config required
};
```

### Webpack

Ensure tree-shaking is enabled:

```javascript
// webpack.config.js
module.exports = {
  mode: 'production', // Tree-shaking enabled in production
  optimization: {
    usedExports: true,
    sideEffects: false
  }
};
```

### Rollup

```javascript
// rollup.config.js
export default {
  input: 'src/index.js',
  external: [],
  output: {
    file: 'bundle.js',
    format: 'esm'
  }
};
```

## Troubleshooting

### "Cannot find module" error

Ensure you've installed the correct package name:

```bash
# ❌ Wrong
pnpm add helpers4

# ✅ Correct
pnpm add @helpers4/array
```

### TypeScript errors

Update your TypeScript version:

```bash
pnpm add -D typescript@latest
```

### Tree-shaking not working

Check bundler configuration:
- Use ES modules (import/export)
- Set `"sideEffects": false` in package.json
- Use production build mode

## Next Steps

- Explore the [API Reference](./api)
- Check out specific categories:
  - [Array Utils](./categories/array)
  - [Date Utils](./categories/date)
  - [Function Utils](./categories/function)

---

**Questions?** Open an issue on [GitHub](https://github.com/helpers4/typescript)
