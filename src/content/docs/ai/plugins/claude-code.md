---
title: Claude Code plugin
description: The helpers4 plugin for Claude Code — skills that replace hand-written code with helpers4 and audit a GitHub Actions CI.
sidebar:
  label: Claude Code
  order: 1
---

The `helpers4` plugin adds helpers4 skills to [Claude Code](https://claude.com/claude-code). It is distributed from the [helpers4/ai](https://github.com/helpers4/ai) marketplace.

## Install

```text
/plugin marketplace add helpers4/ai
/plugin install helpers4@helpers4
```

## Skills

| Skill | What it does |
| ----- | ------------ |
| `replace-with-helpers4` | Scans your project for code, devcontainer setup or CI steps that helpers4 already provides — TypeScript helpers, Rust crate helpers, Dev Container features, GitHub Actions — and proposes the replacement, without adding a dependency the project does not need. |
| `ci-guidelines` | Audits a GitHub Actions CI against the [helpers4 CI guide](/guides/ci/) — entry points and reusable jobs, one required check, least privilege, pinned actions, security checks, guarded releases — and proposes fixes workflow by workflow. |

Both skills **report first and edit only after you agree**, and never commit unless you ask. Ask in plain words ("can helpers4 replace some of this code?", "review my CI") or call a skill by name.

## How the skills stay current

The skills carry tables of what to look for, but the source of truth is the live index: each skill reads [`/llms.txt`](/llms.txt) first. A helper added in a release is found without updating the plugin.

Writing a new helper for a library is a different job: that skill (`add-helper`) lives in each library's own repository.

## Other assistants

Claude Code is the first assistant supported. The skills are plain `SKILL.md` folders, so packaging them for other assistants needs no rewrite — [open an issue](https://github.com/helpers4/ai/issues) for the one you use.
