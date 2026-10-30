---
title: "Color Helpers"
sidebar:
  label: "≡ Overview"
  order: 0
---

Utility functions for working with color operations.

## Functions

| Function | Description |
|----------|-------------|
| [`argbToRgb`](./argbtorgb/) | Converts a 32\-bit packed ARGB integer \(as used by e\.g\. |
| [`blendColors`](./blendcolors/) | Composites a source color over a backdrop with a blend mode, as the browser does for \`mix\-blend\-mode\` \(W3C Compositing… |
| [`contrastRatio`](./contrastratio/) | Computes the WCAG 2 contrast ratio between two colors, from 1 \(identical\) to 21 \(black on white\)\. |
| [`hexToRgb`](./hextorgb/) | Parses a hex color string \(\`\#rgb\`, \`\#rgba\`, \`\#rrggbb\`, \`\#rrggbbaa\` — the leading \`\#\` is optional\) into its RGB\(A\) chann… |
| [`hsbToRgb`](./hsbtorgb/) | Converts an HSB\(A\) color \(also called HSV\), as shown by design tool color pickers, into RGB\(A\)\. |
| [`hslToCss`](./hsltocss/) | Formats an HSL\(A\) color as a CSS \`hsl\(\)\` value, in the modern space\-separated syntax\. |
| [`hslToRgb`](./hsltorgb/) | Converts an HSL\(A\) color into RGB\(A\)\. |
| `isLight / isDark (pick a readable text color)` | <span class="badge badge--secondary">native JS</span> `contrast-color(<color>)` *(CSS Color 6 (Baseline newly available since April 2026 — Chrome 147, Firefox 146, Safari 26.0))* |
| `lighten / darken` | <span class="badge badge--secondary">native JS</span> `color-mix(in oklch, <color> <percent>, white\|black)` *(CSS Color 5 (Baseline widely available since 2023 — Chrome 111, Firefox 113, Safari 16.2))* |
| [`mixColors`](./mixcolors/) | Mixes two colors in sRGB, as CSS \`color\-mix\(in srgb, color P%, base\)\` does: \`percent\`% of \`color\` and the rest of \`base… |
| [`premultiply`](./premultiply/) | Multiplies the color channels by the alpha channel \(premultiplied alpha\), the form compositing and GPU blending work in\. |
| [`relativeLuminance`](./relativeluminance/) | Computes the WCAG 2\.x relative luminance of a color: the perceived brightness from 0 \(black\) to 1 \(white\), after linear… |
| [`rgbToCss`](./rgbtocss/) | Formats an RGB\(A\) color as a CSS \`rgb\(\)\` value, in the modern space\-separated syntax that every current browser and SVG… |
| [`rgbToHex`](./rgbtohex/) | Converts an RGB\(A\) color into a hex color string\. |
| [`rgbToHsb`](./rgbtohsb/) | Converts an RGB\(A\) color into HSB\(A\), the model design tools \(Figma, Sketch, XD\) show in their color pickers\. |
| [`rgbToHsl`](./rgbtohsl/) | Converts an RGB\(A\) color into HSL\(A\)\. |
| [`rgbToUnit`](./rgbtounit/) | Converts an RgbColor \(channels from \`0\` to \`255\`\) into a color whose channels are floats from \`0\` to \`1\`, the way Figma… |
| [`unitToRgb`](./unittorgb/) | Converts a color whose channels are floats from \`0\` to \`1\` \(as Figma, Sketch and Penpot store them\) into an RgbColor, w… |
| [`unpremultiply`](./unpremultiply/) | Divides the color channels by the alpha channel: the inverse of premultiply\. |
| `withAlpha (change the alpha channel of an existing color)` | <span class="badge badge--secondary">native JS</span> `rgb(from <color> r g b / <alpha>)` *(CSS Color 5 relative color syntax (Baseline widely available since September 2024 — Chrome 119+))* |

