---
title: "Understanding the AGPL-3.0 License"
sidebar:
  label: "License (AGPL-3.0)"
---

:::caution[Archived version]
This page describes the license of the archived **v1** release only. The current library
(v2 onward) is licensed under **LGPL-3.0-or-later** instead — see
**[the current license page](/typescript/legal/license/)**.
:::

The four v1 packages (`@helpers4/observable`, `@helpers4/promise`, `@helpers4/string`,
`@helpers4/url`) were licensed under the
[GNU Affero General Public License v3.0 (AGPL-3.0)](https://www.gnu.org/licenses/agpl-3.0.html).
Here's a practical summary.

## What is AGPL-3.0?

AGPL-3.0 is a **strong copyleft** license. Unlike LGPL, it has no linking exception: incorporating
AGPL-covered code into a larger work generally brings that combined work under AGPL too. It also
adds one clause GPL and LGPL don't have — **network use counts as distribution**: if you run a
modified version on a server and let users interact with it remotely (a SaaS product, for
example), you must offer them the corresponding source, even though you never shipped them a
binary.

## What you **can** do

- ✅ Use, study, and modify the source code
- ✅ Redistribute it, including commercially
- ✅ Run it, including as part of a network service

## What you **must** do

| Requirement | Details |
|---|---|
| **Keep notices** | Keep copyright and license notices for AGPL-covered code |
| **Provide AGPL text** | Include a copy of the AGPL license when distributing |
| **Publish modifications** | Modified AGPL-covered code, whether distributed as a binary or run as a network service, must have its corresponding source made available |
| **License the combined work** | Without a separate linking exception, a larger work that incorporates AGPL-covered code is generally itself subject to AGPL |

## What you **cannot** do

- ❌ Remove or alter copyright/license notices
- ❌ Re-license AGPL-covered code as proprietary
- ❌ Run a modified version as a network service without offering its source to users

## Why v2 moved to LGPL

This is the reason the license changed starting with v2: AGPL's lack of a linking exception made
the v1 packages a poor fit for closed-source or proprietary use — even just importing a function
could, under a strict reading, pull the consuming application under AGPL. LGPL-3.0-or-later was
chosen for v2 onward specifically to allow free use in proprietary and commercial projects while
keeping *modifications to the library itself* copyleft.

## Full license text

The complete license text is available at
[gnu.org/licenses/agpl-3.0](https://www.gnu.org/licenses/agpl-3.0.html).

:::info Disclaimer
This page is a human-readable summary and **not** a substitute for the
[full license text](https://www.gnu.org/licenses/agpl-3.0.html), and it does not constitute legal
advice. If in doubt, refer to the official license or consult legal counsel.
:::
