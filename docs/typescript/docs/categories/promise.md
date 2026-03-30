---
sidebar_position: 7
---

# Promise

Promise utilities for concurrent operations, timeouts and retries.

## Import

```typescript
import { all, race, timeout, retry, parallel } from '@helpers4/typescript';
```

## Available Functions

| Function | Description |
|----------|-------------|
| `all` | Resolve multiple promises with enhanced error handling |
| `race` | Race promises with cancellation support |
| `timeout` | Add timeout to a promise |
| `retry` | Retry a failing async operation |
| `parallel` | Run async tasks in parallel with concurrency limit |

## Examples

### retry

```typescript
import { retry } from '@helpers4/typescript';

const data = await retry(() => fetch('/api/data'), {
  attempts: 3,
  delay: 1000,
});
```

### timeout

```typescript
import { timeout } from '@helpers4/typescript';

const result = await timeout(fetch('/api/slow'), 5000);
```

---

For full source code, visit [GitHub](https://github.com/helpers4/typescript/tree/main/helpers/promise).
