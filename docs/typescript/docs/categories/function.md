---
sidebar_position: 3
---

# Function

Utilities for working with functions: debouncing, throttling, composition and more.

## Import

```typescript
import { debounce, throttle, memoize, pipe, compose, once } from '@helpers4/typescript';
```

## Available Functions

| Function | Description |
|----------|-------------|
| `debounce` | Delay function execution until after a pause |
| `throttle` | Limit function execution to once per interval |
| `memoize` | Cache function results for repeated calls |
| `pipe` | Compose functions left-to-right |
| `compose` | Compose functions right-to-left |
| `once` | Ensure a function is called only once |

## Examples

### debounce

```typescript
import { debounce } from '@helpers4/typescript';

const debouncedSearch = debounce((query: string) => {
  fetch(`/api/search?q=${query}`);
}, 300);
```

### pipe

```typescript
import { pipe } from '@helpers4/typescript';

const transform = pipe(
  (x: number) => x * 2,
  (x: number) => x + 1,
  (x: number) => String(x)
);

transform(5); // '11'
```

---

For full source code, visit [GitHub](https://github.com/helpers4/typescript/tree/main/helpers/function).
