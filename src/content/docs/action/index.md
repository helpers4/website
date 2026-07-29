---
title: Helpers 4 GitHub Actions
sidebar:
  label: GitHub Actions
  order: 0
---

Reusable GitHub Actions for consistent, automated workflows across your repositories.

## Quick Links

- **[Browse Actions](./actions/conventional-commits)** — All available actions
- **[GitHub](https://github.com/helpers4/action)** · **[Marketplace](https://github.com/marketplace?type=actions&query=helpers4)** · **[License (LGPL-3.0)](./legal/license)** · <a href="https://deepwiki.com/helpers4/action" target="_blank" rel="noopener">Ask AI (DeepWiki) ↗</a>

## Available Actions

| Action | Description |
|--------|-------------|
| [conventional-commits](./actions/conventional-commits) | Validate commit messages against the Conventional Commits specification |
| [dispatch-with-fallback](./actions/dispatch-with-fallback) | Dispatch a repository_dispatch event to a repository via a GitHub App token, with an optional fallback identity retried on failure |
| [pr-status-comment](./actions/pr-status-comment) | Post or update a single sticky PR comment summarizing job statuses as a table |
| [setup-pnpm](./actions/setup-pnpm) | Setup Node.js + pnpm, optionally installing dependencies |

## Usage

```yaml
- uses: helpers4/action/conventional-commits@v1
  with:
    types: 'feat|fix|docs|refactor|test|chore'
    require-scope: false
```

## Contributing

Found a bug or want to suggest a new action? [Open an issue](https://github.com/helpers4/action/issues) on the Actions repository.

Want to improve this documentation? Use the **Edit page** link at the bottom of any page, or [open an issue](https://github.com/helpers4/website/issues) on the website repository.

## License

LGPL-3.0 — See [LICENSE](./legal/license) for details.
