# Configuration: pnpm Workspace Setup

## About

This is a **pnpm monorepo** with 4 independent workspaces:

1. `landing/` - Qwik landing page
2. `docs/typescript/` - Docusaurus (TypeScript helpers)
3. `docs/devcontainer/` - Docusaurus (DevContainer features)
4. `docs/github-action/` - Docusaurus (GitHub Actions)

## Installation

```bash
pnpm install --workspace
```

## Commands

### Monorepo-wide

```bash
# Install all dependencies
pnpm install

# Show all packages
pnpm recursive list

# Clean all workspaces
pnpm clean
```

### Specific Workspace

```bash
# Build specific package
pnpm --filter landing build
pnpm --filter ./docs/typescript build

# Run script in workspace
pnpm --filter landing dev
```

### Generate & Sync

```bash
# Generate docs from all repos
pnpm sync-from-repos

# Merge all builds
pnpm merge-builds

# Full build pipeline
pnpm build
```

## Development Tips

1. **Start dev servers in parallel (different terminals):**
   ```bash
   # Terminal 1
   pnpm dev:landing

   # Terminal 2
   pnpm dev:docs:typescript

   # Terminal 3
   pnpm dev:docs:devcontainer

   # Terminal 4
   pnpm dev:docs:action
   ```

2. **Each package has its own `package.json`** with independent dependencies

3. **Shared dependencies** (like `pnpm`, Node.js) managed at root level

4. **Scripts** in root `package.json` orchestrate the workflow

## Monorepo Advantages

✅ Single repo for all website components
✅ Unified CI/CD
✅ Shared scripts and automation
✅ Easier maintenance
✅ Better discoverability

## File Structure

```
helpers4.github.io/
├── pnpm-workspace.yaml    ← Defines workspaces
├── package.json           ← Root, shared scripts
├── landing/              ← Workspace 1
│   ├── package.json
│   ├── src/
│   └── public/
├── docs/
│   ├── typescript/        ← Workspace 2
│   │   ├── package.json
│   │   ├── docs/
│   │   └── docusaurus.config.ts
│   ├── devcontainer/      ← Workspace 3
│   └── github-action/     ← Workspace 4
├── scripts/
│   ├── merge-builds.js
│   ├── generate-*.js
│   └── sync-from-repos.js
└── .github/workflows/
    ├── deploy.yml
    ├── typescript-release.yml
    ├── devcontainer-release.yml
    └── action-release.yml
```

## See Also

- [SETUP.md](./SETUP.md) - Local development guide
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment instructions
- [package.json](./package.json) - Root scripts and dependencies
- [pnpm-workspace.yaml](./pnpm-workspace.yaml) - Workspace definitions
