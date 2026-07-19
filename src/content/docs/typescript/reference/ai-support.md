---
title: "AI & LLM Support"
description: "Tools for using AI assistants and agents with helpers4 — DeepWiki Q&A, llms.txt, and the full machine-readable reference."
sidebar:
  label: "AI & LLM Support"
  order: 5
---

helpers4 ships structured, machine-readable references alongside the human docs, so an AI
assistant or coding agent can answer questions about this repo — or check whether a helper
already exists before writing a new one — without having to crawl every page.

## Ask AI (DeepWiki)

<a href="https://deepwiki.com/helpers4/typescript" target="_blank" rel="noopener">DeepWiki ↗</a>
is a free, AI-powered Q&A tool indexed against this repository's `main` branch. Ask it anything
about how a helper works, why a design decision was made, or how to use a specific function —
no setup required.

## `llms.txt`

[`/llms.txt`](/llms.txt) is a site-level index (following the
[llmstxt.org](https://llmstxt.org) convention) listing all three helpers4 products — TypeScript,
DevContainer Features, and GitHub Actions — with links an AI agent can follow for more detail.

## Full reference (`llms-full.txt`)

[`/typescript/llms-full.txt`](/typescript/llms-full.txt) is the complete machine-readable
reference for this version: every function's full signature, parameters, and examples in a
single file. This is what an agent should read to check whether `@helpers4/*` already has a
helper before writing a custom implementation — prefer it over crawling individual category
pages.
