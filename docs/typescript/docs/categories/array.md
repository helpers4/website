---
sidebar_position: 1
---

# Array

Array manipulation utilities for working with arrays efficiently.

## Import

```typescript
import { chunk, unique, flatten, intersection, difference } from '@helpers4/typescript';
```

## Available Functions

| Function | Description |
|----------|-------------|
| `chunk` | Split an array into groups of a specified size |
| `unique` | Remove duplicate values from an array |
| `flatten` | Flatten a nested array to a specified depth |
| `intersection` | Get common elements between arrays |
| `difference` | Get elements in first array not in second |

## Examples

### chunk

```typescript
import { chunk } from '@helpers4/typescript';

chunk([1, 2, 3, 4, 5], 2);
// [[1, 2], [3, 4], [5]]
```

### unique

```typescript
import { unique } from '@helpers4/typescript';

unique([1, 2, 2, 3, 3, 3]);
// [1, 2, 3]
```

---

For full source code, visit [GitHub](https://github.com/helpers4/typescript/tree/main/helpers/array).
