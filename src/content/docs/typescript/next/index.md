---
title: Helpers 4 TypeScript
sidebar:
  label: TypeScript (next)
  order: 0
---

:::caution[Preview — may be stale]
This reflects the last alpha build before that line shipped as stable — no newer prerelease has
been published yet. Looking for the current library? → **[TypeScript (latest)](/typescript/)**
:::

Production-ready TypeScript utility functions — modular, strictly typed, exhaustively tested.

## Quick Links

- **[Get Started](./getting-started)** — Installation and first import
- **[Browse Categories](./categories/array)** — 249 helpers across 18 categories
- **[Ask AI (DeepWiki)](https://deepwiki.com/helpers4/typescript)** — free AI-powered Q&A over this repo
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

## What's in v3

| | |
|---|---|
| **`@helpers4/guard`** | Runtime type guards (`isString`, `isNull`, `isDefined`, …) |
| **`@helpers4/type`** | Compile-time-only utility types, zero runtime footprint (`DeepPartial`, `DeepWritable`, `Brand`, `Prettify`, `UnionToIntersection`, `DeepGet`, `DeepSet`, `Nullable`/`Nullish`, `RequiredKeys`/`OptionalKeys`, `PickByValue`/`OmitByValue`, `KeysOfType`, `Maybe`, `ValueOf`) |
| **Prototype pollution hardening** | `object/compact` and `object/pick` silently skip `__proto__`, `constructor`, `prototype` keys |
| **Node.js 26 minimum** | Required for native `Temporal` support — Node 24 works with the `--harmony-temporal` flag |

Follow progress in the [GitHub repository](https://github.com/helpers4/typescript).

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
