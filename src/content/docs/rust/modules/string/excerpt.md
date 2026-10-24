---
title: "excerpt"
description: "Derives a short, readable excerpt from a longer text — for a card, header or preview where a full paragraph does not fit."
sidebar:
  label: "excerpt"
---

Derives a short, readable excerpt from a longer text — for a card, header or preview where a
full paragraph does not fit.

Unlike [`truncate`](/rust/modules/string/truncate/) (a mechanical cut at exactly `max_chars`), this prefers to cut at the end
of a whole sentence (`.`, `!` or `?`) when one fits within `max_chars`, even if that leaves
the result shorter than the limit. Only when no sentence fits does it fall back to the last
whole word before the limit — it never returns partial-word text.

Internal whitespace (line breaks, repeated spaces) is collapsed to single spaces first (see
[`squish`](/rust/modules/string/squish/)).

Known limitation: the sentence-boundary check is a simple heuristic (punctuation followed by
whitespace or the end of the text) — it does not special-case abbreviations (`"Mr."`) or
decimal numbers (`"3.14"`), which can be misread as a sentence end.

## Import

```rust
use helpers4::string::excerpt;
```

Cargo feature `string` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features string
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.8", default-features = false, features = ["string"] }
```

## Signature

```rust
pub fn excerpt(text: &str, max_chars: usize, ellipsis: &str) -> String
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `text` | `&str` | The text to excerpt. |
| `max_chars` | `usize` | The maximum length of the result, `ellipsis` included. |
| `ellipsis` | `&str` | Appended only when falling back to a word-boundary cut (a sentence-boundary cut never needs one). |

## Returns

`String` — The original text, squished, unchanged if already within `max_chars`; otherwise a shortened
version.

## Examples

```rust
use helpers4::string::excerpt;

assert_eq!(excerpt("A short game about ducks.", 200, "…"), "A short game about ducks.");

assert_eq!(
    excerpt("Build the biggest, best theme park ever seen. Can you make money?", 47, "…"),
    "Build the biggest, best theme park ever seen.",
);

assert_eq!(
    excerpt("This description has no punctuation at all so it must cut on a word", 30, "…"),
    "This description has no…",
);
```

## Source

[src/string/excerpt.rs](https://github.com/helpers4/rust/blob/v0.0.8/src/string/excerpt.rs#L53)
