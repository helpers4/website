---
title: "Contributing to DevContainer Features"
sidebar:
  label: "Contributing"
---

Thank you for your interest in contributing to **helpers4 DevContainer Features**! We want to make the process as easy and transparent as possible.

## Getting Started

1. **Fork** the [repository](https://github.com/helpers4/devcontainer)
2. **Clone** your fork locally
3. **Create a branch**: `git checkout -b feat/description`

## Development

Each feature lives in its own directory under `src/`:

```
src/
├── angular-dev/
├── git-absorb/
├── local-mounts/
├── package-auto-install/
├── shell-history-per-project/
├── typescript-dev/
└── vite-plus/
```

Each feature has a `devcontainer-feature.json` manifest and an `install.sh` script.

## Testing

Tests are located in the `test/` directory, with a subdirectory per feature:

```bash
# Run tests for a specific feature
cd test/<feature-name>
# Follow the test README for instructions
```

## Pull Request Process

1. Use [Conventional Commits](https://www.conventionalcommits.org/):
   - `feat:` — New feature or enhancement
   - `fix:` — Bug fix
   - `docs:` — Documentation change
   - `test:` — Test addition or fix
2. Ensure tests pass
3. Update documentation if needed
4. Open a PR with a clear description

## Reporting Issues

- **Search first** — Check [existing issues](https://github.com/helpers4/devcontainer/issues) to avoid duplicates
- **Clear description** — Include the feature name, environment info, and steps to reproduce
- **Logs** — Attach relevant DevContainer build logs if applicable

## Code of Conduct

This project follows the helpers4 [Code of Conduct](https://github.com/helpers4/.github/blob/main/CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.
