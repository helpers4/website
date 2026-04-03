<h1 align="center">helpers4 — Website</h1>

<p align="center">
  <strong>Unified documentation portal and landing page for all helpers4 projects.</strong>
</p>

<p align="center">
  <a href="https://helpers4.dev"><img src="https://img.shields.io/badge/website-helpers4.dev-blue?style=flat&logo=google-chrome&logoColor=white" alt="Website" /></a>
  <a href="https://github.com/helpers4/website/actions"><img src="https://img.shields.io/github/actions/workflow/status/helpers4/website/deploy.yml?branch=main&label=deploy" alt="Deploy status" /></a>
  <a href="https://github.com/helpers4/website/blob/main/LICENSE"><img src="https://img.shields.io/github/license/helpers4/website?color=blue" alt="license" /></a>
</p>

---

## Overview

This repository powers [**helpers4.dev**](https://helpers4.dev) — a unified website that hosts a Qwik landing page and multiple Docusaurus documentation instances for every helpers4 project.

## Architecture

```
helpers4.dev/
├── landing/                  # Qwik landing page (/)
├── docs/
│   ├── typescript/           # Docusaurus instance (/ts)
│   ├── devcontainer/         # Docusaurus instance (/dev-container)
│   └── github-action/        # Docusaurus instance (/action)
├── scripts/                  # Build & doc generation utilities
└── dist/                     # Final merged output (Cloudflare Pages)
```

## Prerequisites

- **Node.js** >= 20.0.0
- **pnpm** >= 9.0.0

## Getting Started

```bash
pnpm install
```

### Development

Each package can be started independently for local development:

```bash
pnpm dev:landing              # Landing page
pnpm dev:docs:typescript      # TypeScript docs  (localhost:3001)
pnpm dev:docs:devcontainer    # DevContainer docs (localhost:3002)
pnpm dev:docs:action          # Action docs       (localhost:3003)
```

### Build

Build everything and merge outputs into a single `dist/` directory:

```bash
pnpm build
```

This will:
1. Build the landing page (Qwik)
2. Build all Docusaurus instances in parallel
3. Merge outputs into `dist/`
4. Create `.nojekyll` for GitHub Pages compatibility

### Documentation Generation

Auto-generate documentation from source repositories:

```bash
pnpm generate-docs:typescript      # TypeScript API docs
pnpm generate-docs:devcontainer    # DevContainer features docs
pnpm generate-docs:action          # GitHub Action docs
pnpm sync-from-repos               # Sync all at once
```

## Deployment

The site is deployed to **Cloudflare Pages** on push to `main`.

| Setting | Value |
|---------|-------|
| Build command | `pnpm install && pnpm build` |
| Publish directory | `dist` |
| Domain | `helpers4.dev` |

**Output structure:**

```
dist/
├── index.html              # Landing page
├── .nojekyll               # GitHub Pages signal
├── ts/                     # TypeScript docs
├── dev-container/          # DevContainer docs
└── action/                 # Action docs
```

## Technical Notes

- Each Docusaurus instance has its own configuration with a unified theme
- TypeScript docs support versioning via `/versioned_docs/`
- All documentation is statically generated — no runtime dependencies
- pnpm workspaces enable parallel builds across packages

## Contributing

See the [Contributing Guide](CONTRIBUTING.md) for details on how to contribute to the website.

## License

This project is licensed under the [GNU Lesser General Public License v3.0](LICENSE).

## Contributors

<table>
<tr>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href="https://github.com/baxyz">
            <img src="https://avatars.githubusercontent.com/u/7852177?v=4" width="100;" alt="Bérenger"/>
            <br />
            <sub style="font-size:14px"><b>Bérenger</b></sub>
        </a>
    </td>
</tr>
</table>
