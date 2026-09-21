---
title: "AI & LLM Support"
description: "Tools for using AI assistants and agents with the helpers4 Rust crate — llms.txt and the full machine-readable reference."
sidebar:
  label: "AI & LLM Support"
  order: 5
---

helpers4 ships structured, machine-readable references alongside the human docs, so an AI assistant or coding agent can check whether a helper already exists before writing a new one — without having to crawl every page.

## `llms.txt`

[`/llms.txt`](/llms.txt) is a site-level index (following the [llmstxt.org](https://llmstxt.org) convention) listing all four helpers4 products — TypeScript, Rust, DevContainer Features and GitHub Actions — with links an AI agent can follow for more detail.

## Full reference (`llms-full.txt`)

[`/rust/llms-full.txt`](/rust/llms-full.txt) is the complete machine-readable reference for the documented version: every public item's full signature, description, errors and examples in a single file. This is what an agent should read to check whether `helpers4` already has a helper before writing a custom implementation — prefer it over crawling individual module pages.

Every example in it is a doctest that runs in the crate's CI, so an agent can treat them as verified usage.

## Telling an agent how to install it

Point it at the crate and, when only some helpers are needed, at the module's Cargo feature:

```sh
cargo add helpers4 --no-default-features --features string
```

Then import through the module path (`helpers4::string::capitalize`), never with a glob import: the same name can exist in several modules.

## docs.rs

The API documentation as compiled by rustdoc is also on [docs.rs/helpers4](https://docs.rs/helpers4), with every feature enabled.
