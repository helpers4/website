---
sidebar_position: 7
---

# package-auto-install

Automatic package installation when opening a dev container.

## Overview

This feature detects your project's package manager and automatically installs dependencies when the dev container starts.

Supports:
- **npm** - `package-lock.json`
- **pnpm** - `pnpm-lock.yaml`
- **yarn** - `yarn.lock`

## Installation

```json
{
  "name": "Auto Install",
  "features": {
    "ghcr.io/helpers4/devcontainer/package-auto-install:latest": {}
  }
}
```

---

For full documentation, visit [GitHub](https://github.com/helpers4/devcontainer).
