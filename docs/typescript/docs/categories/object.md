---
sidebar_position: 5
---

# Object

Object utilities for deep operations, picking and omitting properties.

## Import

```typescript
import { deepClone, deepMerge, deepCompare, pick, omit } from '@helpers4/typescript';
```

## Available Functions

| Function | Description |
|----------|-------------|
| `deepClone` | Create a deep copy of an object |
| `deepMerge` | Recursively merge objects |
| `deepCompare` | Deep equality comparison |
| `pick` | Create object with selected keys |
| `omit` | Create object without specified keys |
| `values` | Get object values with type safety |

## Examples

### deepMerge

```typescript
import { deepMerge } from '@helpers4/typescript';

deepMerge({ a: 1, b: { c: 2 } }, { b: { d: 3 } });
// { a: 1, b: { c: 2, d: 3 } }
```

### pick

```typescript
import { pick } from '@helpers4/typescript';

pick({ a: 1, b: 2, c: 3 }, ['a', 'c']);
// { a: 1, c: 3 }
```

---

For full source code, visit [GitHub](https://github.com/helpers4/typescript/tree/main/helpers/object).
