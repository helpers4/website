---
title: Getting Started
sidebar:
  order: 1
---

:::info[Documented version]
**[v3.1.1](https://github.com/helpers4/typescript/releases/tag/v3.1.1)** — [npm](https://www.npmjs.com/package/@helpers4/all/v/3.1.1) · [Changelog](../reference/changelog) · Upgrading from v2? See the [migration guide](../reference/migration/)
:::

## Installation

Prefer one package that always has every category available? Install `helpers4` — every
category ships as a real dependency, so a single install gets you all of them, no
follow-up installs needed:

```bash
pnpm add helpers4
# or: npm install helpers4

# Pin to a specific version:
# pnpm add helpers4@3.1.1
```

```typescript
import { chunk } from 'helpers4/array';
import { capitalize } from 'helpers4/string';
```

Or install only the categories you need, as their own scoped packages — the smallest
possible dependency tree, and the best choice for tree-shaking:

```bash
pnpm add @helpers4/array @helpers4/date @helpers4/url
```

**Both forms resolve to the exact same code** — `helpers4/<category>` re-exports
`@helpers4/<category>` verbatim, so pick whichever fits your project.

:::note
`@helpers4/all` also exists, as a documentation-only bundle (`peerDependencies`, no code of
its own) — prefer `helpers4` above, which installs everything in one step with no
follow-up peer-dependency installs to remember.
:::

Available packages: `@helpers4/array`, `@helpers4/ci`, `@helpers4/color`, `@helpers4/commit`, `@helpers4/date`, `@helpers4/function`, `@helpers4/guard`, `@helpers4/id`, `@helpers4/map`, `@helpers4/markdown`, `@helpers4/node`, `@helpers4/number`, `@helpers4/object`, `@helpers4/observable`, `@helpers4/promise`, `@helpers4/set`, `@helpers4/string`, `@helpers4/structure`, `@helpers4/type`, `@helpers4/url`, `@helpers4/version`.

## Quick Start

```typescript
import { chunk, unique } from '@helpers4/array';
import { compare } from '@helpers4/date';
import { debounce } from '@helpers4/function';

const chunks = chunk([1, 2, 3, 4, 5], 2);
const uniqueItems = unique([1, 1, 2, 2, 3]);
const diff = compare(new Date('2024-01-01'), new Date('2024-12-31'));
const debouncedFn = debounce(() => console.log('done!'), 300);
```

All imports are tree-shakable — your bundler will only include the functions you actually use.
The same example works unchanged with the `helpers4` package: swap `@helpers4/array` for
`helpers4/array`, `@helpers4/date` for `helpers4/date`, and so on.

## CommonJS

```javascript
const { chunk } = require('@helpers4/array');
```

## Resolving Name Conflicts

Some helpers share the same name across categories (`compact`, `compare`, `difference`, `shallowEquals`). When you need two of them in the same file, rename at the import site using `as` — suffix with `4{category}`:

```typescript
import { compact as compact4array } from '@helpers4/array';
import { compact as compact4object } from '@helpers4/object';

import { compare as compare4date } from '@helpers4/date';
import { compare as compare4version } from '@helpers4/version';
```

See the full list and resolution patterns in [Name Conflicts](./reference/naming-conflicts/).



Ensure your `tsconfig.json` targets modern JavaScript:

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

## TypeScript Support

All helpers are fully typed with TypeScript and support strict mode:

```typescript
import { deepMerge } from '@helpers4/object';

// Full type inference
const result = deepMerge({ a: 1 }, { b: 2 });
// result is { a: number, b: number }
```

## Runtime Compatibility

| Runtime | Support | Notes |
|---------|:-------:|-------|
| Browser | `ES2022+` | Chrome 93+, Firefox 90+, Safari 15+, Edge 93+ |
| Frameworks | ✅ | React, Vue, Svelte, Angular, and more |
| Node.js | `>=26.0.0` | |
| Deno | ✅ | |
| Bun | ✅ | |
## Quality Standards

Every helper ships with:
- **100% code coverage** (lines, branches, functions, statements)
- **Property-based tests** (fast-check) — invariants validated against thousands of random inputs
- **Contract tests** — formal behavioral guarantees
- **Boundary tests** — edge values and limit conditions covered explicitly
- **Security edge case tests** — inputs like prototype pollution or injected keys
- **Mutation testing** (Stryker) — >90% score; [view dashboard](https://dashboard.stryker-mutator.io/reports/github.com/helpers4/typescript/v3.1.1)
- **Benchmarks** (Vitest Bench) — performance tracked per build
- **Dependency security audit** — `pnpm audit` on every PR and release
- **OpenSSF Scorecard** — [view report](https://securityscorecards.dev/viewer/?uri=github.com/helpers4/typescript)

## Next Steps

- Browse the [Categories](./categories/array/)
- View the [GitHub Repository](https://github.com/helpers4/typescript)

## Contributing

Found a bug? Want to add a helper? Check out the [GitHub repository](https://github.com/helpers4/typescript) for contribution guidelines.

## License

LGPL-3.0 — See [LICENSE](https://github.com/helpers4/typescript/blob/main/LICENSE) for details.
