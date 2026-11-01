---
title: "action-release — One Step to Release, 3,600 Lines of CI Gone"
date: 2026-11-01
author: Bérenger (baxyz)
tags: [action, release, ci, helpers4]
description: "Every helpers4 repository used to carry its own release machinery: version scripts, changelog scripts, publish scripts, a multi-job workflow. helpers4/action-release replaces all of it with one step that versions, writes the changelog, commits, tags, publishes to npm, crates.io and JSR, and can be run again when something fails halfway."
---

Releasing a library sounds like one command. In practice it is a dozen steps that must happen in the right order, and a CI that grew them one by one. [helpers4/action-release](/action/actions/action-release/) puts those steps in a single GitHub Action. This post is about why, and about what it removed from the helpers4 repositories.

---

## What a release used to cost

The [TypeScript library](/typescript/) publishes about thirty npm packages from one source, under one version. Its release was a multi-job workflow and two script folders, `scripts/version/` and `scripts/publish/`, with their own tests: a commit analyzer, a version manager, a changelog generator, an `@since` injector, a pre-release validator, a transaction manager to resume a half-done publish.

All of it worked. None of it was what the library is about, and the [Rust crate](/rust/) needed the same thing again with `cargo` instead of `npm`: a version-bump pull request, a changelog, a tag, a publish. Two repositories, two release systems, the same bugs fixed twice.

## One step

```yaml
- uses: helpers4/action-release@v0
  with:
    bump: ${{ inputs.bump }}
    dry-run: ${{ inputs.dry-run }}
    app-id: ${{ vars.HELPERS4_BOT_ID }}
    app-key: ${{ secrets.HELPERS4_BOT_KEY }}
```

After your own checks, that step runs five stages:

1. **prepare** — the next version from the last tag and the Conventional Commits since then; the version written in `package.json`, `Cargo.toml`, `jsr.json`; `CHANGELOG.md` updated, with your hand-written `[Unreleased]` summary on top of the generated list; `@since next` markers replaced by the version.
2. **verify** — your build, then `npm publish --dry-run`, `cargo publish --dry-run`, `jsr publish --dry-run`.
3. **commit** — one signed release commit on `main` through the API, as a GitHub App allowed to bypass the branch rules; the tag; a draft Release.
4. **publish** — each registry with its own tool and OIDC trusted publishing: no npm token, no crates.io token in the repository.
5. **finalize** — the Release goes public.

Two rules make it safe to use:

- **Nothing is written until everything has passed.** If a build or a dry-run fails, there is no commit, no tag, nothing to clean up.
- **Running it again finishes the job.** If npm publishes and crates.io refuses, fix the trusted publisher and re-run: what a registry already serves is skipped.

`dry-run: true` does all of it except the writes, and the job summary shows the version, why it was chosen, the files the commit would change and the Release notes.

## What it removed

In [helpers4/typescript](https://github.com/helpers4/typescript), the switch deleted **3,663 lines** across 25 files: both script folders and their tests are gone, and `release.yml` went from 419 lines to 191. The remaining workflow is the gates a pull request already runs, then the action with one target:

```yaml
targets: |
  - npm: build/*
    build: pnpm run build && pnpm coherency
```

`build/*` means "every package the build writes": the action runs the build once, finds the packages, dry-runs them, and publishes them in dependency order — categories before the bundle that depends on them.

In [helpers4/rust](https://github.com/helpers4/rust), the version-bump pull request disappeared: no more release branch to review and merge before each release. `release.yml` went from 292 lines to 209, and what is left is the crate's own supply-chain work (attestation, Sigstore bundle, SBOM), not release mechanics. The one Rust-specific input is `since-json: api-since.json`.

The two repositories now release the same way, and a fix to the release lands in one place.

## Why a repository of its own

The other helpers4 actions live together in [helpers4/action](https://github.com/helpers4/action) (`helpers4/action/setup-pnpm@v1`, …). action-release does not: the GitHub Marketplace lists one action per repository, read from an `action.yml` at its root. A release tool is something people search for, so it gets its own repository and its own version line (`v0` today). The [GitHub Actions section](/action/reference/repositories/) explains both kinds; more actions may follow the same path.

## Version 0, honestly

action-release is at `0.x`. It releases helpers4/typescript, helpers4/rust and itself, and its end-to-end runs go through a public sandbox repository, but its inputs may still change before 1.0. Pin it by commit SHA, as the helpers4 repositories do, and let Dependabot move it.

Its limits are written down: one version per repository, GitHub-hosted runners only (trusted publishing requires them), and the first version of a package published by hand, since npm and crates.io only accept a trusted publisher for a package that exists.

## Try it

The [action page](/action/actions/action-release/) has the full workflow, the one-time setup (a GitHub App and one trusted publisher per registry) and every error message with its fix. If your CI has a `scripts/release/` folder, a dry-run will tell you quickly whether it can go.
