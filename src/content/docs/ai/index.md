---
title: helpers4 for AI assistants
description: Make AI assistants and coding agents use helpers4 — machine-readable references (llms.txt) and ready-made assistant plugins.
sidebar:
  label: AI
  order: 0
---

An assistant that does not know a helper exists writes it again. helpers4 gives assistants two things so they use what is already there instead:

- **References they can read** — [`llms.txt` files](/ai/llms/): a site index and one complete reference per library, in plain text, kept in step with every release.
- **Plugins they can run** — [assistant plugins](/ai/plugins/claude-code/) with skills that scan a project and propose the helpers4 replacement, or audit a CI against the [helpers4 CI guide](/guides/ci/). Claude Code first; other assistants will follow.

## Quick Links

- **[llms.txt](/ai/llms/)** — what each file holds and how to point an agent at it
- **[Claude Code plugin](/ai/plugins/claude-code/)** — install it in two commands
- **[GitHub](https://github.com/helpers4/ai)** · **[License (LGPL-3.0)](/ai/legal/license/)**

## Which one do I need?

| You want to… | Use |
| --- | --- |
| Let any assistant check whether a helper already exists | [`/llms.txt`](/llms.txt), then the library's `llms-full.txt` |
| Replace hand-written code, devcontainer setup or CI steps in a project | the `replace-with-helpers4` skill |
| Review or write a GitHub Actions CI | the `ci-guidelines` skill |
| Ask questions about a repository | <a href="https://deepwiki.com/helpers4/typescript" target="_blank" rel="noopener">DeepWiki ↗</a> (TypeScript, Dev Container, GitHub Actions) |

## Contributing

Skills are plain `SKILL.md` folders in [helpers4/ai](https://github.com/helpers4/ai), so they can be packaged for other assistants without being rewritten. [Open an issue](https://github.com/helpers4/ai/issues) to ask for an assistant or a skill.
