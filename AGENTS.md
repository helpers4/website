# AGENTS.md — website

→ [Org-wide rules](https://github.com/helpers4/.dev/blob/main/AGENTS.md): restrictions · commit format · license headers

## This Repository

**Purpose:** Astro + Starlight docs site at **helpers4.dev** (Cloudflare Pages).
**Stack:** Astro 6 · Starlight · starlight-theme-nova · pnpm · no workspaces

```text
website/
├── src/content/docs/
│   ├── typescript/    # ⚠ GENERATED — do not edit by hand (except typescript/v1/, a frozen
│   │                  #   pre-monorepo archive with no generator source — hand-authored on
│   │                  #   purpose, see src/data/versions.json)
│   ├── devcontainer/  # ⚠ GENERATED — do not edit by hand
│   └── action/        # ⚠ GENERATED — do not edit by hand
├── public/
│   ├── llms.txt                # hand-authored site index (llmstxt.org spec) — 3 products,
│   │                            # H2 per product, edit by hand when a product is added/removed
│   └── typescript/<slug>/llms-full.txt  # ⚠ GENERATED — copy of typescript's own
│                                # build/all/llms.txt (full signatures/params/examples), one per
│                                # version slot (typescript/, typescript/next/, typescript/vN/ —
│                                # same DOCS_TARGET as the doc tree it sits next to)
├── scripts/
│   ├── generate-typescript-docs.js    # JSDoc → Markdown + publishes llms-full.txt
│   ├── generate-devcontainer-docs.js  # feature READMEs → Markdown
│   ├── generate-action-docs.js        # action README → Markdown
│   ├── fix-titles.mjs                 # strip duplicate H1 (Starlight renders title: as h1)
│   └── sync-from-repos.js            # run all generators
└── .github/workflows/
    ├── on-typescript-release.yml      # auto-triggered by typescript repo release
    ├── on-devcontainer-release.yml    # auto-triggered by devcontainer repo release
    └── on-action-release.yml          # auto-triggered by action repo release
```

**Key commands:**

```bash
pnpm dev              # localhost:4321
pnpm build && pnpm preview
pnpm sync-from-repos  # regenerate all docs (requires sibling repos at ../<name>)
```

**No duplicate H1:** Starlight renders `title:` frontmatter as `<h1>` — content body must not start with `# Heading`. Enforced by `fix-titles.mjs`.
