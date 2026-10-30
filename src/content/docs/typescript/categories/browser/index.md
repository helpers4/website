---
title: "Browser Helpers"
sidebar:
  label: "≡ Overview"
  order: 0
---

Utility functions for working with browser operations.

## Functions

| Function | Description |
|----------|-------------|
| [`createFileStore`](./createfilestore/) | Creates a file store on a named Cache API cache: keep a computed set of files \(a bake, a download, extracted layers\) un… |
| [`decodeImage`](./decodeimage/) | Loads an image and waits until it is decoded, so it can be painted without a flash or a decoding pause \(e\.g\. |
| [`loadFont`](./loadfont/) | Loads a font and registers it in \`document\.fonts\`, so CSS and canvas can use \`family\` right away\. |
| [`matchesMedia`](./matchesmedia/) | Whether the document currently matches a CSS media query\. |
| [`observeIntersection`](./observeintersection/) | Calls \`callback\` each time \`element\` enters or leaves the viewport \(or \`options\.root\`\), with an \`IntersectionObserver\`… |
| [`observeResize`](./observeresize/) | Calls \`callback\` each time the size of \`element\` changes, with a \`ResizeObserver\` dedicated to it\. |
| [`onPointerIntent`](./onpointerintent/) | Tells a tap from a drag, and hover from touch, on one element: the pointer\-event logic every draggable or clickable wid… |
| [`prefersReducedMotion`](./prefersreducedmotion/) | Whether the user asked the system to reduce motion \(\`prefers\-reduced\-motion: reduce\`\)\. |
| [`preloadImages`](./preloadimages/) | Loads and decodes several images with decodeImage, a few at a time, with \`mapSettled\` from \`helpers4/array\`\. |
| [`reflectAttribute`](./reflectattribute/) | Defines a property on \`element\` that is backed by an HTML attribute — what a custom element needs for \`<my\-card heading… |
| [`requestWorker`](./requestworker/) | Runs one job in a module worker: starts it, posts the request, relays its progress, resolves with its result and ends i… |
| [`sha256Hex`](./sha256hex/) | The SHA\-256 digest of some data as a hexadecimal string, optionally cut short: a compact content key, not a security ch… |
| [`watchMedia`](./watchmedia/) | Calls \`listener\` each time a CSS media query starts or stops matching\. |
| [`whenIdle`](./whenidle/) | Runs \`callback\` when the browser is idle, with \`requestIdleCallback\`, for work that can wait \(prefetching, analytics, w… |

