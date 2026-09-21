---
title: "string"
description: "String manipulation and formatting helpers."
sidebar:
  order: 7
---

String manipulation and formatting helpers.

Cargo feature `string` (enabled by default) · import path `helpers4::string`

| Item | What it does |
| --- | --- |
| [`camel_case`](#camel_case) | Converts `s` to `camelCase`. |
| [`capitalize`](#capitalize) | Uppercases the first character of `s` and leaves the rest untouched. |
| [`dedent`](#dedent) | Strips the indentation shared by every non-blank line of `s`, and drops one leading and one trailing blank line. |
| [`escape_html`](#escape_html) | Escapes the HTML special characters `&`, `<`, `>`, `"` and `'`. |
| [`kebab_case`](#kebab_case) | Converts `s` to `kebab-case`. |
| [`pascal_case`](#pascal_case) | Converts `s` to `PascalCase`. |
| [`slugify`](#slugify) | Converts `s` into a lowercase, hyphen-separated slug safe for URLs. |
| [`snake_case`](#snake_case) | Converts `s` to `snake_case`. |
| [`truncate`](#truncate) | Shortens `s` to at most `max_chars` characters, ending with `suffix` when it was cut. |

## `camel_case`

```rust
pub fn camel_case(s: &str) -> String
```

Converts `s` to `camelCase`.

Words are split on any non-alphanumeric character and on case boundaries; an embedded run
of capitals is an acronym, so only its last letter starts the next word (`userID` becomes
`userId`).

### Examples

```rust
use helpers4::string::camel_case;

assert_eq!(camel_case("hello-world"), "helloWorld");
assert_eq!(camel_case("user_name"), "userName");
assert_eq!(camel_case("userID"), "userId");
assert_eq!(camel_case(""), "");
```

## `capitalize`

```rust
pub fn capitalize(s: &str) -> String
```

Uppercases the first character of `s` and leaves the rest untouched.

Unicode-aware: a character whose uppercase form is several characters
(`ß` -> `SS`) is expanded accordingly.

### Examples

```rust
use helpers4::string::capitalize;

assert_eq!(capitalize("hello world"), "Hello world");
assert_eq!(capitalize(""), "");
```

## `dedent`

```rust
pub fn dedent(s: &str) -> String
```

Strips the indentation shared by every non-blank line of `s`, and drops one leading and one
trailing blank line.

Lets a multi-line string literal be indented with the surrounding code without that
indentation leaking into the value. Indentation is counted in whitespace characters, and
lines are split on `'\n'` only (a `'\r'` stays on its line).

### Examples

```rust
use helpers4::string::dedent;

assert_eq!(dedent("\n    Hello\n      World\n"), "Hello\n  World");
assert_eq!(dedent("  a\n  b"), "a\nb");
```

## `escape_html`

```rust
pub fn escape_html(s: &str) -> Cow<'_, str>
```

Escapes the HTML special characters `&`, `<`, `>`, `"` and `'`.

Returns the input borrowed, without allocating, when there is nothing to escape. Use it to
embed untrusted text in HTML text nodes or quoted attribute values.

### Examples

```rust
use helpers4::string::escape_html;

assert_eq!(
    escape_html("<script>alert(\"xss\")</script>"),
    "&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;"
);
assert_eq!(escape_html("It's a <test> & more"), "It&#39;s a &lt;test&gt; &amp; more");
assert_eq!(escape_html("plain"), "plain");
```

## `kebab_case`

```rust
pub fn kebab_case(s: &str) -> String
```

Converts `s` to `kebab-case`.

Splits words the same way as [`camel_case`](#camel_case).

### Examples

```rust
use helpers4::string::kebab_case;

assert_eq!(kebab_case("helloWorld"), "hello-world");
assert_eq!(kebab_case("user_name"), "user-name");
assert_eq!(kebab_case(""), "");
```

## `pascal_case`

```rust
pub fn pascal_case(s: &str) -> String
```

Converts `s` to `PascalCase`.

Splits words the same way as [`camel_case`](#camel_case).

### Examples

```rust
use helpers4::string::pascal_case;

assert_eq!(pascal_case("hello-world"), "HelloWorld");
assert_eq!(pascal_case("user_name"), "UserName");
assert_eq!(pascal_case(""), "");
```

## `slugify`

```rust
pub fn slugify(s: &str) -> String
```

Converts `s` into a lowercase, hyphen-separated slug safe for URLs.

Letters and digits (Unicode included) are kept and lowercased, apostrophes are dropped, and
every other run of characters becomes a single hyphen; leading and trailing hyphens are
never produced. Diacritics are **not** stripped: `"café"` stays `"café"`.

### Examples

```rust
use helpers4::string::slugify;

assert_eq!(slugify("Hello World!"), "hello-world");
assert_eq!(slugify("  It's  a --- test "), "its-a-test");
assert_eq!(slugify("!!!"), "");
```

## `snake_case`

```rust
pub fn snake_case(s: &str) -> String
```

Converts `s` to `snake_case`.

Splits words the same way as [`camel_case`](#camel_case).

### Examples

```rust
use helpers4::string::snake_case;

assert_eq!(snake_case("helloWorld"), "hello_world");
assert_eq!(snake_case("Hello World"), "hello_world");
assert_eq!(snake_case(""), "");
```

## `truncate`

```rust
pub fn truncate(s: &str, max_chars: usize, suffix: &str) -> String
```

Shortens `s` to at most `max_chars` characters, ending with `suffix` when it was cut.

The suffix counts toward the limit. Lengths are in Unicode scalar values (`char`s), not
grapheme clusters. If the suffix alone does not fit, the first `max_chars` characters of the
suffix are returned.

### Examples

```rust
use helpers4::string::truncate;

assert_eq!(truncate("Hello, world", 8, "..."), "Hello...");
assert_eq!(truncate("short", 8, "..."), "short");
assert_eq!(truncate("Hello", 2, "..."), "..");
```

