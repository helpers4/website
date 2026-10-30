---
title: "Binary Helpers"
sidebar:
  label: "≡ Overview"
  order: 0
---

Utility functions for working with binary operations.

## Functions

| Function | Description |
|----------|-------------|
| [`createByteReader`](./createbytereader/) | Creates a cursor over bytes, for decoding binary formats: fixed\-size integers and floats, LEB128 varints \(signed ones z… |
| [`createByteWriter`](./createbytewriter/) | Creates a growable buffer to encode binary formats: the counterpart of createByteReader, with the same types, byte orde… |
| [`mediaTypeOf`](./mediatypeof/) | Finds the media type of an image from its first bytes \(its magic number\), whatever its name says: PNG, JPEG, GIF, WebP,… |
| [`mediaTypeOfPath`](./mediatypeofpath/) | Finds the media type of a file from the extension of its path or URL: images, fonts, web documents, scripts and styles,… |
| [`toHex`](./tohex/) | Writes bytes as lowercase hexadecimal, two digits per byte\. |
| [`zigzagDecode`](./zigzagdecode/) | The inverse of zigzagEncode: maps an unsigned 64\-bit zigzag value back to the signed integer\. |
| [`zigzagEncode`](./zigzagencode/) | Maps a signed 64\-bit integer to an unsigned one so that values near zero stay small \(\`0, \-1, 1, \-2\` become \`0, 1, 2, 3\`… |

