---
title: Helpers 4 DevContainers
sidebar:
  label: DevContainers
  order: 0
---

Plug-and-play development container features — consistent environments, zero setup friction.

## Quick Links

- **[Browse Features](./features/vite-plus)** — All available features
- **[GitHub](https://github.com/helpers4/devcontainer)** · **[Registry (ghcr.io)](https://github.com/helpers4/devcontainer/pkgs/container/devcontainer)** · **[License (LGPL-3.0)](./legal/license)** · <a href="https://deepwiki.com/helpers4/devcontainer" target="_blank" rel="noopener">Ask AI (DeepWiki) ↗</a>**

## Available Features

20 features covering AI coding agents, editor & Git tooling, language toolchains, caching, and
secrets — see the full list, grouped by purpose, on [Getting Started](./getting-started/#available-features).

Most of them also come with [Automatic Extras](./reference/automatic-extras/) — container-specific
fixes (like a Git config value copied from your host) applied with nothing to configure.

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

## Contributing

Found a bug or want to request a new feature? [Open an issue](https://github.com/helpers4/devcontainer/issues) on the DevContainer repository.

Want to improve this documentation? Use the **Edit page** link at the bottom of any page, or [open an issue](https://github.com/helpers4/website/issues) on the website repository.

## License

LGPL-3.0 — See [LICENSE](./legal/license) for details.
