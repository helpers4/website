---
title: Two kinds of repository
description: Why most helpers4 actions live in the helpers4/action monorepo and some in a repository of their own, and how to reference each.
sidebar:
  label: "Repositories"
  order: 2
---

helpers4 actions are published from two kinds of repository. Both kinds are listed together under [Actions](../../actions/conventional-commits/); only the `uses:` line differs.

| | Monorepo | Own repository |
| --- | --- | --- |
| Repository | [helpers4/action](https://github.com/helpers4/action), one folder per action | `helpers4/<name>`, `action.yml` at the root |
| `uses:` | `helpers4/action/<name>@v1` | `helpers4/<name>@v0` |
| Versions | one tag for every action of the repository | one tag per action, with a floating major (`v0`, `v1`) |
| GitHub Marketplace | no | yes |
| Today | conventional-commits, dispatch-with-fallback, pr-status-comment, setup-pnpm | [action-release](../../actions/action-release/) |

## Why two

The GitHub Marketplace lists one action per repository, and reads it from the `action.yml` at the root. An action inside a folder of a monorepo works with `uses:`, but cannot be published there.

An action that needs the Marketplace — to be found, or for its own release cycle and changelog — gets its own repository. `action-release` is the first one. The other actions may move the same way later; when one does, its page here says so.

## How to tell

Each action page starts with a note that names its repository and the exact `uses:` line, and the actions that have their own repository carry a **Marketplace** badge in the sidebar.
