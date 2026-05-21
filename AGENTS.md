# AGENTS.md - Website & Documentation Portal

## ⛔ CRITICAL RESTRICTIONS

- **NEVER execute `git push`** - The user will push manually after review
- **NEVER use GPT models** - Use Claude models only (claude-sonnet-4, Claude Opus 4.5)
- **Everything in English** - Code, comments, commits, documentation, logs, PR descriptions

## Organization Context

**helpers4** is a collection of open-source utilities across 5 repos: `typescript`, `devcontainer`, `action`, `website` (this repo), `.github`. All licensed LGPL-3.0-or-later.

## Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/) with a gitmoji between the scope and the description.

**Format:** `<type>(<scope>): <emoji> <description>`

**Scopes:** docs, lib-typescript, lib-devcontainer, lib-action, build, deps, deps-dev, CI-CD

| Type | Primary | Alternatives (gitmoji.dev) | When to use |
|------|---------|---------------------------|-------------|
| feat | ✨ | 🚸 UX, ♿️ a11y, 🌐 i18n, 💬 text/literals | New feature |
| fix | 🐛 | 🚑️ hotfix, 🔒️ security, 🩹 trivial, 🥅 errors, 🚨 warnings, ✏️ typo | Bug fix |
| docs | 📝 | 💡 source comments, 📄 license | Documentation |
| refactor | ♻️ | 🎨 structure, 🔥 remove code, ⚰️ dead code, 🚚 move/rename | Code refactoring |
| test | ✅ | 🧪 failing test, 💚 fix CI test | Tests |
| chore | 🔧 | 🙈 gitignore, 🔖 tag/release, 📌 pin deps, 🩺 healthcheck | Maintenance |
| perf | ⚡️ | — | Performance |
| style | 💄 | 🎨 code style | Code style / UI |
| ci | 👷 | 💚 fix CI | CI/CD |
| build | 📦️ | ➕ add dep, ➖ remove dep, ⬆️ upgrade dep, ⬇️ downgrade dep | Build system |
| revert | ⏪️ | — | Revert |

> Pick the **most specific** gitmoji that matches the change. The primary is the safe default; reach for an alternative when it adds real signal. Full list: https://gitmoji.dev

**Examples:**
- `feat(docs): ✨ add dark mode toggle`
- `fix(lib-typescript): 🐛 resolve broken sidebar links`
- `docs(lib-devcontainer): 📝 update feature docs generation`
- `chore(CI-CD): 🔧 update deployment workflow`

---

## This Repository

**Purpose:** Unified **Astro + Starlight** documentation site for the helpers4 organization. Deployed on Cloudflare Pages at **helpers4.dev**.

### Tech Stack

- **Framework:** Astro 6.x + Starlight
- **Theme:** starlight-theme-nova + starlight-sidebar-topics
- **Package Manager:** pnpm (single package, no workspaces)
- **Deployment:** Cloudflare Pages

### Project Structure

```
website/
├── src/
│   ├── assets/                           # Images, logo
│   ├── components/                       # Astro/MDX components
│   ├── content/
│   │   └── docs/
│   │       ├── typescript/               # TypeScript helpers docs (→ /typescript/)
│   │       │   ├── index.md
│   │       │   ├── getting-started.md
│   │       │   ├── categories/           # Generated per-category pages
│   │       │   ├── reference/
│   │       │   ├── comparisons/
│   │       │   └── legal/
│   │       ├── devcontainer/             # DevContainer feature docs (→ /devcontainer/)
│   │       │   ├── index.md
│   │       │   ├── getting-started.md
│   │       │   ├── features/             # Generated per-feature pages
│   │       │   ├── deprecated/
│   │       │   ├── reference/
│   │       │   └── legal/
│   │       └── action/                   # GitHub Action docs (→ /action/)
│   │           ├── index.md
│   │           ├── getting-started.md
│   │           ├── actions/              # Generated per-action pages
│   │           ├── reference/
│   │           └── legal/
│   ├── content.config.ts                 # Content collection schema
│   ├── lib/                              # Shared utilities
│   ├── pages/                            # Astro pages (non-docs routes)
│   └── styles/                           # Global CSS
├── scripts/
│   ├── generate-typescript-docs.js       # TS build artifacts → Markdown pages
│   ├── generate-devcontainer-docs.js     # Feature READMEs → Markdown pages
│   ├── generate-action-docs.js           # Action README → Markdown pages
│   ├── fix-titles.mjs                    # Post-process: strip duplicate H1 from body
│   └── sync-from-repos.js               # Run all generators at once
├── .github/
│   └── workflows/
│       ├── on-typescript-release.yml    # Auto-update TS docs on release
│       ├── on-devcontainer-release.yml  # Auto-update DC docs on release
│       └── on-action-release.yml        # Auto-update Action docs on release
├── astro.config.mjs                     # Astro + Starlight configuration
├── tsconfig.json
└── package.json
```

