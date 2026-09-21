---
title: "env"
description: "Dotenv (.env) helpers working on plain text: no file or process-environment access, so they are deterministic and easy to test."
sidebar:
  order: 3
---

Dotenv (`.env`) helpers working on plain text: no file or process-environment access, so
they are deterministic and easy to test. Read the file yourself, edit the content here, and
write it back.

Cargo feature `env` (enabled by default) · import path `helpers4::env`

| Item | What it does |
| --- | --- |
| [`InvalidKeyError`](#invalidkeyerror) | The variable name passed to `set` is not a valid name (`[A-Za-z_][A-Za-z0-9_]*`). |
| [`get`](#get) | Returns the value of `key` in dotenv `content`, or `None` when it is not assigned. |
| [`parse`](#parse) | Parses dotenv `content` into `(key, value)` pairs, in file order. |
| [`remove`](#remove) | Removes every assignment of `key` from dotenv `content` and returns the new content. |
| [`set`](#set) | Sets `key` to `value` in dotenv `content` and returns the new content. |

## `InvalidKeyError`

```rust
pub struct InvalidKeyError { /* private fields */ }
```

The variable name passed to [`set`](#set) is not a valid name (`[A-Za-z_][A-Za-z0-9_]*`).

### Methods

#### `key`

```rust
pub fn key(&self) -> &str
```

The rejected name.

## `get`

```rust
pub fn get(content: &str, key: &str) -> Option<String>
```

Returns the value of `key` in dotenv `content`, or `None` when it is not assigned.

When a key is assigned more than once the last assignment wins, like a shell sourcing the
file. See [`parse`](#parse) for the accepted syntax.

### Examples

```rust
use helpers4::env::get;

let content = "HOST=localhost\nPORT=80\nPORT=8080\n";
assert_eq!(get(content, "PORT").as_deref(), Some("8080"));
assert_eq!(get(content, "MISSING"), None);
```

## `parse`

```rust
pub fn parse(content: &str) -> Vec<(String, String)>
```

Parses dotenv `content` into `(key, value)` pairs, in file order.

Blank lines, `#` comments and lines that are not valid `KEY=value` assignments are skipped.
Supported: an optional `export ` prefix, bare values (a `#` after whitespace starts a
comment), `"double quoted"` values with `\n \r \t \" \\` escapes and `'single quoted'`
literals. Values are single-line. A key assigned twice appears twice.

### Examples

```rust
use helpers4::env::parse;

let vars = parse("# comment\nHOST=localhost\nexport NAME=\"my app\"  # trailing\n");
assert_eq!(
    vars,
    vec![
        ("HOST".to_string(), "localhost".to_string()),
        ("NAME".to_string(), "my app".to_string()),
    ]
);
```

## `remove`

```rust
pub fn remove(content: &str, key: &str) -> String
```

Removes every assignment of `key` from dotenv `content` and returns the new content.

Comments, blank lines and other variables are left untouched. Removing a key that is not
assigned returns the content unchanged.

### Examples

```rust
use helpers4::env::remove;

assert_eq!(remove("A=1\nB=2\nA=3\n", "A"), "B=2\n");
```

## `set`

```rust
pub fn set(content: &str, key: &str, value: &str) -> Result<String, InvalidKeyError>
```

Sets `key` to `value` in dotenv `content` and returns the new content.

The first existing assignment of `key` is replaced in place and any later ones are dropped;
when there is none, a new line is appended. Every other line (comments, blank lines, other
variables) is left untouched, and the replaced line keeps its line ending. `value` is quoted
and escaped only when needed, so [`get`](#get) reads it back exactly.

### Errors

Returns [`InvalidKeyError`](#invalidkeyerror) when `key` is not `[A-Za-z_][A-Za-z0-9_]*`.

### Examples

```rust
use helpers4::env::set;

let updated = set("# config\nHOST=old\nPORT=80\n", "HOST", "example.com")?;
assert_eq!(updated, "# config\nHOST=example.com\nPORT=80\n");

assert_eq!(set("A=1\n", "B", "two words")?, "A=1\nB=\"two words\"\n");
```

