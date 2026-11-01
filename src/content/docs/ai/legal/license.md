---
title: "Understanding the LGPL-3.0 License"
description: "What the LGPL-3.0 means for the helpers4 assistant plugins and skills."
sidebar:
  label: "License (LGPL-3.0)"
  order: 1
---

The helpers4 assistant plugins and skills ([helpers4/ai](https://github.com/helpers4/ai)) are licensed under the [GNU Lesser General Public License v3.0 or later (LGPL-3.0-or-later)](https://www.gnu.org/licenses/lgpl-3.0.html), like every helpers4 project. Here's a practical summary, including what is specific to skills.

## What is LGPL-3.0?

LGPL-3.0 is a **weak copyleft** license. It allows broad use (including commercial use), while requiring that changes to the LGPL-covered files remain under the LGPL when distributed.

## What you **can** do

- ✅ Install and use the plugin in personal, open-source, internal and commercial projects
- ✅ Study and modify the skills for your own use
- ✅ Redistribute them, modified or not, under the LGPL
- ✅ Contribute back to the project

## What you **must** do

| Requirement | Details |
|---|---|
| **Keep notices** | Keep the copyright and license notices of the skill files |
| **Provide LGPL text** | Include a copy of the LGPL when you distribute the skills |
| **Publish LGPL modifications** | If you distribute modified skills, share them under the LGPL |

## What is specific to skills

A skill is a set of instructions an assistant reads; it is not code linked into your program. The license covers the skill files themselves:

| Your situation | What it means |
|---|---|
| **You run a skill on your project** | Nothing to do: the LGPL obligations apply to the skill files, not to the project they are used on |
| **The skill proposes adding a helpers4 library** | That library comes with its own license (LGPL-3.0-or-later too): see the [TypeScript](/typescript/legal/license/) and [Rust](/rust/legal/license/) license pages |
| **You copy the skills into your own plugin or repository** | Keep their notices and the LGPL for those files, and share your changes to them if you distribute it |

## Full license text

The complete license text is available at [gnu.org/licenses/lgpl-3.0](https://www.gnu.org/licenses/lgpl-3.0.html) and in the [LICENSE](https://github.com/helpers4/ai/blob/main/LICENSE) file of the repository.

:::note[Disclaimer]
This page is a human-readable summary and **not** a substitute for the [full license text](https://www.gnu.org/licenses/lgpl-3.0.html), nor legal advice. If in doubt, refer to the official license or consult legal counsel.
:::
