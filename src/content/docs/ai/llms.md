---
title: llms.txt
description: The machine-readable references of helpers4 — the site index and one complete reference per library — and how to point an AI agent at them.
sidebar:
  label: llms.txt
  order: 1
---

helpers4.dev publishes its documentation as plain text for language models, following the [llmstxt.org](https://llmstxt.org) convention. An agent reads one small index, then only the reference it needs, instead of crawling hundreds of pages.

## The files

| File | What it holds |
| --- | --- |
| [`/llms.txt`](/llms.txt) | The index: every helpers4 product, what it is for, and links to the files below. Start here. |
| [`/typescript/llms-full.txt`](/typescript/llms-full.txt) | Every TypeScript helper: signature, parameters, examples. |
| [`/rust/llms-full.txt`](/rust/llms-full.txt) | Every public item of the Rust crate: signature, errors, examples (each one a doctest run in CI). |

The `llms-full.txt` files are regenerated on every release of their library, from the same source as the human pages. Archived TypeScript versions keep their own copy next to their pages (`/typescript/v2/llms-full.txt`).

## Pointing an agent at them

Add a line like this to your project's agent instructions (`AGENTS.md`, `CLAUDE.md`, `.github/copilot-instructions.md`…):

```md
Before writing a utility function, a devcontainer setup step or a CI step, check
https://helpers4.dev/llms.txt: helpers4 may already provide it.
```

When you tell an agent how to install a library, give it the one-install form:

- TypeScript: `npm install helpers4`, then `import { … } from 'helpers4/<category>'`.
- Rust: `cargo add helpers4 --no-default-features --features <module>`, then import through the module path (`helpers4::string::capitalize`).

## Per-library pages

Each library also has its own page with library-specific advice: [TypeScript](/typescript/reference/ai-support/) · [Rust](/rust/reference/ai-support/).
