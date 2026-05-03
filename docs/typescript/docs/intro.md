---
sidebar_position: 0
slug: /
---

# helpers4 / TypeScript

Production-ready TypeScript utility functions — modular, strictly typed, exhaustively tested.

## Quick Links

- **[Get Started](./getting-started)** — Installation and first import
- **[Browse Categories](./categories/array/index.md)** — 168 helpers across 13 categories
- **[GitHub](https://github.com/helpers4/typescript)** · **[npm](https://www.npmjs.com/package/@helpers4/all)** · **[License (LGPL-3.0)](./legal/license)**

## What is helpers4?

A collection of functional helpers to stop rewriting the same utility code across every project — each function does one thing, does it right, and ships with full type safety and exhaustive tests.

- ✅ **Tree-shakable** — import one function, pay for one function
- ✅ **Framework-agnostic** — React, Vue, Svelte, Angular, or no framework at all
- ✅ **Well-typed** — strict TypeScript, no `any`, full inference
- ✅ **Zero runtime dependencies** — nothing pulled in at runtime
- ✅ **Battle-tested** — 100% coverage, >90% mutation score, property-based · contract · boundary · security tests
- ✅ **Enterprise-grade** — formal LGPL-3.0 license, audit-ready, predictable at scale
- ✅ **AI-ready** — exhaustive contracts make every function safe to call from generated or agentic code

## What's new in V2?

V2 is a major milestone:

| | |
|---|---|
| **40+ new helpers** | Across every category — array, date, promise, type, object… |
| **New `math` category** | Starting with UUID v7 generation |
| **Mutation testing** | >90% score — tests verified to catch regressions, not just execute — [dashboard](https://dashboard.stryker-mutator.io/reports/github.com/helpers4/typescript/v2.0.0-alpha.22) |
| **Property-based tests** | Invariants validated against thousands of random inputs (fast-check) |
| **Contract tests** | Formal behavioral guarantees for each function |
| **Boundary & security tests** | Edge values and security-sensitive inputs (prototype pollution, injections) |
| **Native API tracking** | Standard JS equivalents documented, not re-implemented |
| **New docs site** | You're reading it |

## Comparisons

Wondering how helpers4 stacks up against other utility libraries? See the [comparisons section](./comparisons/alternatives).

## Name conflicts between categories

Some helpers share the same name across multiple categories — for example, `compact` exists in both `@helpers4/array` and `@helpers4/object` because it is a genuinely different operation on a different data type. When you need both in the same file, use the standard ES module `as` rename:

```ts
import { compact as compact4array } from '@helpers4/array';
import { compact as compact4object } from '@helpers4/object';
```

See the full list in [Name Conflicts](./reference/naming-conflicts).
