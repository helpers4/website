---
sidebar_position: 1
title: Getting Started
---

# Getting Started with DevContainer Features

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

### vite-plus

Complete Vite+ development environment with optimized tooling.

```json
{
  "image": "ghcr.io/helpers4/devcontainer/vite-plus:latest"
}
```

**Includes:**
- Vite 6.x
- Node.js 20+
- pnpm 9+
- Oxc (linter/formatter)
- VS Code extensions (Oxc, Vitest)

[Full Documentation →](./features/vite-plus)

### typescript-dev

TypeScript development environment with strict mode best practices.

```json
{
  "image": "ghcr.io/helpers4/devcontainer/typescript-dev:latest"
}
```

[Full Documentation →](./features/typescript-dev)

### git-absorb

Git absorb integration for interactive rebase workflows.

```json
{
  "features": {
    "ghcr.io/helpers4/devcontainer/git-absorb": {}
  }
}
```

[Full Documentation →](./features/git-absorb)

### shell-history-per-project

Separate shell history per project for better organization.

```json
{
  "features": {
    "ghcr.io/helpers4/devcontainer/shell-history-per-project": {}
  }
}
```

[Full Documentation →](./features/shell-history-per-project)

### local-mounts

Configure local mount points for development.

```json
{
  "features": {
    "ghcr.io/helpers4/devcontainer/local-mounts": {}
  }
}
```

[Full Documentation →](./features/local-mounts)

### angular-dev

Pre-configured Angular development environment.

```json
{
  "image": "ghcr.io/helpers4/devcontainer/angular-dev:latest"
}
```

[Full Documentation →](./features/angular-dev)

### package-auto-install

Automatically install npm/pnpm packages on container start.

```json
{
  "features": {
    "ghcr.io/helpers4/devcontainer/package-auto-install": {}
  }
}
```

[Full Documentation →](./features/package-auto-install)

## Combining Features

Mix multiple features for your perfect environment:

```json
{
  "name": "Vite+ Project",
  "image": "ghcr.io/helpers4/devcontainer/vite-plus:latest",
  "features": {
    "ghcr.io/helpers4/devcontainer/shell-history-per-project": {},
    "ghcr.io/helpers4/devcontainer/local-mounts": {}
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

- Explore individual [Features Documentation](./features)
- View [examples](./examples)
- Check the [GitHub Repository](https://github.com/helpers4/devcontainer)

## Support

- GitHub Issues: [helpers4/devcontainer](https://github.com/helpers4/devcontainer/issues)
- Discussions: [GitHub Discussions](https://github.com/helpers4/devcontainer/discussions)

## License

MIT License - See [LICENSE](https://github.com/helpers4/devcontainer/blob/main/LICENSE) for details.
