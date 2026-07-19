---
title: "Color Helpers"
sidebar:
  label: "Color"
  order: 0
---

Utility functions for working with color operations.

## Functions

| Function | Description |
|----------|-------------|
| [`argbToRgb`](./argbtorgb/) | Converts a 32\-bit packed ARGB integer \(as used by e\.g\. |
| [`hexToRgb`](./hextorgb/) | Parses a hex color string \(\`\#rgb\`, \`\#rgba\`, \`\#rrggbb\`, \`\#rrggbbaa\` — the leading \`\#\` is optional\) into its RGB\(A\) cha… |
| [`hslToRgb`](./hsltorgb/) | Converts an HSL\(A\) color into RGB\(A\)\. |
| `isLight / isDark (pick a readable text color)` | <span class="badge badge--secondary">native JS</span> `contrast-color(<color>)` *(CSS Color 6 (Baseline newly available since April 2026 — Chrome 147, Firefox 146, Safari 26.0))* |
| `lighten / darken` | <span class="badge badge--secondary">native JS</span> `color-mix(in oklch, <color> <percent>, white\|black)` *(CSS Color 5 (Baseline widely available since 2023 — Chrome 111, Firefox 113, Safari 16.2))* |
| [`rgbToHex`](./rgbtohex/) | Converts an RGB\(A\) color into a hex color string\. |
| [`rgbToHsl`](./rgbtohsl/) | Converts an RGB\(A\) color into HSL\(A\)\. |
| `withAlpha (change the alpha channel of an existing color)` | <span class="badge badge--secondary">native JS</span> `rgb(from <color> r g b / <alpha>)` *(CSS Color 5 relative color syntax (Baseline widely available since September 2024 — Chrome 119+))* |