### Key Commands

```bash
# Development
pnpm dev                          # Dev server at localhost:4321

# Building
pnpm build                        # Build static site into dist/
pnpm preview                      # Preview built site locally

# Documentation generation (sibling repos required)
pnpm generate-docs:typescript     # TS helpers → src/content/docs/typescript/
pnpm generate-docs:devcontainer   # DC features → src/content/docs/devcontainer/
pnpm generate-docs:action         # Actions → src/content/docs/action/
pnpm sync-from-repos              # All generators at once

# Cleanup
pnpm clean                        # Remove dist/ and .astro/
```

### Architecture

**Doc generation flow:**
1. Source repos (`../typescript`, `../devcontainer`, `../action`) must be cloned as siblings
2. Scripts parse source files (TypeScript JSDoc, feature READMEs, action README)
3. Each script writes Markdown files into `src/content/docs/<section>/`
4. Starlight renders them automatically during `pnpm build`

**Routing:**
- Starlight maps `src/content/docs/typescript/**` → `/typescript/**`
- Starlight maps `src/content/docs/devcontainer/**` → `/devcontainer/**`
- Starlight maps `src/content/docs/action/**` → `/action/**`
- The root `/` is handled by `src/pages/index.astro`

**No duplicate H1 rule:** Starlight renders the `title:` frontmatter field as `<h1>`. Content body must never contain a `# Heading` at the top level. The `fix-titles.mjs` script enforces this after generation.

### CI/CD Workflows

| Workflow | Trigger | Jobs |
|----------|---------|------|
| `pr-validation.yml` | Pull request → main | conventional-commits, build, typecheck, pr-comment |
| `deploy.yml` | Push → main | Build + deploy to Cloudflare Pages |
| `on-typescript-release.yml` | TS repo release dispatch | Generate TS docs + commit + deploy |
| `on-devcontainer-release.yml` | DC repo release dispatch | Generate DC docs + commit + deploy |
| `on-action-release.yml` | Action repo release dispatch | Generate Action docs + commit + deploy |

### License Header (required on all source files)

```typescript
/**
 * This file is part of helpers4.
 * Copyright (C) 2025 baxyz
 * SPDX-License-Identifier: LGPL-3.0-or-later
 */
```

## Repository Links

- TypeScript: https://github.com/helpers4/typescript
- DevContainer: https://github.com/helpers4/devcontainer
- Actions: https://github.com/helpers4/action
- Website: https://github.com/helpers4/website
- Organization: https://github.com/helpers4

## Questions?

If you need clarification on any aspect, open an issue or comment on the PR. We're here to help!

| Type | Primary | Alternatives (gitmoji.dev) | When to use |
|------|---------|---------------------------|-------------|
| feat | ✨ | 🚸 UX, ♿️ a11y, 🌐 i18n, 💬 text/literals | New feature |
| fix | 🐛 | 🚑️ hotfix, 🔒️ security, 🩹 trivial, 🥅 errors, 🚨 warnings, ✏️ typo | Bug fix |
| docs | 📝 | 💡 source comments, 📄 license | Documentation |
| refactor | ♻️ | 🎨 structure, 🔥 remove code, ⚰️ dead code, 🚚 move/rename | Code refactoring |
| test | ✅ | 🧪 failing test, 💚 fix CI test | Tests |
| chore | 🔧 | 🙈 gitignore, 🔖 tag/release, 📌 pin deps, 🩺 healthcheck | Maintenance |
| perf | ⚡️ | — | Performance |
| style | 💄 | 🎨 code style | Code style / UI |
| ci | 👷 | 💚 fix CI | CI/CD |
| build | 📦️ | ➕ add dep, ➖ remove dep, ⬆️ upgrade dep, ⬇️ downgrade dep | Build system |
| revert | ⏪️ | — | Revert |

> Pick the **most specific** gitmoji that matches the change. The primary is the safe default; reach for an alternative when it adds real signal. Full list: https://gitmoji.dev

**Examples:**
- `feat(landing): ✨ add hero section with animations`
- `fix(docs): 🐛 resolve broken sidebar links`
- `docs(lib-typescript): 📝 update helper docs generation`
- `chore(CI-CD): 🔧 update deployment workflow`

---

## This Repository

**Purpose:** Landing page + 3 Docusaurus documentation portals for the helpers4 organization. Deployed on Cloudflare Pages at **helpers4.dev**.

