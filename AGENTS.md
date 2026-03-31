# AGENTS.md - Website & Documentation Portal

## ⛔ CRITICAL RESTRICTIONS

- **NEVER execute `git push`** - The user will push manually after review
- **NEVER use GPT models** - Use Claude models only (claude-sonnet-4, Claude Opus 4.5)
- **Everything in English** - Code, comments, commits, documentation, logs, PR descriptions

## Organization Context

**helpers4** is a collection of open-source utilities across 5 repos: `typescript`, `devcontainer`, `action`, `website` (this repo), `.github`. All licensed AGPL-3.0.

## Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/) with a gitmoji between the scope and the description.

**Format:** `<type>(<scope>): <emoji> <description>`

**Scopes:** landing, docs, lib-typescript, lib-devcontainer, lib-action, build, CI-CD

| Emoji | Type | Description |
|-------|------|-------------|
| ✨ | feat | New feature |
| 🐛 | fix | Bug fix |
| 📝 | docs | Documentation |
| ♻️ | refactor | Code refactoring |
| ✅ | test | Tests |
| 🔧 | chore | Maintenance |
| 🚀 | perf | Performance |
| 💄 | style | Code style |
| 👷 | ci | CI/CD |
| 📦 | build | Build system |
| ⏪ | revert | Revert |

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

### License Header (required on all source files)

```typescript
/**
 * This file is part of helpers4.
 * Copyright (C) 2025 baxyz
 * SPDX-License-Identifier: AGPL-3.0-or-later
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
