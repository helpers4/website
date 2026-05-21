<h1 align="center">helpers4 — Website</h1>

<p align="center">
  <strong>Unified documentation portal for all helpers4 projects.</strong>
</p>

<p align="center">
  <a href="https://helpers4.dev"><img src="https://img.shields.io/badge/website-helpers4.dev-blue?style=flat&logo=google-chrome&logoColor=white" alt="Website" /></a>
  <a href="https://github.com/helpers4/website/actions"><img src="https://img.shields.io/github/actions/workflow/status/helpers4/website/deploy.yml?branch=main&label=deploy" alt="Deploy status" /></a>
  <a href="https://github.com/helpers4/website/blob/main/LICENSE"><img src="https://img.shields.io/github/license/helpers4/website?color=blue" alt="license" /></a>
</p>

---

## Overview

This repository powers [**helpers4.dev**](https://helpers4.dev) — a unified **Astro + Starlight** documentation site for every helpers4 project.

## Architecture

```
helpers4.dev/
├── /typescript/              # TypeScript helpers docs
├── /devcontainer/            # DevContainer features docs
└── /action/                  # GitHub Actions docs
```

All content lives under `src/content/docs/` and is served by a single Astro + Starlight instance.

## Prerequisites

- **Node.js** >= 24.0.0
- **pnpm** >= 9.0.0

## Getting Started

```bash
git clone https://github.com/helpers4/website.git
cd website
pnpm install
```

### Development

```bash
pnpm dev          # Start dev server (localhost:4321)
```

### Build

```bash
pnpm build        # Build static site into dist/
pnpm preview      # Preview the built site locally
```

### Documentation Generation

Docs are auto-generated from the source repositories (must be cloned as siblings):

```bash
pnpm generate-docs:typescript      # TypeScript API docs → src/content/docs/typescript/
pnpm generate-docs:devcontainer    # DevContainer feature docs → src/content/docs/devcontainer/
pnpm generate-docs:action          # GitHub Action docs → src/content/docs/action/
pnpm sync-from-repos               # All generators at once
```

Source repos are expected at `../typescript`, `../devcontainer`, `../action` relative to this folder.

## Deployment

The site is deployed to **Cloudflare Pages** on every push to `main`.

| Setting | Value |
|---------|-------|
| Build command | `pnpm install && pnpm build` |
| Publish directory | `dist` |
| Domain | `helpers4.dev` |

## Contributing

See the [Contributing Guide](CONTRIBUTING.md).

## License

This project is licensed under the [GNU Lesser General Public License v3.0 or later](LICENSE).

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
