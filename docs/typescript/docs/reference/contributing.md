---
sidebar_label: Contributing
---

# Contributing to TypeScript Helpers

Thank you for your interest in contributing to **@helpers4/typescript**! We want to make the process as easy and transparent as possible.

## Getting Started

1. **Fork** the [repository](https://github.com/helpers4/typescript)
2. **Clone** your fork locally
3. **Install dependencies**: `pnpm install`
4. **Create a branch**: `git checkout -b feat/description`

## Development

```bash
# Install dependencies
pnpm install

# Run tests
pnpm test

# Build
pnpm build

# Type check
pnpm typecheck
```

## Adding a New Helper

1. Create the helper function in the appropriate `helpers/<category>/` directory
2. Export it from the category's `index.ts`
3. Add comprehensive tests with edge cases
4. Aim for 100% line coverage and high mutation score

## Pull Request Process

1. Use [Conventional Commits](https://www.conventionalcommits.org/):
   - `feat:` — New helper or feature
   - `fix:` — Bug fix
   - `docs:` — Documentation change
   - `test:` — Test addition or fix
   - `refactor:` — Code refactoring
2. Ensure all tests pass
3. Update documentation if needed
4. Open a PR with a clear description

## Code Style

- TypeScript strict mode
- Descriptive variable and function names
- JSDoc comments on exported functions
- Follow existing code patterns

## Reporting Issues

- **Search first** — Check [existing issues](https://github.com/helpers4/typescript/issues) to avoid duplicates
- **Clear description** — Include steps to reproduce, expected vs. actual behavior
- **Minimal example** — Provide a small code sample if possible

## Code of Conduct

This project follows the helpers4 [Code of Conduct](https://github.com/helpers4/.github/blob/main/CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.
