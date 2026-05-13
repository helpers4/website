---
title: "GitHub Actions — helpers4"
sidebar:
  order: 0
---

# GitHub Actions — helpers4

Reusable GitHub Actions for consistent, automated workflows across your repositories.

## Quick Links

- **[Browse Actions](./actions/conventional-commits)** — All available actions
- **[GitHub](https://github.com/helpers4/action)** · **[Marketplace](https://github.com/marketplace?type=actions&query=helpers4)** · **[License (LGPL-3.0)](./legal/license)**

## Available Actions

| Action | Description |
|--------|-------------|
| [conventional-commits](./actions/conventional-commits) | Validate commit messages against the Conventional Commits specification |

## Usage

```yaml
- uses: helpers4/action/conventional-commits@v1
  with:
    types: 'feat|fix|docs|refactor|test|chore'
    require-scope: false
```

## License

LGPL-3.0 — See [LICENSE](./legal/license) for details.
