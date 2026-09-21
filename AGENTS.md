# AGENTS.md — website

→ [Org-wide rules](https://github.com/helpers4/.dev/blob/main/AGENTS.md): restrictions · commit format · license headers

## This Repository

**Purpose:** Astro + Starlight docs site at **helpers4.dev** (Cloudflare Pages), one section per product: TypeScript, Rust, Dev Container, GitHub Actions.
**Stack:** Astro 6 · Starlight · starlight-theme-nova · pnpm · no workspaces

```text
website/
├── src/content/docs/
│   ├── typescript/    # ⚠ GENERATED — do not edit by hand (except typescript/v1/, a frozen
│   │                  #   pre-monorepo archive with no generator source — hand-authored on
│   │                  #   purpose, see src/data/versions.json)
│   ├── rust/
│   │   ├── modules/            # ⚠ GENERATED — overview + modules/<module>/index.md and one
│   │   │                       #   page per public item (modules/<module>/<item>.md)
│   │   ├── reference/          # changelog.md, contributing.md, naming-conflicts.md are ⚠ GENERATED;
│   │   │                       #   philosophy.md and ai-support.md are hand-authored
│   │   ├── legal/              # open-source-libraries.md is ⚠ GENERATED; license.md is hand-authored
│   │   └── index.md, getting-started.md  # hand-authored
│   ├── devcontainer/  # ⚠ GENERATED — do not edit by hand
│   └── action/        # ⚠ GENERATED — do not edit by hand
├── public/
│   ├── llms.txt                # hand-authored site index (llmstxt.org spec) — 4 products,
│   │                            # H2 per product, edit by hand when a product is added/removed
│   ├── rust/llms-full.txt      # ⚠ GENERATED — every public item of the crate in one file
│   └── typescript/<slug>/llms-full.txt  # ⚠ GENERATED — copy of typescript's own
│                                # build/all/llms.txt (full signatures/params/examples), one per
│                                # version slot (typescript/, typescript/next/, typescript/vN/ —
│                                # same DOCS_TARGET as the doc tree it sits next to)
├── scripts/
│   ├── generate-rust-docs.js          # crate source (/// docs, Cargo.toml, CHANGELOG, CONTRIBUTING) → Markdown
│   │                                  #   pages + public/rust/llms-full.txt; RUST_REPO_PATH points at a checkout
│   ├── generate-typescript-docs.js    # JSDoc → Markdown + publishes llms-full.txt
│   ├── generate-devcontainer-docs.js  # feature READMEs → Markdown
│   ├── generate-action-docs.js        # action README → Markdown
│   ├── fix-titles.mjs                 # strip duplicate H1 (Starlight renders title: as h1)
│   └── sync-from-repos.js            # run all generators
└── .github/workflows/
    ├── on-rust-release.yml            # auto-triggered by rust repo release (event rust-release)
    ├── on-typescript-release.yml      # auto-triggered by typescript repo release
    ├── on-devcontainer-release.yml    # auto-triggered by devcontainer repo release
    └── on-action-release.yml          # auto-triggered by action repo release
```

**Key commands:**

```bash
pnpm dev              # localhost:4321
pnpm build && pnpm preview
pnpm sync-from-repos  # regenerate all docs (requires sibling repos at ../<name>)
RUST_REPO_PATH=/path/to/rust pnpm generate-docs:rust  # Rust docs from a specific checkout (e.g. a release tag)
```

**No duplicate H1:** Starlight renders `title:` frontmatter as `<h1>` — content body must not start with `# Heading`. Enforced by `fix-titles.mjs`.
