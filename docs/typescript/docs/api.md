---
sidebar_position: 1
title: API Reference
---

# API Reference

## Overview

The TypeScript Helpers library provides 12+ categories of utilities. Each category contains specialized, tree-shakable functions.

## Categories

:::tip
Each category can be imported separately for optimal bundling:
```typescript
import { chunk, flatten } from '@helpers4/array';
```
:::

### array
Array manipulation utilities like `chunk`, `unique`, `flatten`, `intersection`, `difference`, etc.

### date
Date operations including `compare`, `format`, `add`, `subtract`, `startOfDay`, `endOfDay`, etc.

### function
Function utilities like `debounce`, `throttle`, `memoize`, `pipe`, `compose`, `once`, etc.

### number
Number helpers such as `clamp`, `random`, `roundTo`, `between`, `isInteger`, etc.

### object
Object utilities including `deepClone`, `deepMerge`, `deepCompare`, `pick`, `omit`, `values`, etc.

### observable
RxJS Observable operators and utilities for reactive programming.

### promise
Promise utilities like `all`, `race`, `timeout`, `retry`, `parallel`, etc.

### string
String manipulation including `capitalize`, `kebabCase`, `camelCase`, `reverse`, `truncate`, etc.

### type
Type guards and utilities for runtime type checking.

### url
URL parsing and manipulation utilities.

### version
SemVer version utilities for parsing, comparing, and incrementing semantic versions.

### math
Mathematical utilities and functions.

## API Documentation

For detailed API documentation, browse the categories above or visit [GitHub](https://github.com/helpers4/typescript).

## Contributing

Found an issue? Want to add a utility? Contributions welcome on [GitHub](https://github.com/helpers4/typescript)!
