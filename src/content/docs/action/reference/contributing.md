---
title: "Contributing to GitHub Actions"
sidebar:
  label: "Contributing"
---

# Contributing to GitHub Actions

Thank you for your interest in contributing to **helpers4 GitHub Actions**! We want to make the process as easy and transparent as possible.

## Getting Started

1. **Fork** the [repository](https://github.com/helpers4/action)
2. **Clone** your fork locally
3. **Create a branch**: `git checkout -b feat/description`

## Development

Each action lives in its own directory:

```
conventional-commits/
├── action.yml       # Action manifest
├── scripts/         # Action scripts
└── README.md        # Action documentation
```

## Pull Request Process

1. Use [Conventional Commits](https://www.conventionalcommits.org/):
   - `feat:` — New action or enhancement
   - `fix:` — Bug fix
   - `docs:` — Documentation change
   - `test:` — Test addition or fix
2. Ensure the action works correctly
3. Update documentation if needed
4. Open a PR with a clear description

## Reporting Issues

- **Search first** — Check [existing issues](https://github.com/helpers4/action/issues) to avoid duplicates
- **Clear description** — Include the action name, workflow context, and steps to reproduce
- **Logs** — Attach relevant GitHub Actions workflow logs if applicable

## Code of Conduct

This project follows the helpers4 [Code of Conduct](https://github.com/helpers4/.github/blob/main/CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.
