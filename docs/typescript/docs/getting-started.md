---
sidebar_position: 1
title: Getting Started
---

# Getting Started with TypeScript Helpers

Welcome to the **@helpers4** TypeScript utilities library! This guide will help you get started with the library.

## Installation

Install the package from npm:

```bash
npm install @helpers4/all
# or
pnpm add @helpers4/all
# or
yarn add @helpers4/all
```

Or install specific categories:

```bash
# Only array utilities
pnpm add @helpers4/array

# Only date utilities
pnpm add @helpers4/date

# Mix and match!
pnpm add @helpers4/object @helpers4/string @helpers4/url
```

## Quick Start

Import and use functions:

```typescript
import { chunk, unique } from '@helpers4/array';
import { compare, format } from '@helpers4/date';
import { debounce } from '@helpers4/function';

// Array utilities
const chunks = chunk([1, 2, 3, 4, 5], 2);
const unique_items = unique([1, 1, 2, 2, 3]);

// Date utilities
const diff = compare(new Date('2024-01-01'), new Date('2024-12-31'));
const formatted = format(new Date(), 'YYYY-MM-DD');

// Function utilities
const debouncedFn = debounce(() => console.log('done!'), 300);
```

## Tree-shaking

All helpers are designed to be tree-shakable. When you import only what you need, your bundler will eliminate unused code:

```typescript
// Only chunk and unique are included in your bundle
import { chunk, unique } from '@helpers4/array';
```

## Categories

Explore helpers by category:

- **[Array](./categories/array.md)** - Array manipulation: chunk, unique, intersection, flatten, etc.
- **[Date](./categories/date.md)** - Date operations: compare, format, add, subtract, etc.
- **[Function](./categories/function.md)** - Function utilities: debounce, throttle, memoize, etc.
- **[Number](./categories/number.md)** - Number helpers: clamp, random, roundTo, etc.
- **[Object](./categories/object.md)** - Object utilities: deepClone, deepMerge, deepCompare, etc.
- **[Observable](./categories/observable.md)** - RxJS Observable operators
- **[Promise](./categories/promise.md)** - Promise utilities: all, race, timeout, etc.
- **[String](./categories/string.md)** - String manipulation: capitalize, kebabCase, etc.
- **[Type](./categories/type.md)** - Type guards and utilities
- **[URL](./categories/url.md)** - URL parsing and manipulation
- **[Version](./categories/version.md)** - SemVer utilities: parse, compare, increment

## TypeScript Support

All helpers are fully typed with TypeScript and support strict mode:

```typescript
import { deepMerge } from '@helpers4/object';

// Full type inference
const result = deepMerge({ a: 1 }, { b: 2 });
// result is { a: number, b: number }
```

## Browser Support

- Modern browsers (ES2022+)
- Node.js 20+
- All major frameworks (React, Vue, Svelte, Angular, etc.)

## Next Steps

- Browse the [API Reference](./api)
- Check out [Examples](./examples)
- View the [GitHub Repository](https://github.com/helpers4/typescript)

## Contributing

Found a bug? Want to add a helper? Check out the [GitHub repository](https://github.com/helpers4/typescript) for contribution guidelines.

## License

MIT License - See [LICENSE](https://github.com/helpers4/typescript/blob/main/LICENSE) for details.
