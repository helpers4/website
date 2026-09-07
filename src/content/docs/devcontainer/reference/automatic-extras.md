---
title: "Automatic Extras"
description: "Behaviors that come along for free with several helpers4 features — nothing to install, nothing to configure."
sidebar:
  label: "Automatic Extras"
  order: 2
---

Most helpers4 features do exactly one thing — install a tool, configure an editor setting. A
few behaviors, though, aren't tied to any single feature: they quietly fix problems that show
up *because* you're in a container at all, regardless of which features you picked. You never
install these on purpose — they come along automatically with the features listed below.

## Git config self-heal

When your editor connects to a devcontainer, it copies your host's `~/.gitconfig` into the
container and forwards your local SSH agent. Both are verbatim copies — no editor or terminal
knows that a path baked into your host's config might not exist inside this specific container.
Two things commonly break as a result:

- **A tool your Git config shells out to isn't at the same path.** A credential helper, a GPG
  program, `core.editor` — if your host resolves one of these to an absolute path (say, a
  `gh` installed via snap on a very specific version), that exact path usually doesn't exist in
  the container, even though the same tool is installed there too, just somewhere else.
- **Your commit-signing key file doesn't exist.** If you sign commits with an SSH key, the
  config still points at wherever that key lived on your host — a path the container never had.

Self-heal runs automatically every time you attach or reattach to the container, and does its
best to fix both:

- It rewrites a broken shell-out to just the command name, so it resolves via `$PATH` instead of
  a specific path — which also means it can't go stale again if that tool moves in a future
  update.
- It looks for your signing key under the usual local locations first. If it's not there, it
  tries to recover the matching public key directly from your forwarded SSH agent instead.

It's best-effort, and it never blocks you from working: if it can't fix something automatically
(most commonly the signing key, since GitHub Codespaces doesn't forward an SSH agent at all), it
prints exactly what's missing and why, instead of failing silently or breaking your attach.

There is nothing to turn on or configure — it's simply included whenever you use any of these
features:

[angular-dev](../features/angular-dev/) · [auto-header](../features/auto-header/) ·
[bitwarden-secrets-manager](../features/bitwarden-secrets-manager/) ·
[claude-dev](../features/claude-dev/) · [dotfiles-sync](../features/dotfiles-sync/) ·
[essential-dev](../features/essential-dev/) · [git-absorb](../features/git-absorb/) ·
[mistral-dev](../features/mistral-dev/) · [nub](../features/nub/) ·
[package-auto-install](../features/package-auto-install/) ·
[peon-ping](../features/peon-ping/) · [playwright-dev](../features/playwright-dev/) ·
[pnpm-store](../features/pnpm-store/) ·
[shell-history-per-project](../features/shell-history-per-project/) ·
[vite-plus](../features/vite-plus/)

(`cline-dev`, `copilot-dev`, `github-dev`, and `typescript-dev` don't currently include it.)
