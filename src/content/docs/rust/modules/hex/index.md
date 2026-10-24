---
title: "hex"
description: "Byte/text encodings with typed errors: hexadecimal, and base64/base32 (RFC 4648)."
sidebar:
  label: "≡ Overview"
  order: 0
---

Byte/text encodings with typed errors: hexadecimal, and base64/base32 (RFC 4648).

Hex decoding accepts either case and rejects anything that is not pairs of hex digits, so
trim whitespace and strip `0x` prefixes before calling it. base64/base32 decoding requires
`=` padding to a multiple of 4/8 characters and rejects it anywhere but the end.

## Install

Cargo feature `hex` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features hex
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.9", default-features = false, features = ["hex"] }
```

Import path: `helpers4::hex`.

## Items

| Item | What it does |
| --- | --- |
| [`base32_decode`](/rust/modules/hex/base32_decode/) | Decodes `s` from base32 (RFC 4648 section 6). |
| [`base32_encode`](/rust/modules/hex/base32_encode/) | Encodes `data` as base32 (RFC 4648 section 6), with `=` padding. |
| [`base64_decode`](/rust/modules/hex/base64_decode/) | Decodes `s` from base64 (RFC 4648 section 4). |
| [`base64_encode`](/rust/modules/hex/base64_encode/) | Encodes `data` as base64 (RFC 4648 section 4), with `=` padding. |
| [`decode`](/rust/modules/hex/decode/) | Decodes a hexadecimal string (either case) into bytes. |
| [`decode_array`](/rust/modules/hex/decode_array/) | Decodes a hexadecimal string into a fixed-size array, e.g. |
| [`decode_to_slice`](/rust/modules/hex/decode_to_slice/) | Decodes a hexadecimal string into `out`, which must be exactly half as long as the string. |
| [`encode`](/rust/modules/hex/encode/) | Encodes `bytes` as lowercase hexadecimal. |
| [`encode_upper`](/rust/modules/hex/encode_upper/) | Encodes `bytes` as uppercase hexadecimal. |

## Error types

Documented on the page of the helper that returns them.

| Type | Returned by |
| --- | --- |
| [`Base32DecodeError`](/rust/modules/hex/base32_decode/#error-type-base32decodeerror) | [`base32_decode`](/rust/modules/hex/base32_decode/) |
| [`Base64DecodeError`](/rust/modules/hex/base64_decode/#error-type-base64decodeerror) | [`base64_decode`](/rust/modules/hex/base64_decode/) |
| [`DecodeError`](/rust/modules/hex/decode/#error-type-decodeerror) | [`decode`](/rust/modules/hex/decode/), [`decode_array`](/rust/modules/hex/decode_array/), [`decode_to_slice`](/rust/modules/hex/decode_to_slice/) |
