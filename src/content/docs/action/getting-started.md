---
title: Getting Started
sidebar:
  order: 1
---

Welcome to the **helpers4 GitHub Actions** collection! Reusable actions for common development workflows.

## What are GitHub Actions?

GitHub Actions enables you to create custom workflows that run automatically on GitHub events. Workflows are made up of actions - reusable units of code that perform specific tasks.

## Available Actions

| Action | Use it with | Description |
|--------|-------------|-------------|
| [action-release](./actions/action-release/) | `helpers4/action-release@v0` | Release a TypeScript, Rust or mixed repository in one step |
| [conventional-commits](./actions/conventional-commits/) | `helpers4/action/conventional-commits@v1` | Validate commit messages against the [Conventional Commits](https://www.conventionalcommits.org/) specification |
| [dispatch-with-fallback](./actions/dispatch-with-fallback/) | `helpers4/action/dispatch-with-fallback@v1` | Dispatch a `repository_dispatch` event via a GitHub App token, with an optional fallback identity retried on failure |
| [pr-status-comment](./actions/pr-status-comment/) | `helpers4/action/pr-status-comment@v1` | Post or update a single sticky PR comment summarizing job statuses as a table |
| [setup-pnpm](./actions/setup-pnpm/) | `helpers4/action/setup-pnpm@v1` | Set up Node.js + pnpm, optionally installing dependencies |

Note the two shapes of `uses:`: most actions are folders of the [helpers4/action](https://github.com/helpers4/action) repository (`helpers4/action/<name>@v1`); an action published on the GitHub Marketplace has its own repository (`helpers4/<name>@v0`). See [Two kinds of repository](./reference/repositories/).

## Quick Start

### 1. Basic Usage

Add to your workflow file (`.github/workflows/commit-check.yml`):

```yaml
name: Commit Validation
on: [pull_request]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - uses: helpers4/action/conventional-commits@v1
```

### 2. With Configuration

```yaml
- uses: helpers4/action/conventional-commits@v1
  with:
    # Allowed commit types (default: feat, fix, chore, etc.)
    types: 'feat,fix,chore,refactor'
    
    # Require scope (default: false)
    requireScope: false
    
    # Custom error message
    errorMessage: 'Please follow Conventional Commits format'
```

### 3. Full Workflow Example

```yaml
name: PR Validation

on:
  pull_request:
    types: [opened, synchronize, reopened]

jobs:
  validate-commits:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Validate commit messages
        uses: helpers4/action/conventional-commits@v1
        with:
          types: 'feat,fix,chore,refactor,docs,style,test,perf'
          requireScope: false

      - name: Comment on PR if failed
        if: failure()
        uses: actions/github-script@v7
        with:
          script: |
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: '❌ Commit messages must follow Conventional Commits format'
            })
```

## Common Patterns

### CI/CD Integration

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      # Validate commits first
      - uses: helpers4/action/conventional-commits@v1
      
      # Then run build
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci && npm run build
```

### Release Workflow

```yaml
on:
  workflow_dispatch:

permissions: {}

jobs:
  release:
    runs-on: ubuntu-latest
    environment: release
    permissions: { contents: write, id-token: write }
    steps:
      - uses: actions/checkout@v7
        with: { fetch-depth: 0, persist-credentials: false }
      - uses: actions/setup-node@v7
        with: { node-version: 24 }
      - uses: helpers4/action-release@v0
        with:
          app-id: ${{ vars.HELPERS4_BOT_ID }}
          app-key: ${{ secrets.HELPERS4_BOT_KEY }}
```

See [action-release](./actions/action-release/) for the one-time setup (GitHub App, trusted publishers).

## Versioning

- Pin to major: `helpers4/action/conventional-commits@v1` (monorepo), `helpers4/action-release@v0` (own repository)
- Pin to a release: `helpers4/action/conventional-commits@v1.2.3`
- Pin to a commit SHA for the strongest guarantee, and let Dependabot keep it current

## Marketplace

Browse all helpers4 actions on [GitHub Marketplace](https://github.com/marketplace?type=actions&query=helpers4)

## Next Steps

- Explore [Actions Documentation](./actions/conventional-commits)
- Check the [GitHub Repository](https://github.com/helpers4/action)

## Support

- GitHub Issues: [helpers4/action](https://github.com/helpers4/action/issues)

## License

LGPL-3.0 — See [LICENSE](https://github.com/helpers4/action/blob/main/LICENSE) for details.
