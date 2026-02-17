---
sidebar_position: 1
---

# vite-plus

Complete Vite+ development environment with pre-configured tooling and VS Code extensions.

## Features

- **Vite 6.x** - Lightning-fast build tool
- **Node.js 20+** - Latest Node.js versions
- **pnpm 9+** - Fast, space-efficient package manager
- **Oxc** - Fast linter/formatter (100x faster than ESLint)
- **VS Code Extensions**:
  - Oxc linter/formatter integration
  - Vitest test explorer
  - ESLint support
  - TypeScript support

## Installation

### Basic Setup

```json
{
  "name": "Vite+ Dev",
  "image": "ghcr.io/helpers4/devcontainer/vite-plus:latest"
}
```

### With Features

```json
{
  "name": "Vite+ Project",
  "image": "ghcr.io/helpers4/devcontainer/vite-plus:latest",
  "features": {
    "ghcr.io/helpers4/devcontainer/package-auto-install": {}
  },
  "forwardPorts": [5173],
  "postCreateCommand": "pnpm install"
}
```

## Usage

### Start Development Server

```bash
pnpm dev
```

Visit `http://localhost:5173`

### Build for Production

```bash
pnpm build
```

### Run Tests

```bash
pnpm test
```

### Lint & Format

```bash
pnpm lint
pnpm format
```

## Framework Support

Works with all Vite-compatible frameworks:
- React
- Vue
- Svelte
- Angular
- Lit
- Preact
- Solid
- Qwik

## Customization

### Add Global Tools

```json
{
  "remoteUser": "node",
  "mounts": [
    "source=${localEnv:HOME}/.npm,target=/home/node/.npm,type=bind,consistency=cached"
  ],
  "postCreateCommand": "npm install -g your-cli-tool"
}
```

### Environment Variables

Create `.devcontainer/.env`:

```bash
NODE_ENV=development
VITE_API_URL=http://localhost:3000
```

## Troubleshooting

### Port Already in Use

```bash
pnpm dev -- --port 5174
```

### Slow Performance

Increase container resources in VS Code settings:
```json
{
  "dev.containers.memory": "4gb"
}
```

## See Also

- [TypeScript Dev](./typescript-dev)
- [Angular Dev](./angular-dev)
- [Package Auto Install](./package-auto-install)

---

[View on GitHub](https://github.com/helpers4/devcontainer)
