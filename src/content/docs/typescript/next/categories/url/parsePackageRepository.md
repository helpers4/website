---
title: "parsePackageRepository"
sidebar:
  label: "parsePackageRepository"
---

Parse the `repository` field from `package.json` into a structured object.

Supports all npm-specified formats:
- **Object form**: `{ "type": "git", "url": "...", "directory": "..." }`
- **GitHub shorthand**: `"owner/repo"` or `"github:owner/repo"`
- **Platform shorthands**: `"gitlab:owner/repo"`, `"bitbucket:owner/repo"`
- **Gist shorthand**: `"gist:<id>"`
- **URL forms**: `git+https://`, `https://`, `git://`, `git@` SSH, `git+ssh://`

Returns `undefined` for `null`, `undefined`, arrays, or values that cannot
be matched to any recognised format.

> Available since v2.0.0

## Import

```ts
import { parsePackageRepository } from '@helpers4/url';
```

## Signature


```ts
parsePackageRepository(repository: unknown): PackageRepository | undefined
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `repository` | `unknown` | The `repository` field value from `package.json`. |

## Returns

`PackageRepository | undefined` — A parsed PackageRepository object, or `undefined` if the
  input cannot be parsed.

## Examples

### Parse the npm canonical object form

Parses the full object form written by npm publish.

```ts
parsePackageRepository({ type: 'git', url: 'git+https://github.com/helpers4/typescript.git' })
// => { type: 'git', host: 'github', slug: 'helpers4/typescript',
//      owner: 'helpers4', repo: 'typescript', gistId: undefined, directory: undefined }
```

### Parse npm shorthand forms

npm accepts "owner/repo", "github:owner/repo", "gitlab:owner/repo" etc. as shorthand.

```ts
parsePackageRepository('helpers4/typescript')
// => { host: 'github', slug: 'helpers4/typescript', owner: 'helpers4', repo: 'typescript', ... }

parsePackageRepository('gitlab:myorg/myproject')
// => { host: 'gitlab', slug: 'myorg/myproject', owner: 'myorg', repo: 'myproject', ... }

parsePackageRepository('gist:11081aaa281')
// => { host: 'gist', gistId: '11081aaa281', slug: undefined, owner: undefined, ... }
```

## Related Types

### `PackageRepository`

Structured representation of a parsed `repository` field from `package.json`.

```ts
interface PackageRepository {
  directory: string | undefined;
  gistId: string | undefined;
  host: string & object | "github" | "gitlab" | "bitbucket" | "gist";
  owner: string | undefined;
  repo: string | undefined;
  slug: string | undefined;
  type: string;
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/url/parsePackageRepository.ts)
