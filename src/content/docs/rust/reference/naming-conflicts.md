---
title: "Names and imports"
description: "The same name can exist in several modules. This page explains how to import them."
sidebar:
  label: "Names and imports"
  order: 4
---

helpers4 is one crate with one module per category. A deliberate consequence is that **the same function name can exist in several modules** when the operation makes sense for different kinds of data: merging them into one generic function would make the types less precise and the behavior harder to predict.

## Names that exist in more than one module

*Generated from the documented version, so it always matches it.*

No two public items share a name yet. The rule below applies as soon as one does.

## Importing

Import through the module path, and do not glob-import a module (`use helpers4::string::*;`): the next name collision would then be yours to debug.

```rust
use helpers4::string::capitalize;

assert_eq!(capitalize("hello"), "Hello");
```

## Resolving a conflict

When you need two helpers with the same name in one file, rename at the import site with `as`. A suffix naming the module keeps them apart at a glance:

```rust
use helpers4::string::truncate as truncate_text;

assert_eq!(truncate_text("A very long title", 10, "..."), "A very ...");
```

The same applies to a name that also exists in the standard library or in another crate you use.