### Tech Stack

- **Landing page:** Vite 7.x + React 18
- **Documentation:** Docusaurus 3.x (3 independent instances)
- **Package Manager:** pnpm workspaces
- **Deployment:** Cloudflare Pages

### Project Structure

```
website/
├── landing/                          # Landing page (/)
│   ├── src/                          # React components
│   ├── public/
│   ├── package.json
│   └── vite.config.ts
├── docs/
│   ├── typescript/                   # Docusaurus → /typescript
│   │   ├── docusaurus.config.ts      # Reads version from ../../typescript/package.json
│   │   ├── sidebars.ts
│   │   └── docs/                     # Generated + static pages
│   ├── devcontainer/                 # Docusaurus → /dev-container
│   │   ├── docusaurus.config.ts
│   │   └── docs/
│   └── github-action/               # Docusaurus → /action
│       ├── docusaurus.config.ts
│       └── docs/
├── scripts/
│   ├── generate-helper-docs.js       # TS source → per-function Markdown pages
│   ├── generate-devcontainer-docs.js # Feature READMEs → Docusaurus
│   ├── generate-action-docs.js       # Action README → Docusaurus
│   ├── generate-typescript-docs.js   # Orchestrator for TS docs
│   ├── sync-from-repos.js            # Run all generators
│   ├── merge-builds.js               # Merge all outputs into dist/
│   └── post-install.js
├── merge-builds.sh                   # Bash wrapper
├── pnpm-workspace.yaml               # 4 workspaces
├── package.json                       # Root orchestrator
└── dist/                              # Final deployed output
```

### Key Commands

```bash
# Development (each on different port)
pnpm dev:landing                      # localhost:3000
pnpm dev:docs:typescript              # localhost:3001
pnpm dev:docs:devcontainer            # localhost:3002
pnpm dev:docs:action                  # localhost:3003

# Building
pnpm build:landing                    # Build landing page
pnpm build:docs:typescript            # Build TS Docusaurus
pnpm build:docs:devcontainer          # Build DevContainer Docusaurus
pnpm build:docs:action                # Build Action Docusaurus
pnpm build:all                        # Build everything
pnpm build                            # Full build + merge into dist/

# Documentation generation (from source repos)
pnpm generate-docs:typescript         # Generate TS helper pages
pnpm generate-docs:devcontainer       # Generate devcontainer pages
pnpm generate-docs:action             # Generate action pages
pnpm sync-from-repos                  # All generation at once

# Cleanup
pnpm clean                            # Remove build artifacts
```

### Architecture

**Build pipeline:**
1. Each workspace builds independently (landing → Vite, docs → Docusaurus)
2. `merge-builds.js` merges all outputs into `dist/`
3. Final structure: `dist/index.html` (landing) + `dist/typescript/` + `dist/dev-container/` + `dist/action/`

**Doc generation:**
- `generate-helper-docs.js` reads TypeScript source files (JSDoc) and creates one Markdown page per function, with related types attached
- `generate-devcontainer-docs.js` converts feature READMEs to Docusaurus format
- `generate-action-docs.js` converts action README to Docusaurus format
- Generators require source repos available locally (sibling directories)

**Docusaurus instances:**
- Each has its own `docusaurus.config.ts`, `sidebars.ts`, `package.json`
- TypeScript instance displays a dynamic version badge from `typescript/package.json`
- No versioning — docs always reflect the current version

### CI/CD Workflows

| Workflow | Trigger | Jobs |
|----------|---------|------|
| `pr-validation.yml` | Pull request → main | conventional-commits, build, typecheck, pr-comment |
| `deploy.yml` | Push → main | Build + deploy to Cloudflare Pages |

- **conventional-commits** — Validates PR commit messages against conventional commit format
- **build** — Full site build (`pnpm build`)
- **typecheck** — TypeScript type checking (`tsc --noEmit`)
- **pr-comment** — Posts/updates a status summary comment on the PR
- **deploy** — Builds and deploys to Cloudflare Pages (push to main only)

### License Header (required on all source files)

```typescript
/**
 * This file is part of helpers4.
 * Copyright (C) 2025 baxyz
 * SPDX-License-Identifier: LGPL-3.0-or-later
 */
```

## Repository Links

- TypeScript: https://github.com/helpers4/typescript
- DevContainer: https://github.com/helpers4/devcontainer
- Actions: https://github.com/helpers4/action
- Website: https://github.com/helpers4/website
- Organization: https://github.com/helpers4

## Questions?

If you need clarification on any aspect, open an issue or comment on the PR. We're here to help!
