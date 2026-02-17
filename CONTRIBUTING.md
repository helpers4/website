#!/bin/bash

# Contributing Guide for helpers4 Website

## Reporting Issues

Found a bug? Want to suggest a feature?

1. Check for existing issues: https://github.com/helpers4/helpers4.github.io/issues
2. Open a new issue with clear description

## Pull Request Process

### 1. Fork & Clone

```bash
git clone https://github.com/{your-username}/helpers4.github.io.git
cd helpers4.github.io
```

### 2. Create Branch

***For features:***
```bash
git checkout -b feat/description
```

**For fixes:**
```bash
git checkout -b fix/description
```

### 3. Setup Local Environment

```bash
pnpm install
# Clone sibling repos if working on doc generation
cd ..
git clone https://github.com/helpers4/{typescript|devcontainer|action}.git
cd helpers4.github.io
```

### 4. Make Changes

Edit:
- Landing page: `landing/src/`
- TypeScript docs: `docs/typescript/docs/`
- DevContainer docs: `docs/devcontainer/docs/`
- Action docs: `docs/github-action/docs/`

### 5. Test

```bash
# Check TypeScript
pnpm build:landing

# Test specific docs
pnpm build:docs:typescript

# Full build
pnpm build

# Preview
npx serve dist
```

### 6. Commit

Use conventional commits:

```bash
git commit -m "feat: add new component"
git commit -m "docs: update TypeScript guide"
git commit -m "fix: resolve sidebar layout"
```

### 7. Push & PR

```bash
git push origin feat/description
```

Then open a PR on GitHub with:
- Clear title
- Description of changes
- Screenshots if UI changes
- Link to related issues

## Code Style

### TypeScript/JSX

- Use TypeScript strict mode
- Functional components with hooks
- CSS modules for styling
- Descriptive variable names

### Markdown

- 80 character line limit
- Clear headings hierarchy
- Code blocks with language
- Links to related docs

### Commits

- Conventional Commits format
- Short, descriptive messages
- Link related issues

## Quality Checklist

- [ ] Code builds without errors
- [ ] Tests pass (if applicable)
- [ ] Documentation updated
- [ ] Conventional commit format
- [ ] No linting errors
- [ ] Responsive design (if UI changes)

## Questions?

- Open a discussion: https://github.com/helpers4/helpers4.github.io/discussions
- Check documentation: [SETUP.md](./SETUP.md)

---

Thank you for contributing to helpers4! 🚀
