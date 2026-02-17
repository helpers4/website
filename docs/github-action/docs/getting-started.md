---
sidebar_position: 1
title: Getting Started
---

# Getting Started with helpers4 Actions

Welcome to the **helpers4 GitHub Actions** collection! Reusable actions for common development workflows.

## What are GitHub Actions?

GitHub Actions enables you to create custom workflows that run automatically on GitHub events. Workflows are made up of actions - reusable units of code that perform specific tasks.

## Available Actions

### Conventional Commits Validator

Validate commit messages against the [Conventional Commits](https://www.conventionalcommits.org/) specification.

**Features:**
- ✅ Enforce commit message format
- ✅ Custom error messages
- ✅ Scope validation
- ✅ Type enforcement

[Full Documentation →](./actions/conventional-commits)

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

jobs:
  validate-and-release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - uses: helpers4/action/conventional-commits@v1

      - name: Publish release
        # Your release logic here
```

## Versioning

- Use latest: `helpers4/action/conventional-commits@latest`
- Pin to major: `helpers4/action/conventional-commits@v1`
- Pin to specific: `helpers4/action/conventional-commits@v1.2.3`

## Marketplace

Browse all helpers4 actions on [GitHub Marketplace](https://github.com/marketplace?type=actions&query=helpers4)

## Next Steps

- Explore [Actions Documentation](./actions)
- View [examples](./examples)
- Check the [GitHub Repository](https://github.com/helpers4/action)

## Support

- GitHub Issues: [helpers4/action](https://github.com/helpers4/action/issues)
- Discussions: [GitHub Discussions](https://github.com/helpers4/action/discussions)

## License

MIT License - See [LICENSE](https://github.com/helpers4/action/blob/main/LICENSE) for details.
