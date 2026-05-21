#!/bin/bash

# Contributing Guide for helpers4 Website

## Reporting Issues

Found a bug? Want to suggest a feature?

1. Check for existing issues: https://github.com/helpers4/website/issues
2. Open a new issue with clear description

## Pull Request Process

### 1. Fork & Clone

```bash
git clone https://github.com/{your-username}/website.git
cd website
```

### 2. Create Branch

**For features:**
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
git clone https://github.com/helpers4/typescript.git
git clone https://github.com/helpers4/devcontainer.git
git clone https://github.com/helpers4/action.git
cd website
```

### 4. Make Changes

Edit:
- Astro configuration: `astro.config.mjs`
- TypeScript docs content: `src/content/docs/typescript/`
- DevContainer docs content: `src/content/docs/devcontainer/`
- Action docs content: `src/content/docs/action/`
- Shared components: `src/components/`
- Doc generation scripts: `scripts/`

### 5. Test

```bash
# Start dev server
pnpm dev

# Full build check
pnpm build

# Preview built site
pnpm preview
```

### 6. Commit

Use conventional commits with gitmoji — see AGENTS.md for the full type/emoji table.

```bash
git commit -m "feat(docs): ✨ add new section"
git commit -m "fix(lib-typescript): 🐛 resolve broken sidebar link"
git commit -m "chore(CI-CD): 🔧 update workflow"
```

### 7. Push & PR

```bash
git push origin feat/description
```

Then open a PR on GitHub with:
- Clear title following the conventional commit format
- Description of changes
- Screenshots if UI changes
- Link to related issues

## Code Style

### TypeScript/Astro

- Use TypeScript strict mode
- Follow existing component patterns in `src/components/`
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
