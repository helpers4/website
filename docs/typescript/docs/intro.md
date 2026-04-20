---
sidebar_position: 0
slug: /
---

# Welcome to TypeScript Helpers

This is the documentation for the **@helpers4/typescript** library - a collection of tree-shakable, framework-agnostic utility functions organized by category.

## Quick Links

- **[GitHub Repository](https://github.com/helpers4/typescript)** - View source code
- **[npm Package](https://www.npmjs.com/package/@helpers4/all)** - Install from npm
- **[API Reference](./categories/array/index.md)** - Complete API documentation
- **[License (LGPL-3.0)](./legal/license)** - What you can and cannot do

## What's new in V2?

V2 is a major milestone for the library:

- **New documentation website** — you're reading it
- **40+ new helpers** across every category (array, date, promise, type, object…)
- **New `math` category** — starting with UUID v7 generation
- **100% test coverage enforced** — lines, branches, functions, statements, no exceptions
- **Mutation testing** (Stryker) — ensures tests actually catch regressions
- **Property-based testing** (fast-check) — invariants verified against thousands of random inputs
- **Native API tracking** — functions that are now standard JavaScript are documented as such rather than re-implemented

## What is helpers4?

helpers4 provides modular, production-ready utility functions for TypeScript/JavaScript projects:

- ✅ **Tree-shakable** - Only import what you use
- ✅ **Framework-agnostic** - Works with any JS framework (or no framework)
- ✅ **Well-typed** - Full TypeScript support with strict mode
- ✅ **Zero runtime dependencies** - Lightweight and self-contained
- ✅ **Battle-tested** - 100% line coverage and >90% mutation score (Stryker)

## helpers4 vs Radashi

helpers4 and [radashi](https://radashi.js.org) are **complementary** libraries:

- **radashi** is a general-purpose toolkit of low-level data primitives — sorting, grouping, cloning, picking, mapping over objects and arrays.
- **helpers4** focuses on higher-level, domain-specific utilities — date comparison, URL manipulation, semver parsing, observable combinators, typed promise guards.

In short, radashi gives you building blocks for data structures; helpers4 gives you ready-made solutions for common domain problems. See the [full comparison](./comparisons/radashi) for details.
