---
title: "Understanding the LGPL-3.0 License"
sidebar:
  label: "License (LGPL-3.0)"
---

The Rust crate is licensed under the [GNU Lesser General Public License v3.0 or later](https://www.gnu.org/licenses/lgpl-3.0.html) (SPDX: `LGPL-3.0-or-later`), like every **helpers4** project. The [plain-language summary](../../../typescript/legal/license/) written for the TypeScript packages applies here too: using helpers4 in personal, commercial or proprietary projects is allowed, and changes to helpers4 itself that you distribute stay under the LGPL.

## What is specific to Rust

Cargo compiles a dependency into your final binary (static linking). The LGPL-3.0 (section 4, "Combined Works") asks that whoever receives such a binary can replace helpers4 with a modified version and rebuild the combined work. In practice:

- **You publish your application's source** (open source, or shared with your customers): nothing more is needed, anyone can rebuild it against another version of helpers4.
- **You distribute a closed-source binary**: provide what is needed to relink it, for example the object files and build instructions, or otherwise make helpers4 replaceable, and keep the helpers4 license notice with the product.
- **Your software is only used internally or as a hosted service**: the license conditions are triggered by distributing the binary, not by running it.

This is a summary to help you find your way, not legal advice: read the license text, and ask a lawyer if your situation is not clear.
