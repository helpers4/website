---
sidebar_position: 3
---

# git-absorb

Automatic git absorb integration for cleaner commit history.

## Overview

`git absorb` automatically identifies which staged changes belong to which commit, making interactive rebase workflows much easier.

## Installation

```json
{
  "name": "Git Absorb",
  "features": {
    "ghcr.io/helpers4/devcontainer/git-absorb:latest": {}
  }
}
```

## Usage

```bash
# Stage your changes
git add -p

# Automatically absorb into the right commits
git absorb
```

---

For full documentation, visit [GitHub](https://github.com/helpers4/devcontainer).
