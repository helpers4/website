---
title: Getting Started
sidebar:
  order: 1
---

## Installation

```sh
cargo add helpers4
```

That enables every module. Each module is a Cargo feature of the same name, so to take only some of them, turn the default features off and name the ones you want:

```sh
cargo add helpers4 --no-default-features --features string,hex
```

Every [module page](./modules/) shows the command for its feature and the matching `Cargo.toml` line with the current version. The crate is pre-1.0: pin the exact version and read the [changelog](./reference/changelog/) before upgrading.

## Quick Start

Import through the module path:

```rust
use helpers4::array::{group_by, unique};
use helpers4::hex;
use helpers4::string::{slugify, truncate};

assert_eq!(slugify("Hello, World!"), "hello-world");
assert_eq!(truncate("A very long title", 10, "..."), "A very ...");
assert_eq!(unique(&[1, 2, 1, 3, 2]), vec![1, 2, 3]);
assert_eq!(hex::encode(&[0xde, 0xad, 0xbe, 0xef]), "deadbeef");

let by_parity = group_by(&[1, 2, 3, 4, 5], |n| n % 2 == 0);
assert_eq!(by_parity[&true], vec![2, 4]);
```

Helpers take borrowed data (`&str`, slices) and return new values: nothing is mutated unless the documentation says so.

## Errors

A helper that can fail returns a `Result` with an error enum you can match on, never a bare `bool` that hides the reason:

```rust
use helpers4::hex::{decode, DecodeError};
use helpers4::net::{is_valid_hostname, HostnameError};

assert_eq!(decode("abc"), Err(DecodeError::OddLength));
assert_eq!(is_valid_hostname("-bad.example"), Err(HostnameError::HyphenEdge));
```

Error enums are `#[non_exhaustive]`: new variants can be added without breaking your `match`, so keep a wildcard arm.

## Names and imports

Names repeat across modules on purpose, so always import through the module path rather than glob-importing a module (`use helpers4::string::*;` would make the next name collision your problem). When two helpers from different modules share a name, rename at the import site with `as`:

```rust
use helpers4::string::truncate as truncate_text;
```

See [Names and imports](./reference/naming-conflicts/) for the list of names that exist in more than one module.

## Explicit inputs

Nothing reads the time or the process environment behind your back:

- `cache::ExpiringMap` takes `now` as an argument, so it is trivially testable and works with unix seconds, milliseconds or an `Instant`.
- `env` works on the *text* of a `.env` file, not on the process: you read the file, edit the content, and write it back.
- `time::unix_now` is fallible: a clock set before 1970 is an error, not a silent `0` (which would make every expiry look valid).

## Platforms

| Target | Support | Notes |
|---|:---:|---|
| Linux, macOS, Windows | ✅ | Tested in CI on stable, beta and the minimum supported Rust version |
| `wasm32-unknown-unknown`, `wasm32-wasip1` | ✅ builds | Checked to compile; not run there. `time::unix_now` needs a clock, which `wasm32-unknown-unknown` does not have |
| `no_std` | ❌ | The crate uses `std` |

The minimum supported Rust version is shown on the [modules overview](./modules/).

## Quality Standards

Every helper ships with:

- **100% code coverage** (lines, functions and regions), enforced in CI
- **Unit tests** next to the implementation, and **property-based tests** (proptest): invariants checked against thousands of random inputs
- **Doc tests** — every example on the module pages is a test that runs on each change
- **Mutation testing** (cargo-mutants) — tests are checked to catch regressions, not just to execute the code
- **Benchmarks** (criterion) where speed matters, compared with the base branch on every pull request
- **Lints** — `clippy` in pedantic mode with `unwrap`, `expect` and `panic` denied outside tests, and `unsafe` forbidden
- **Dependency and license audit** (`cargo-deny`) on every pull request and release
- **Traceable releases** — published from CI with short-lived credentials (crates.io trusted publishing), with a build provenance attestation attached to each GitHub release

## Next Steps

- Browse the [Modules](./modules/)
- Read the [Philosophy](./reference/philosophy/)
- View the [GitHub repository](https://github.com/helpers4/rust)

## Contributing

Found a bug? Want to add a helper? Read [Contributing](./reference/contributing/).

## License

LGPL-3.0-or-later — see [License](./legal/license/) for a summary and [LICENSE](https://github.com/helpers4/rust/blob/main/LICENSE) for the full text.
