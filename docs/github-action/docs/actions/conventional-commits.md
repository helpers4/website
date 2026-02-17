---
sidebar_position: 1
---

# Conventional Commits

Validate commit messages against the [Conventional Commits](https://www.conventionalcommits.org/) specification.

## Overview

This GitHub Action ensures all commit messages in your repository follow the Conventional Commits format. This is essential for:
- Automated semantic versioning
- Automatic changelog generation
- Clear commit history
- Better team communication

## Conventional Commits Format

```
type(scope): description

body

footer
```

**Example:**
```
feat(auth): add login with Google OAuth

- Implemented Google OAuth provider
- Added login redirect flow

Closes #123
```

## Installation

Add to your workflow:

```yaml
name: Validate Commits
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

## Configuration

### Basic Options

```yaml
- uses: helpers4/action/conventional-commits@v1
  with:
    # Allowed types (comma-separated)
    types: 'feat,fix,chore,refactor,docs'
    
    # Require scope in commits
    requireScope: false
    
    # Custom error message
    errorMessage: 'Commit message must follow Conventional Commits'
```

### Allowed Commit Types

| Type | Purpose |
|------|---------|
| `feat` | A new feature |
| `fix` | A bug fix |
| `chore` | Build, deps, or tooling |
| `refactor` | Code refactoring |
| `docs` | Documentation |
| `style` | Code style (formatting) |
| `test` | Tests |
| `perf` | Performance |
| `ci` | CI/CD configuration |

### With Scope Requirements

```yaml
- uses: helpers4/action/conventional-commits@v1
  with:
    types: 'feat,fix,chore'
    requireScope: true
```

**Valid:**
- `feat(api): add endpoint`
- `fix(button): remove hover state`

**Invalid:**
- `feat: add endpoint` ❌

## Examples

### Standard CI/CD

```yaml
name: PR Validation

on:
  pull_request:
    types: [opened, synchronize, reopened]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - uses: helpers4/action/conventional-commits@v1
        with:
          types: 'feat,fix,chore,refactor,docs,style,test,perf'
```

### With Automatic Release

```yaml
- uses: helpers4/action/conventional-commits@v1

- name: Create Release
  if: github.event_name == 'push'
  run: npm run release
```

### Custom Error Handling

```yaml
- uses: helpers4/action/conventional-commits@v1
  with:
    errorMessage: |
      ❌ Your commit doesn't follow our convention!
      
      Format: type(scope): description
      
      Types: feat, fix, chore, refactor, docs
      
      Example: feat(auth): add OAuth login
```

## Versioning

- `helpers4/action/conventional-commits@latest` - Latest version
- `helpers4/action/conventional-commits@v1` - Current major version
- `helpers4/action/conventional-commits@v1.2.3` - Specific version

## GitHub Marketplace

Find more helpers4 actions on [GitHub Marketplace](https://github.com/marketplace?type=actions&query=helpers4)

## Troubleshooting

### Action Returns False

Ensure format is correct:
- ❌ `add login feature`
- ✅ `feat: add login feature`

### Scope Not Recognized

Provide scope when required:
- ❌ `feat: add api`
- ✅ `feat(api): add endpoint`

---

[View on GitHub](https://github.com/helpers4/action)
