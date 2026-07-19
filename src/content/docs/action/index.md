---
title: Helpers 4 GitHub Actions
sidebar:
  label: GitHub Actions
  order: 0
---

Reusable GitHub Actions for consistent, automated workflows across your repositories.

## Quick Links

- **[Browse Actions](./actions/conventional-commits)** — All available actions
- **[Ask AI (DeepWiki)](https://deepwiki.com/helpers4/action)** — free AI-powered Q&A over this repo
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

## Contributing

Found a bug or want to suggest a new action? [Open an issue](https://github.com/helpers4/action/issues) on the Actions repository.

Want to improve this documentation? Use the **Edit page** link at the bottom of any page, or [open an issue](https://github.com/helpers4/website/issues) on the website repository.

## License

LGPL-3.0 — See [LICENSE](./legal/license) for details.
