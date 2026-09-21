---
title: "hex"
description: "Hexadecimal encoding and decoding with typed errors."
sidebar:
  label: "≡ Overview"
  order: 0
---

Hexadecimal encoding and decoding with typed errors.

Decoding accepts either case and rejects anything that is not pairs of hex digits, so trim
whitespace and strip `0x` prefixes before calling it.

## Install

Cargo feature `hex` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features hex
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.2", default-features = false, features = ["hex"] }
```

Import path: `helpers4::hex`.

## Items

| Item | What it does |
| --- | --- |
| [`decode`](/rust/modules/hex/decode/) | Decodes a hexadecimal string (either case) into bytes. |
| [`decode_array`](/rust/modules/hex/decode_array/) | Decodes a hexadecimal string into a fixed-size array, e.g. |
| [`decode_to_slice`](/rust/modules/hex/decode_to_slice/) | Decodes a hexadecimal string into `out`, which must be exactly half as long as the string. |
| [`encode`](/rust/modules/hex/encode/) | Encodes `bytes` as lowercase hexadecimal. |
| [`encode_upper`](/rust/modules/hex/encode_upper/) | Encodes `bytes` as uppercase hexadecimal. |
| [`DecodeError`](/rust/modules/hex/decodeerror/) | Why a string could not be decoded as hexadecimal. |
