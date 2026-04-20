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
- **Mutation testing** (Stryker) — >90% mutation score; tests verified to catch regressions, not just run code — [view live dashboard](https://dashboard.stryker-mutator.io/reports/github.com/helpers4/typescript/main)
- **Property-based testing** (fast-check) — invariants verified against thousands of random inputs
- **Contract tests** — formal behavioral guarantees for each function
- **Boundary tests** — explicit coverage of edge values and limit conditions
- **Security edge cases** — security-sensitive inputs tested directly (prototype pollution, injection patterns, etc.)
- **Dependency security audit** — `pnpm audit` runs on every PR and release
- **Benchmarks** (Vitest Bench) — performance tracked on every build
- **Native API tracking** — functions that are now standard JavaScript are documented as such rather than re-implemented

## What is helpers4?

helpers4 provides modular, production-ready utility functions for TypeScript/JavaScript projects:

- ✅ **Tree-shakable** — Only import what you use
- ✅ **Framework-agnostic** — Works with any JS framework (or no framework)
- ✅ **Well-typed** — Full TypeScript support with strict mode
- ✅ **Zero runtime dependencies** — Lightweight and self-contained
- ✅ **Battle-tested** — 100% coverage, >90% mutation score, property-based + contract + boundary + security tests
- ✅ **Enterprise-grade** — audit-ready security, formal licensing (LGPL-3.0), predictable behavior at scale
- ✅ **AI-ready** — exhaustive test suite (contract tests, boundary tests, property-based tests) makes each function safe to call from generated or agentic code without surprises

## helpers4 vs Radashi

helpers4 and [radashi](https://radashi.js.org) are **complementary** libraries:

- **radashi** is a general-purpose toolkit of low-level data primitives — sorting, grouping, cloning, picking, mapping over objects and arrays.
- **helpers4** focuses on higher-level, domain-specific utilities — date comparison, URL manipulation, semver parsing, observable combinators, typed promise guards.

In short, radashi gives you building blocks for data structures; helpers4 gives you ready-made solutions for common domain problems. See the [full comparison](./comparisons/radashi) for details.
