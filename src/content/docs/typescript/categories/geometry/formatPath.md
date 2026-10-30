---
title: "formatPath"
sidebar:
  label: "formatPath"
description: "Writes path commands back as SVG path data: letters and numbers separated by single spaces, numbers rounded to `precisi…"
version: "3.1.10"
---

Writes path commands back as SVG path data: letters and numbers separated by single spaces,
numbers rounded to `precision` decimals with the trailing zeros dropped (`-0` is written `0`).

> Available since v3.1.10

## Import

```ts
import { formatPath } from '@helpers4/geometry';
// or, from the all-in-one package (same code, one install):
import { formatPath } from 'helpers4/geometry';
```

## Signature


```ts
formatPath(commands: readonly PathCommand[], precision: number): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `commands` | `readonly PathCommand[]` | The commands, as parsePath returns them |
| `precision` | `number` | Decimals kept per number\. Defaults to \`6\` |

## Returns

`string` — The path data

## Examples

### Write commands back

Numbers are rounded and written with single spaces.

```ts
formatPath([{ type: 'M', values: [0, 0.5] }, { type: 'L', values: [10, 1 / 3] }]) // => 'M0 0.5 L10 0.333333'
```

## Related Types

### `PathCommand`

One command of SVG path data: its letter (uppercase is absolute, lowercase relative to the
current point) and its numbers, as written in the `d` attribute.

| Letter | Command | Numbers |
| --- | --- | --- |
| `M` `L` `T` | move, line, smooth quadratic | `x y` |
| `H` `V` | horizontal, vertical line | `x` or `y` |
| `C` | cubic Bézier | `x1 y1 x2 y2 x y` |
| `S` `Q` | smooth cubic, quadratic | `x2 y2 x y` or `x1 y1 x y` |
| `A` | elliptical arc | `rx ry rotation large-arc sweep x y` |
| `Z` | close the subpath | none |

```ts
interface PathCommand {
  type: string;
  values: number[];
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/geometry/formatPath.ts)
