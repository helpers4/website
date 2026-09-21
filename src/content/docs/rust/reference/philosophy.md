---
title: Philosophy
description: The guiding principles behind the helpers4 Rust crate — why we build the way we do.
sidebar:
  label: "Philosophy"
  order: 1
---

helpers4 for Rust is a collection of helpers built around a few firm convictions. This page explains the reasoning behind our design decisions, so you know what to expect and what we expect from contributions.

## One thing, done well

Each helper does exactly one thing. No Swiss-army functions, no optional behavior controlled by a flag that silently changes the meaning of the result. If you call `slugify`, you get a slug — nothing more, nothing hidden.

This makes every helper predictable, easy to understand at a glance, and easy to replace if your needs change.

## You only pay for what you use

The crate is one package with one Cargo feature per module. Enable the modules you need and nothing else is compiled:

```sh
cargo add helpers4 --no-default-features --features string,hex
```

The linker already drops the code you never call, so the feature flags are about **compile time and dependencies**: a module that needs a third-party crate gets its own feature and the dependency is optional. That is why the default build has **zero third-party dependencies** — and why a supply-chain problem in someone else's crate cannot reach you through helpers4 unless you opt into the module that uses it.

## The standard library is not competition

We don't wrap what `std` already provides. `chunks`, `windows`, `partition`, `zip`, `dedup`, `flatten` — if the standard library has it, the crate does not. A helper that duplicates `std` is refused in review, and one that later becomes redundant is removed rather than kept for convenience.

## Explicit is better than ambient

Code that reads the clock or the process environment is hard to test and easy to get subtly wrong, so helpers take those as **inputs**:

- `cache::ExpiringMap` receives `now`; there is no hidden `Instant::now()` and no test that has to sleep.
- `env` edits the *text* of a `.env` file; reading and writing the file stays with the caller.
- `time::unix_now` returns a `Result`: a clock set before 1970 must not become a silent `0`, because an expiry compared against `0` would look valid forever.

## Errors are values you can match on

A helper that can fail returns a `Result` with a typed error (`HostnameError`, `DecodeError`, `InvalidKeyError`, …), never a `bool` that hides why and never a panic. `unwrap`, `expect` and `panic!` are denied outside tests by the linter, and `unsafe` is forbidden in the crate.

## Tested to the extreme

We require 100% coverage on lines, functions and regions — no exceptions, and test files are excluded from the measurement rather than held to it.

Beyond coverage, every helper faces a gauntlet:

- **Unit tests** — every branch and edge case, in a file next to the implementation
- **Property-based tests** (proptest) — invariants verified against thousands of randomly generated inputs, including model-based tests that replay random operations against a reference implementation
- **Doc tests** — every example in the documentation is compiled and run
- **Mutation testing** (cargo-mutants) — if a mutant survives, the tests are not good enough; surviving mutants that are provably equivalent are excluded explicitly, with the reason in a comment
- **Benchmarks** (criterion) — compared with the base branch on the same runner for every pull request, non-blocking
- **Lints** — `clippy` in pedantic mode, warnings denied
- **Dependency audit** (`cargo-deny`) — advisories, yanked crates, licenses and sources, on every pull request and release
- **Feature matrix** — every combination of Cargo features must compile

Some helpers are security-relevant (`net::is_public_ip`, the address check of an SSRF guard). Those are written from the specification (the IANA registries, not from memory), checked against it, and reviewed before they are presented as safe to rely on — and their documentation states what they cannot know.

If a helper can't be fully tested, it doesn't belong here.

## Documentation is part of the code

Every public item carries rustdoc with a runnable example, and the pages of this site are generated from it. Documentation written after the fact drifts; documentation that is compiled and run cannot.

## Names may repeat

The same operation on a different kind of data keeps the same name: two modules can each have their own function of that name when the operation differs by data type. Callers always import through the module path, and rename at the import site when they need both — see [Names and imports](./naming-conflicts/).

## Pragmatism over theoretical purity

If a rule makes the code worse in a specific case, the rule bends and the reason is written down. The mutation tool's exclusion list, the documented limits of each helper (`ExpiringMap` has no capacity bound; `is_public_ip` cannot know a provider's private addresses) and the honest "what this cannot do" sections are the same principle: say what the helper guarantees and what it does not.

## Open source, genuinely

helpers4 is licensed under the LGPL-3.0-or-later and developed in the open, with changes proposed as pull requests. See [License](../legal/license/) for a practical summary and [Contributing](./contributing/) to take part.
