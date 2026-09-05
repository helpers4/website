---
title: "Website Dependencies"
sidebar:
  label: "Website Dependencies"
  order: 3
---

This documentation website is built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build), and uses the following open-source packages:

| Package | License | Description |
|---------|:-------:|-------------|
| [astro](https://astro.build) | MIT | Site builder the whole site is built on |
| [@astrojs/starlight](https://starlight.astro.build) | MIT | Documentation site framework, built on Astro |
| [starlight-sidebar-topics](https://github.com/HiDeoo/starlight-sidebar-topics) | MIT | Splits the sidebar into per-product sections (TypeScript / DevContainer / Actions) |
| [starlight-theme-nova](https://github.com/HiDeoo/starlight-theme-nova) | MIT | Starlight theme used by this site |
| [helpers4](https://www.npmjs.com/package/helpers4) | LGPL-3.0-or-later | Used internally by the doc-generation scripts (sorting, markdown escaping, version comparison) |

:::info
These dependencies are used only to build and serve this documentation website. They are **not** bundled with or required by the `@helpers4/*` library packages.
:::
