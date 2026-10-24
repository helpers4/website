---
title: "string"
description: "String manipulation and formatting helpers."
sidebar:
  label: "≡ Overview"
  order: 0
---

String manipulation and formatting helpers.

## Install

Cargo feature `string` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features string
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.9", default-features = false, features = ["string"] }
```

Opt-in sub-feature `string-diacritics` (adds the `unicode-normalization` dependency): [`remove_diacritics`](/rust/modules/string/remove_diacritics/).

Import path: `helpers4::string`.

## Items

| Item | What it does |
| --- | --- |
| [`camel_case`](/rust/modules/string/camel_case/) | Converts `s` to `camelCase`. |
| [`capitalize`](/rust/modules/string/capitalize/) | Uppercases the first character of `s` and leaves the rest untouched. |
| [`compare_natural`](/rust/modules/string/compare_natural/) | Compares two strings in natural order: runs of ASCII digits are compared by their numeric value, everything else character by character. |
| [`constant_case`](/rust/modules/string/constant_case/) | Converts `s` to `CONSTANT_CASE` (also known as `SCREAMING_SNAKE_CASE`). |
| [`dedent`](/rust/modules/string/dedent/) | Strips the indentation shared by every non-blank line of `s`, and drops one leading and one trailing blank line. |
| [`escape_html`](/rust/modules/string/escape_html/) | Escapes the HTML special characters `&`, `<`, `>`, `"` and `'`. |
| [`escape_regex`](/rust/modules/string/escape_regex/) | Escapes regular expression metacharacters (`. |
| [`excerpt`](/rust/modules/string/excerpt/) | Derives a short, readable excerpt from a longer text — for a card, header or preview where a full paragraph does not fit. |
| [`GlobSet`](/rust/modules/string/globset/) | A list of glob patterns with exclusions: a string matches when one pattern matches and no exclusion does, like the lines of a `.gitignore` read the other way round. |
| [`indent`](/rust/modules/string/indent/) | Prefixes every non-blank line of `s` with `prefix`. |
| [`kebab_case`](/rust/modules/string/kebab_case/) | Converts `s` to `kebab-case`. |
| [`levenshtein_distance`](/rust/modules/string/levenshtein_distance/) | The Levenshtein edit distance between `a` and `b`: the fewest single-character insertions, deletions or substitutions needed to turn one into the other. |
| [`levenshtein_similarity`](/rust/modules/string/levenshtein_similarity/) | Normalized `levenshtein_distance` between `a` and `b`, in `[0, 1]`. |
| [`match_glob`](/rust/modules/string/match_glob/) | Whether `text` matches a simple glob pattern in full: `*` matches any sequence of characters (including none), `?` exactly one character, everything else is literal. |
| [`pascal_case`](/rust/modules/string/pascal_case/) | Converts `s` to `PascalCase`. |
| [`remove_diacritics`](/rust/modules/string/remove_diacritics/) | Removes diacritical marks (accents) from `s`, e.g. |
| [`slugify`](/rust/modules/string/slugify/) | Converts `s` into a lowercase, hyphen-separated slug safe for URLs. |
| [`snake_case`](/rust/modules/string/snake_case/) | Converts `s` to `snake_case`. |
| [`squish`](/rust/modules/string/squish/) | Trims `s` and collapses every run of whitespace into a single space. |
| [`title_case`](/rust/modules/string/title_case/) | Capitalizes the first letter of every whitespace-separated word and lowercases the rest. |
| [`truncate`](/rust/modules/string/truncate/) | Shortens `s` to at most `max_chars` characters, ending with `suffix` when it was cut. |
| [`unescape_html`](/rust/modules/string/unescape_html/) | Decodes the HTML entities `&amp;`, `&lt;`, `&gt;`, `&quot;`, `&apos;`, `&#39;` and any numeric character reference (`&#65;`, `&#x41;`). |
| [`words`](/rust/modules/string/words/) | Splits `s` into its words, keeping their original casing. |
