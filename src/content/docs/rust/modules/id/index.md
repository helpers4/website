---
title: "id"
description: "Unique identifiers without the uuid or ulid crates: Uuid (v4 random, v7 sortable by time), Ulid, and short URL-safe ids over an Alphabet."
sidebar:
  label: "≡ Overview"
  order: 0
---

Unique identifiers without the `uuid` or `ulid` crates: [`Uuid`](/rust/modules/id/uuid/) (v4 random, v7 sortable by
time), [`Ulid`](/rust/modules/id/ulid/), and short URL-safe ids over an [`Alphabet`](/rust/modules/id/alphabet/).

Randomness and time are **parameters**: `Uuid::v4(random_bytes)`, `Uuid::v7(unix_millis,
random_bytes)`, `Ulid::from_parts(unix_millis, random_bytes)` and `short_id(alphabet, len,
&mut rng)` are pure, so they are testable and work anywhere, `wasm32-unknown-unknown`
included. With the `random-entropy` feature, `Uuid::new_v4`, `Uuid::new_v7`, `Ulid::new` and
`new_short_id` take both from the operating system and the clock.

Ids made with a seeded [`Rng`](/rust/modules/random/rng/) are reproducible, not secret.

## Install

Cargo feature `id` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features id
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.9", default-features = false, features = ["id"] }
```

Import path: `helpers4::id`.

## Items

| Item | What it does |
| --- | --- |
| [`Alphabet`](/rust/modules/id/alphabet/) | The characters a short id is made of: between 2 and 256 distinct characters. |
| [`new_short_id`](/rust/modules/id/new_short_id/) | A short id of `len` characters drawn from an `Alphabet` with the operating system's random source, every character equally likely. |
| [`short_id`](/rust/modules/id/short_id/) | A short id of `len` characters drawn from an `Alphabet` with a seedable generator, every character equally likely. |
| [`Ulid`](/rust/modules/id/ulid/) | A ULID: 128 bits made of a 48-bit millisecond timestamp and 80 random bits, written as 26 characters of Crockford's base32 (`01ARYZ6S41TSV4RRFFQ69G5FAV`). |
| [`Uuid`](/rust/modules/id/uuid/) | A UUID (RFC 9562): 128 bits, written `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`. |

## Error types

Documented on the page of the helper that returns them.

| Type | Returned by |
| --- | --- |
| [`AlphabetError`](/rust/modules/id/alphabet/#error-type-alphabeterror) | [`Alphabet`](/rust/modules/id/alphabet/) |
| [`ParseUlidError`](/rust/modules/id/ulid/#error-type-parseuliderror) | [`Ulid`](/rust/modules/id/ulid/) |
| [`ParseUuidError`](/rust/modules/id/uuid/#error-type-parseuuiderror) | [`Uuid`](/rust/modules/id/uuid/) |
