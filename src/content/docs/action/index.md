---
title: Helpers4 GitHub Actions
sidebar:
  label: GitHub Actions
  order: 0
---

Reusable GitHub Actions for consistent, automated workflows across your repositories.

## Quick Links

- **[Browse Actions](./actions/conventional-commits)** — All available actions
- **[Two kinds of repository](./reference/repositories/)** — why some actions live in their own repository
- **[GitHub](https://github.com/helpers4/action)** · **[Marketplace](https://github.com/marketplace?type=actions&query=helpers4)** · **[License (LGPL-3.0)](./legal/license)** · <a href="https://deepwiki.com/helpers4/action" target="_blank" rel="noopener">Ask AI (DeepWiki) ↗</a>

## Available Actions

| Action | Use it with | Description |
|--------|-------------|-------------|
| [action-release](./actions/action-release) | `helpers4/action-release@v0` | Release a TypeScript, Rust or mixed repository: version, changelog, commit, tag, GitHub Release, npm, crates.io and JSR |
| [conventional-commits](./actions/conventional-commits) | `helpers4/action/conventional-commits@v1` | Validate commit messages against the Conventional Commits specification |
| [dispatch-with-fallback](./actions/dispatch-with-fallback) | `helpers4/action/dispatch-with-fallback@v1` | Dispatch a repository_dispatch event to a repository via a GitHub App token, with an optional fallback identity retried on failure |
| [pr-status-comment](./actions/pr-status-comment) | `helpers4/action/pr-status-comment@v1` | Post or update a single sticky PR comment summarizing job statuses as a table |
| [setup-pnpm](./actions/setup-pnpm) | `helpers4/action/setup-pnpm@v1` | Setup Node.js + pnpm, optionally installing dependencies |

Most actions live together in the [helpers4/action](https://github.com/helpers4/action) repository. An action listed on the GitHub Marketplace needs a repository of its own: those (marked **Marketplace** in the sidebar) are called without the `action/` part. See [Two kinds of repository](./reference/repositories/).

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
