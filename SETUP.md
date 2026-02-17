# Setup Guide

## Local Development

### Prerequisites

- Node.js 20+
- pnpm 9+
- Git

### Installation

1. **Clone repository:**
   ```bash
   git clone https://github.com/helpers4/helpers4.github.io.git
   cd helpers4.github.io
   ```

2. **Clone sibling repositories** (needed for doc generation):
   ```bash
   cd ..
   git clone https://github.com/helpers4/typescript.git
   git clone https://github.com/helpers4/devcontainer.git
   git clone https://github.com/helpers4/action.git
   ```

3. **Install dependencies:**
   ```bash
   cd helpers4.github.io
   pnpm install
   ```

4. **Generate documentation from source repos:**
   ```bash
   pnpm sync-from-repos
   ```

### Development Servers

Start all dev servers in separate terminals:

```bash
# Terminal 1: Landing page (http://localhost:3000)
pnpm dev:landing

# Terminal 2: TypeScript docs (http://localhost:3001)
pnpm dev:docs:typescript

# Terminal 3: DevContainer docs (http://localhost:3002)
pnpm dev:docs:devcontainer

# Terminal 4: Action docs (http://localhost:3003)
pnpm dev:docs:action
```

Or view the landing page at the dev URL printed in terminal 1.

## Building

### Full Build

```bash
pnpm build
```

This:
1. Builds Qwik landing page
2. Builds all Docusaurus instances
3. Merges outputs into `dist/`
4. Creates `.nojekyll`

Output: `dist/` (ready for deployment)

### Individual Builds

```bash
pnpm build:landing
pnpm build:docs:typescript
pnpm build:docs:devcontainer
pnpm build:docs:action
```

## Generating Docs from Source Repos

### Sync All

```bash
pnpm sync-from-repos
```

### Individual Generation

```bash
# TypeScript: generates category docs from helpers/
pnpm generate-docs:typescript

# DevContainer: pulls feature READMEs
pnpm generate-docs:devcontainer

# Action: pulls action READMEs
pnpm generate-docs:action
```

## Versioning

### TypeScript Versions

Create a new version:

```bash
cd docs/typescript

# Create version from current docs
npm run docusaurus docs:version 2.1.0

# Check version list
node ../../scripts/version-management.js list
```

## Directory Structure

```
helpers4.github.io/
├── landing/                 # Qwik app (/)
├── docs/
│   ├── typescript/         # Docusaurus instance (/ts)
│   │   ├── docs/           # Current docs
│   │   ├── versioned_docs/ # Archived versions
│   │   └── versions.json   # Version list
│   ├── devcontainer/       # Docusaurus instance (/dev-container)
│   └── github-action/      # Docusaurus instance (/action)
├── scripts/
│   ├── merge-builds.js
│   ├── generate-*.js
│   └── sync-from-repos.js
├── .github/workflows/
│   ├── deploy.yml          # Main build & deploy
│   ├── typescript-release.yml
│   ├── devcontainer-release.yml
│   └── action-release.yml
├── dist/                   # Build output (generated)
├── DEPLOYMENT.md          # Deployment guide
└── README.md
```

## Making Changes

### Adding Pages

**Landing page component:**
```bash
landing/src/components/my-component.tsx
```

**Docusaurus docs:**
```bash
docs/typescript/docs/my-page.md
docs/devcontainer/docs/my-page.md
docs/github-action/docs/my-page.md
```

### Updating Docs

Edit markdown files in respective `docs/` folders. Changes hot-reload in dev mode.

### Styling

- Landing: CSS modules in `landing/src/components/*.module.css`
- Docusaurus: CSS in `docs/*/src/css/custom.css`

## Testing Builds

### Local Preview

```bash
pnpm build
npx serve dist
```

Visit `http://localhost:3000` (or printed URL)

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for:
- Cloudflare Pages setup
- GitHub secrets configuration
- Automation workflows
- Versioning management

## Troubleshooting

### Build Errors

```bash
# Clean and reinstall
pnpm clean
pnpm install
pnpm build
```

### Docs Not Generating

Ensure sibling repos exist:
```bash
ls ../typescript
ls ../devcontainer
ls ../action
```

If missing:
```bash
cd ..
git clone https://github.com/helpers4/{repo-name}.git
```

### Port Already in Use

Change port in dev scripts or pick different one:
```bash
pnpm dev:landing -- --port 4000
```

## Contributing

1. Create feature branch
2. Make changes
3. Test builds: `pnpm build`
4. Commit & push
5. Submit PR

---

**Questions?** Open an issue on [GitHub](https://github.com/helpers4/helpers4.github.io)
