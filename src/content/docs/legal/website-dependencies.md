---
title: "Website Dependencies"
description: "The open-source packages helpers4.dev is built with."
sidebar:
  label: "Website Dependencies"
  order: 2
---

This website is built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build), and uses the following open-source packages:

| Package | License | Description |
|---------|:-------:|-------------|
| [astro](https://astro.build) | MIT | Site builder the whole site is built on |
| [@astrojs/starlight](https://starlight.astro.build) | MIT | Documentation site framework, built on Astro |
| [starlight-sidebar-topics](https://github.com/HiDeoo/starlight-sidebar-topics) | MIT | Splits the sidebar into one topic per product (TypeScript, Rust, Dev Container, GitHub Actions, AI, Resources) |
| [starlight-theme-nova](https://github.com/ocavue/starlight-theme-nova) | MIT | Starlight theme used by this site |
| [@pagefind/default-ui](https://pagefind.app) | MIT | The site search |
| [helpers4](https://www.npmjs.com/package/helpers4) | LGPL-3.0-or-later | Used by the doc-generation scripts (sorting, markdown escaping, version comparison) |

:::info
These dependencies are used only to build and serve this website. They are **not** bundled with or required by any helpers4 package, crate, feature or action.
:::
