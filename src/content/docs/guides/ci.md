---
title: Building a good CI
description: Guidelines for a GitHub Actions CI that is secure, fast and readable — structure, required checks, pinning, permissions, releases and reporting.
sidebar:
  label: "Building a good CI"
  order: 2
---

These guidelines come from the pipelines of the helpers4 repositories ([typescript](https://github.com/helpers4/typescript), [rust](https://github.com/helpers4/rust), [devcontainer](https://github.com/helpers4/devcontainer), [action](https://github.com/helpers4/action)). Use them as a checklist; the examples link to the real files.

## 1. Structure: entry points and reusable jobs

Keep a few **entry-point workflows** that decide *when* things run, and move *what* runs into **reusable jobs** (`workflow_call`).

| Entry point | Trigger | Purpose |
| ----------- | ------- | ------- |
| `pr-validation.yml` | `pull_request` | Build, test, lint, type-check, security on every PR. |
| `main-validation.yml` | `push` to `main` | The same suite after merge; feeds coverage reports. |
| `release.yml` | `workflow_dispatch` | Manual, guarded release. |
| `scorecard.yml` | schedule | Supply-chain posture (OpenSSF Scorecard). |

Each concern lives in a `job-*.yml` file (`job-build`, `job-tests`, `job-lint`, `job-security`, …) with typed `inputs` and `outputs`. The entry points just compose them, so the same job runs identically on a PR, on `main` and before a release.

Two practical notes:

- Reusable workflow calls (`uses:`) only accept **literal values** in `with:` — top-level `env` is not available there.
- Skip work that cannot change the result with `paths-ignore` (docs, licence, issue templates).

## 2. One required check

Branch rulesets should require **one** stable check, not every job. Add an aggregator job that depends on all the others and fails if any of them failed or was cancelled:

```yaml
required:
  name: Required checks passed
  runs-on: ubuntu-latest
  if: always()
  needs: [build, test, lint, type-check, security]
  steps:
    - name: Fail if any required job failed or was cancelled
      run: |
        if [[ "${{ contains(needs.*.result, 'failure') }}" == "true" ]]; then exit 1; fi
        if [[ "${{ contains(needs.*.result, 'cancelled') }}" == "true" ]]; then exit 1; fi
```

The job name never changes, even when a job later fans out into a matrix — so the ruleset never needs editing. `if: always()` matters: without it, a skipped dependency would skip the aggregator and GitHub would treat the check as passing.

## 3. Least privilege

- Set `permissions: contents: read` at the **top of the workflow**, and widen it per job only where needed (for example `pull-requests: write` for a job that comments).
- Pin third-party actions to a **full commit SHA**, not a tag — tags can be moved. Let Dependabot keep the SHAs current.
- Prefer **OIDC** over long-lived secrets (npm provenance, cloud credentials).
- Use a **GitHub App token** instead of the default `GITHUB_TOKEN` when a workflow must push commits or tags and trigger downstream workflows.
- Lint your workflows too: [zizmor](https://github.com/zizmorcore/zizmor) catches injection and over-broad permissions.

## 4. Speed

- Use `concurrency` with `cancel-in-progress: true`, keyed on the PR number, so a new push cancels the stale run.
- Run independent jobs in parallel; only chain what truly depends on an earlier output (for example, build artifacts).
- Keep the PR run proportional: run **mutation testing only on the files a PR changes**, and the full, slow run on `main` to refresh the baseline.
- Pin runtime versions in one place per workflow and bump them together.

## 5. Security checks

A solid baseline, used across the helpers4 repositories:

- **Dependency audit** on every PR (`pnpm audit`, OSV scanner).
- **Dependency review** on pull requests.
- **OpenSSF Scorecard** on a schedule, with the badge in the README.
- **Fuzzing** where the code parses untrusted input (ClusterFuzzLite).
- **Commit-message validation** so the changelog can be generated: the [`conventional-commits`](/action/) action.

## 6. Releases

- Make releases a **manual, guarded** `workflow_dispatch`: a `repo-guard` job refuses to run on forks or from the wrong branch, and a `dry-run` input exercises everything except push and publish.
- Make them **resumable**: if publishing half-succeeded, re-running must skip what is already on the registry.
- Publish with **provenance** (npm OIDC, SLSA attestation) and attach the attestation to the release for Scorecard's *Signed-Releases* check.
- Chain downstream work (such as this website's docs) with a repository-dispatch event rather than a manual step.

## 7. Readable results

A CI is a user interface. People read it when something failed, so make that moment fast:

- Name jobs and steps for what they check, not how (`Check conventional commits`, not `run script`).
- Write failures as annotations (`::error::...`) with the fix in the message.
- Post one PR comment that is **updated in place**, not a new comment per push.
- Publish coverage and mutation reports where reviewers will actually look (Codecov, the Stryker dashboard).
- Use the job summary (`$GITHUB_STEP_SUMMARY`) for tables, not log scrolling.

## Checklist

- [ ] Entry points + reusable `job-*` workflows
- [ ] A single `Required checks passed` job, set as the required check
- [ ] Top-level `permissions: contents: read`; actions pinned by SHA
- [ ] `concurrency` cancels superseded runs
- [ ] Audit, dependency review and Scorecard enabled
- [ ] Conventional commits validated
- [ ] Guarded, resumable, provenance-signed releases
- [ ] Failures explain themselves; reports live where reviewers look

## Reusable building blocks

Rather than rewriting these, use the [helpers4 GitHub Actions](/action/) — for example `setup-pnpm` and `conventional-commits` — and the shared workflows in the [`.github` repository](https://github.com/helpers4/.github).
