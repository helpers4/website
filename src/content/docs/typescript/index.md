---
title: Helpers 4 TypeScript
sidebar:
  label: TypeScript
  order: 0
---

Production-ready TypeScript utility functions — modular, strictly typed, exhaustively tested.

## Quick Links

- **[Get Started](./getting-started)** — Installation and first import
- **[Browse Categories](./categories/array)** — 312 helpers across 20 categories
- **[AI & LLM Support](./reference/ai-support)** — DeepWiki Q&A, `llms.txt`, full machine-readable reference
- **[GitHub](https://github.com/helpers4/typescript)** · **[npm](https://www.npmjs.com/package/@helpers4/all)** · **[License (LGPL-3.0)](./legal/license)**

## What is helpers4?

A collection of functional helpers to stop rewriting the same utility code across every project — each function does one thing, does it right, and ships with full type safety and exhaustive tests.

Born from 10 years of recoding the same domain-specific helpers across projects, helpers4 covers the gaps that popular general-purpose toolkits deliberately exclude: dates, URLs, semver, observables, promise guards. The [Philosophy](./reference/philosophy) and the [Radashi comparison](./comparisons/radashi) pages explain the reasoning in detail.

- ✅ **Tree-shakable** — import one function, pay for one function
- ✅ **Framework-agnostic** — React, Vue, Svelte, Angular, or no framework at all
- ✅ **Well-typed** — strict TypeScript, no `any`, full inference
- ✅ **Zero runtime dependencies** — nothing pulled in at runtime
- ✅ **Battle-tested** — 100% coverage, >90% mutation score, property-based · contract · boundary · security tests
- ✅ **Enterprise-grade** — formal LGPL-3.0 license, audit-ready, predictable at scale
- ✅ **AI-ready** — exhaustive contracts make every function safe to call from generated or agentic code

## What's new in V3?

V3 is a cleanup-and-growth release: two categories reorganized for clarity, 25+ new helpers,
zero logic changes for anyone using the replacements below.

| | |
|---|---|
| **⚠️ Breaking: `type` → `guard`** | Runtime type guards (`isString`, `isArray`, `isDefined`, …) moved to a new `@helpers4/guard` package; `@helpers4/type` now only holds compile-time-only utility types. See the [migration guide](https://github.com/helpers4/typescript/blob/main/MIGRATION.md) |
| **⚠️ Breaking: 6 removed aliases** | `deepMerge`/`deepClone`/`daysDifference`/`safeDate`/`dateToISOString`/`type.isEmpty` — all had a direct replacement since v1.9.0/v2.0.0, see the [migration guide](https://github.com/helpers4/typescript/blob/main/MIGRATION.md) for the full table |
| **New `color` category** | `hexToRgb`, `rgbToHex`, `hslToRgb`, `rgbToHsl`, `argbToRgb`, plus `isCssColor` in `guard` |
| **25+ new helpers** | `clone`, `flatten`/`unflatten`, `pickBy`/`omitBy`/`unset`/`update`, `parsePropertyPath`, `replaceOrAppend`, `toggle`, `symmetricDifference`, `dedent`, `removeDiacritics`, `unescapeHtml`, `escapeRegExp`, `parseDuration`, `unary`, `isWeakMap`/`isWeakSet`/`isSet`, and more |
| **Mutation testing** | >90% score — tests verified to catch regressions, not just execute — [dashboard](https://dashboard.stryker-mutator.io/reports/github.com/helpers4/typescript/v3.0.4) |
| **Property-based tests** | Invariants validated against thousands of random inputs (fast-check) |
| **Contract tests** | Formal behavioral guarantees for each function |
| **Boundary & security tests** | Edge values and security-sensitive inputs (prototype pollution, injections) |
| **Native API tracking** | Standard JS equivalents documented, not re-implemented |

## Comparisons

Wondering how helpers4 stacks up against other utility libraries? See the [comparisons section](./comparisons/alternatives).

## Name conflicts between categories

Some helpers share the same name across multiple categories — for example, `compact` exists in both `@helpers4/array` and `@helpers4/object` because it is a genuinely different operation on a different data type. When you need both in the same file, use the standard ES module `as` rename:

```ts
import { compact as compact4array } from '@helpers4/array';
import { compact as compact4object } from '@helpers4/object';
```

See the full list in [Name Conflicts](./reference/naming-conflicts).

## Contributing

Found a bug or want to suggest a helper? [Open an issue](https://github.com/helpers4/typescript/issues) on the TypeScript repository.

Want to improve this documentation? Use the **Edit page** link at the bottom of any page, or [open an issue](https://github.com/helpers4/website/issues) on the website repository.
