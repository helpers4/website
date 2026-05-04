---
title: Philosophy
description: The guiding principles behind helpers4 GitHub Actions — why we build the way we do.
sidebar:
  label: "Philosophy"
  order: 1
---

# Philosophy

helpers4 GitHub Actions are reusable workflow components designed to remove boilerplate from CI/CD pipelines. This page explains the principles we follow so you know what to expect from every action we ship.

## Reusable across projects

An action should work as well in an external repository as in the helpers4 organization itself. We use our own actions in production — that's the best test of whether they're actually general-purpose.

Inputs are clearly documented, defaults are sensible, and the action fails loudly when something is wrong rather than silently producing a misleading green check.

## One action, one job

Each action has a single, clearly named purpose. `conventional-commits` validates commit messages. It doesn't also run lint, post comments, or manage labels — those are separate concerns.

This makes actions composable. You orchestrate them in your workflow file; they don't orchestrate each other.

## No hidden behavior

Composite actions (Bash scripts) are the primary implementation type. No JavaScript wrappers, no compiled binaries that you have to trust. The logic is readable, auditable, and easy to fork.

We use Bash strict mode (`set -euo pipefail`). If a step fails, the action fails — no silent swallowing of errors.

## Inputs over conventions

We prefer explicit inputs over convention-based magic. If an action needs a base SHA, you pass it as `base-sha`. If it needs a list of allowed commit types, you pass them as `types`. The action does not guess from environment variable names or Git history heuristics unless that fallback is documented.

## Fail fast, explain why

When validation fails, the output should tell you exactly what went wrong and where. A failing commit message check should name the offending commit, show the message, and explain what pattern it violated — not just exit with code 1.

## Open and auditable

All actions are licensed under LGPL-3.0. The source is on GitHub. You can read every line before deciding to use an action in your pipeline.

We believe that security in CI/CD starts with being able to audit what runs on your code.
