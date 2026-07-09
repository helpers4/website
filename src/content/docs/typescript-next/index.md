---
title: Helpers 4 TypeScript — v3 (alpha)
sidebar:
  label: TypeScript v3
  order: 0
---

import { Badge } from '@astrojs/starlight/components';

<Badge text="v3 alpha — API may still change" variant="tip" />

Looking for the stable release? → **[TypeScript v2](/typescript/)**

Production-ready TypeScript utility functions — modular, strictly typed, exhaustively tested.

## Quick Links

- **[Get Started](./getting-started)** — Installation and first import
- **[Browse Categories](./categories/array)** — 241 helpers across 17 categories
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

## Breaking changes vs v2

v3 focuses exclusively on breaking changes that could not land in a v2 minor release:

| Change | Details |
|---|---|
| **Remove deprecated symbols** | `isEmpty`, `safeDate`, `dateToISOString`, `daysDifference`, `deepClone`, `deepMerge` are all removed — use their replacements |
| **Category rename: `type` → `guard`** | `@helpers4/type` becomes `@helpers4/guard` — content is runtime type guards (`isString`, `isNull`, …) |
| **New `type` category** | Pure compile-time utility types (`DeepPartial`, `Brand`, `Prettify`, `UnionToIntersection`, `DeepGet`, `DeepSet`, `ParsePath`, …) |
| **Promise helpers** | `truthyPromiseOrThrow`, `falsyPromiseOrThrow`, `meaningPromiseOrThrow` — unsound `as T` casts reviewed |

A full migration guide from v2 → v3 will be published alongside the first stable v3 release. Follow progress in the [GitHub repository](https://github.com/helpers4/typescript).

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
