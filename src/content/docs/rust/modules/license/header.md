---
title: "header"
description: "The two-line source header that carries a copyright notice and an SPDX license identifier."
sidebar:
  label: "header"
---

The two-line source header that carries a copyright notice and an SPDX license identifier.

```text
Copyright (C) 2025 Jane Doe
SPDX-License-Identifier: MIT
```

The text has no comment marker, so prefix each line for the language of the file
(`// `, `# `, ...). The [REUSE](https://reuse.software) specification and most license
scanners read exactly these two lines. Nothing is validated: `years` can be `"2025"` or
`"2020-2025"`, and `expression` any SPDX expression (see
[`Expression`](/rust/modules/license/expression/)).

## Import

```rust
use helpers4::license::header;
```

Cargo feature `license` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features license
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["license"] }
```

## Signature

```rust
pub fn header(holder: &str, years: &str, expression: &str) -> String
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `holder` | `&str` | The copyright holder, such as a name or an organization. |
| `years` | `&str` | The year or range of years of the notice. |
| `expression` | `&str` | The SPDX license identifier or expression. |

## Returns

`String` — The two lines, without a trailing newline.

## Examples

```rust
use helpers4::license::header;

let header = header("Jane Doe", "2025", "MIT OR Apache-2.0");
assert_eq!(header, "Copyright (C) 2025 Jane Doe\nSPDX-License-Identifier: MIT OR Apache-2.0");
let commented: Vec<String> = header.lines().map(|line| format!("// {line}")).collect();
assert_eq!(commented[1], "// SPDX-License-Identifier: MIT OR Apache-2.0");
```

## Source

[src/license/header.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/license/header.rs#L39)
