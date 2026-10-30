---
title: "isHostname"
sidebar:
  label: "isHostname"
description: "Checks whether a value is a syntactically valid DNS hostname (RFC 952, RFC 1123, RFC 3696 section 2)."
version: "3.1.10"
---

Checks whether a value is a syntactically valid DNS hostname (RFC 952, RFC 1123, RFC 3696 section 2).

Rules:
- ASCII only: letters, digits and hyphens, case-insensitive.
- Labels are separated by dots and are 1 to 63 characters long. A label never starts or ends with a hyphen.
- The whole name is at most 253 characters (not counting an optional trailing dot).
- A single label is valid (`localhost`).
- The last label (the TLD) is never all digits (RFC 3696), so `192.168.0.1` and `123` are not hostnames.
  Other labels may be all digits.
- A trailing dot is refused unless `allowTrailingDot` is `true`.
- `_` is refused unless `allowUnderscore` is `true`; then it is accepted anywhere in a label, including
  at the start (`_dmarc`) and the end. The hyphen rules still apply.
- Unicode labels are refused. Punycode (`xn--...`) is ASCII and accepted. To check an internationalised
  name, convert it first with `new URL('https://' + name).hostname`.
- Whitespace, a port, a path or a scheme (`example.com:80`, `a/b`, `http://x`) make it invalid.

It only checks the syntax: it does not resolve the name and does not check that the TLD exists.
It never throws and runs in linear time.

> Available since v3.1.10

## Import

```ts
import { isHostname } from '@helpers4/guard';
// or, from the all-in-one package (same code, one install):
import { isHostname } from 'helpers4/guard';
```

## Signature


```ts
isHostname(value: unknown, options: IsHostnameOptions): value is string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |
| `options` | `IsHostnameOptions` | Optional switches for the trailing dot and the underscore |

## Returns

`value is string` — `true` if value is a string that is a valid hostname

## Examples

### Validate a hostname typed by a user

Accepts DNS hostnames and single labels; refuses IPv4 addresses, ports and schemes.

```ts
isHostname('example.com')        // => true
isHostname('localhost')          // => true
isHostname('192.168.0.1')        // => false (numeric TLD)
isHostname('example.com:80')     // => false
isHostname('http://example.com') // => false
```

### Accept a trailing dot or an underscore on demand

Fully qualified names and service names such as _dmarc are refused unless the option is set.

```ts
isHostname('example.com.')                                  // => false
isHostname('example.com.', { allowTrailingDot: true })      // => true
isHostname('_dmarc.example.com')                            // => false
isHostname('_dmarc.example.com', { allowUnderscore: true }) // => true
```

### Check an internationalised name

Unicode labels are refused; convert them to punycode with URL first.

```ts
isHostname('bücher.example')                           // => false
isHostname(new URL('https://bücher.example').hostname) // => true
```

## Related Types

### `IsHostnameOptions`

Options for isHostname.

```ts
interface IsHostnameOptions {
  allowTrailingDot?: boolean;
  allowUnderscore?: boolean;
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/guard/isHostname.ts)
