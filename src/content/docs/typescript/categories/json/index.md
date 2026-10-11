---
title: "Json Helpers"
sidebar:
  label: "≡ Overview"
  order: 0
---

Utility functions for working with json operations.

## Functions

| Function | Description |
|----------|-------------|
| [`parse`](./parse/) | Parses JSON permissively: strict JSON, JSONC \(the dialect of \`tsconfig\.json\` and VS Code's \`settings\.json\`, also known… |
| [`parseLines`](./parselines/) | Parses newline\-delimited JSON — one JSON value per line\. |
| [`parseSequence`](./parsesequence/) | Parses a JSON text sequence \(RFC 7464, \`application/json\-seq\`\): records that each start with the ASCII record separator… |
| [`parseStrict`](./parsestrict/) | Parses strict JSON \(RFC 8259\) — exactly what \`JSON\.parse\` accepts, nothing more\. |
| [`safeParse`](./safeparse/) | Parses JSON permissively like parse — strict JSON, JSONC \(HuJSON, JWCC\) and JSON5 — but returns \`null\` \(or \`fallback\`\)… |
| [`safeParseLines`](./safeparselines/) | Parses newline\-delimited JSON \(NDJSON, JSON Lines\) like parseLines, but returns \`null\` \(or \`fallback\`\) instead of throw… |
| [`safeParseSequence`](./safeparsesequence/) | Parses a JSON text sequence \(RFC 7464\) like parseSequence, but returns \`null\` \(or \`fallback\`\) instead of throwing on in… |
| [`safeParseStrict`](./safeparsestrict/) | Parses strict JSON like parseStrict, but returns \`null\` \(or \`fallback\`\) instead of throwing on invalid input\. |
| [`stringify`](./stringify/) | Serializes a value to JSON text — pretty\-printed with 2 spaces by default, or canonical\. |
| [`stringifyLines`](./stringifylines/) | Serializes values as newline\-delimited JSON — one compact JSON value per line, each followed by \`\\n\`\. |
| [`stringifySequence`](./stringifysequence/) | Serializes values as a JSON text sequence \(RFC 7464, \`application/json\-seq\`\): each value is written as the ASCII record… |

