---
title: Getting Started
sidebar:
  order: 1
---

Welcome to the **helpers4 DevContainer Features** collection! Pre-configured development environment containers for modern web development.

## What is a DevContainer?

A DevContainer is a development container specification that provides a consistent, reproducible development environment. It ensures all team members have the same tools, versions, and configurations.

## Quick Start

1. **Install VS Code Extension**

   Install the [DevContainers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

2. **Create devcontainer.json**

   ```json
   {
     "name": "Vite+ Dev",
     "image": "ghcr.io/helpers4/devcontainer/vite-plus:latest",
     "features": {
       "ghcr.io/helpers4/devcontainer/vite-plus": {}
     }
   }
   ```

3. **Open in Container**

   - Press `F1` and select "Dev Containers: Open Folder in Container"
   - VS Code will build and start the container
   - You're ready to code!

## Available Features

19 features, published to GHCR. Most are added under `"features"` in `devcontainer.json`;
`vite-plus`, `typescript-dev`, and `angular-dev` are full base images (`"image"`) that bundle
their own toolchain. See each feature's own page for its exact `devcontainer.json` snippet
and options.

### AI coding agents

| Feature | Description |
|---------|-------------|
| [claude-dev](./features/claude-dev/) | Claude Code extension + CLI, with `~/.claude` persisted across rebuilds |
| [cline-dev](./features/cline-dev/) | Cline AI coding agent extension + optional CLI |
| [copilot-dev](./features/copilot-dev/) | Copilot Chat + `gh copilot` CLI, with shared commit/PR/review instructions |
| [mistral-dev](./features/mistral-dev/) | Mistral Vibe extension, with `~/.vibe` persisted across rebuilds |
| [peon-ping](./features/peon-ping/) | Game-character voice/audio notifications when your AI agent finishes or needs input |

### Editor & Git tooling

| Feature | Description |
|---------|-------------|
| [essential-dev](./features/essential-dev/) | Baseline environment: Git visualization, Markdown support, editor enhancements |
| [github-dev](./features/github-dev/) | `gh` CLI + GitHub VS Code extensions (Pull Requests & Issues, Actions) |
| [git-absorb](./features/git-absorb/) | Automatically absorbs staged changes into their logical commits |
| [auto-header](./features/auto-header/) | Auto-configures VS Code file headers (license, company, contributors) |
| [dotfiles-sync](./features/dotfiles-sync/) | Syncs local Git/SSH/GPG/npm/yarn config (and opt-in cloud credentials) into the container |
| [shell-history-per-project](./features/shell-history-per-project/) | Persists shell history per project (zsh, bash, fish) |

### Language & build toolchains

| Feature | Description |
|---------|-------------|
| [typescript-dev](./features/typescript-dev/) | TypeScript/JavaScript setup — indexing, import management, HTML/CSS tooling |
| [vite-plus](./features/vite-plus/) | Unified Vite+ toolchain: Vite, Vitest, Oxlint, Oxfmt, Rolldown, tsdown |
| [angular-dev](./features/angular-dev/) | Angular environment: port forwarding, VS Code extensions, CLI autocompletion |
| [nub](./features/nub/) | Runs TS/JS files, `package.json` scripts, and local CLIs directly — no new runtime |
| [playwright-dev](./features/playwright-dev/) | Playwright E2E toolchain: Chromium/Firefox/WebKit deps, cached browser binaries |

### Infra & caching

| Feature | Description |
|---------|-------------|
| [pnpm-store](./features/pnpm-store/) | Shares a single pnpm content-addressable store across repos and rebuilds |
| [package-auto-install](./features/package-auto-install/) | Auto-runs npm/yarn/pnpm/nub install after container creation |

### Security

| Feature | Description |
|---------|-------------|
| [bitwarden-secrets-manager](./features/bitwarden-secrets-manager/) | Installs `bws`, the Bitwarden Secrets Manager CLI (machine-token auth only) |

:::note
Retired features (e.g. `local-mounts`) are kept for reference under [Deprecated](./deprecated/local-mounts/) — don't install them in new projects.
:::

## Combining Features

Mix multiple features for your perfect environment:

```json
{
  "name": "Vite+ Project",
  "image": "ghcr.io/helpers4/devcontainer/vite-plus:latest",
  "features": {
    "ghcr.io/helpers4/devcontainer/shell-history-per-project": {},
    "ghcr.io/helpers4/devcontainer/pnpm-store": {}
  },
  "postCreateCommand": "pnpm install"
}
```

## Configuration Files

All features support standard devcontainer.json configuration:

```json
{
  "name": "Development",
  "image": "ghcr.io/helpers4/devcontainer/vite-plus:latest",
  "features": {},
  "forwardPorts": [3000, 5173],
  "postCreateCommand": "pnpm install",
  "customizations": {
    "vscode": {
      "extensions": ["Vue.volar", "dbaeumer.vscode-eslint"]
    }
  }
}
```

## Next Steps

- Explore individual [Features](./features/vite-plus/)
- Check the [GitHub Repository](https://github.com/helpers4/devcontainer)

## Support

- GitHub Issues: [helpers4/devcontainer](https://github.com/helpers4/devcontainer/issues)
- Discussions: [GitHub Discussions](https://github.com/helpers4/devcontainer/discussions)

## License

LGPL-3.0 — See [LICENSE](https://github.com/helpers4/devcontainer/blob/main/LICENSE) for details.
