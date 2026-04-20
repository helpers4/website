---
sidebar_position: 0
slug: /
---

# helpers4 / DevContainer Features

Plug-and-play development container features — consistent environments, zero setup friction.

## Quick Links

- **[Browse Features](./features/vite-plus)** — All available features
- **[GitHub](https://github.com/helpers4/devcontainer)** · **[Registry (ghcr.io)](https://github.com/helpers4/devcontainer/pkgs/container/devcontainer)** · **[License (LGPL-3.0)](./legal/license)**

## Available Features

| Feature | Description |
|---------|-------------|
| [essential-dev](./features/essential-dev) | Git visualization, editor enhancements, Markdown |
| [typescript-dev](./features/typescript-dev) | TypeScript/JS dev with import management |
| [angular-dev](./features/angular-dev) | Angular dev, port 4200 forwarding |
| [vite-plus](./features/vite-plus) | Vite development setup |
| [package-auto-install](./features/package-auto-install) | Auto-detect and install packages |
| [git-absorb](./features/git-absorb) | `git absorb` from GitHub releases |
| [shell-history-per-project](./features/shell-history-per-project) | Persistent shell history per project |
| [dotfiles-sync](./features/dotfiles-sync) | Sync local Git/SSH/GPG/npm config |
| [peon-ping](./features/peon-ping) | Health check endpoint |

## Installation

Features are published to `ghcr.io/helpers4/devcontainer/<feature-name>`:

```json
{
  "features": {
    "ghcr.io/helpers4/devcontainer/essential-dev:1": {},
    "ghcr.io/helpers4/devcontainer/typescript-dev:1": {}
  }
}
```

## License

LGPL-3.0 — See [LICENSE](./legal/license) for details.
