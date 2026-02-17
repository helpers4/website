# helpers4 Website

Unified website for all helpers4 libraries with landing page and multi-instance documentation.

## Architecture

```
helpers4.github.io/
├── landing/                  # Qwik landing page (/)
├── docs/
│   ├── typescript/          # Docusaurus instance (/ts)
│   ├── devcontainer/        # Docusaurus instance (/dev-container)
│   └── github-action/       # Docusaurus instance (/action)
├── scripts/                 # Build utilities
│   ├── merge-builds.js      # Merge all builds into dist/
│   └── ...                  # Generate docs from repos
└── dist/                    # Final output (Cloudflare Pages)
```

## Setup

### Prerequisites
- Node.js >= 20.0.0
- pnpm >= 9.0.0

### Installation

```bash
pnpm install
```

## Development

Each package can be started independently:

```bash
# Landing page
pnpm dev:landing

# TypeScript docs (localhost:3001)
pnpm dev:docs:typescript

# DevContainer docs (localhost:3002)
pnpm dev:docs:devcontainer

# Action docs (localhost:3003)
pnpm dev:docs:action
```

## Building

Build everything and merge outputs:

```bash
pnpm build
```

This will:
1. Build landing page (Qwik)
2. Build all Docusaurus instances
3. Merge outputs into `dist/`
4. Create `.nojekyll` for Github Pages

Final output structure:
```
dist/
├── index.html          # Landing page
├── .nojekyll          # Github Pages signal
├── ts/                # TypeScript docs
├── dev-container/     # DevContainer docs
└── action/            # Action docs
```

## Deployment

### Cloudflare Pages

1. Connect repository to Cloudflare Pages
2. Set build command: `pnpm install && pnpm build`
3. Set publish directory: `dist`
4. Deploy on push to `main`

### Environment

- **Build**: pnpm workspaces with parallel builds
- **Output**: Static HTML/CSS/JS
- **Deploy**: Cloudflare Pages (or Github Pages)

## Documentation Generation

Scripts to auto-generate docs from source repositories:

```bash
# Generate TypeScript API docs from source
pnpm generate-docs:typescript

# Generate DevContainer features docs
pnpm generate-docs:devcontainer

# Generate Action docs
pnpm generate-docs:action

# Sync all from repos
pnpm sync-from-repos
```

## Notes

- Each Docusaurus instance has its own configuration and styling (unified theme)
- TypeScript docs support versioning (docs in `/versioned_docs/`)
- All docs are statically generated
- Domain setup: `helpers4.dev` → Cloudflare Pages
