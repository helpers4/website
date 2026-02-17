# Deployment Guide

## Overview

This website is designed to be deployed to **Cloudflare Pages**. The infrastructure supports:

- **Landing page** (Qwik) at https://helpers4.dev/
- **TypeScript docs** (Docusaurus) at https://helpers4.dev/ts/
- **DevContainer docs** (Docusaurus) at https://helpers4.dev/dev-container/
- **GitHub Actions docs** (Docusaurus) at https://helpers4.dev/action/
- **Versioning** (TypeScript only) with major versions

## Prerequisites

1. **Cloudflare Account**
   - Domain registered: `helpers4.dev`
   - Nameservers configured

2. **GitHub Secrets** (in helpers4/helpers4.github.io)
   ```
   CLOUDFLARE_API_TOKEN    - Cloudflare API token with Pages deploy permission
   CLOUDFLARE_ACCOUNT_ID   - Your Cloudflare Account ID
   HELPERS4_WEBSITE_TOKEN  - GitHub token for cross-repo dispatch (all repos)
   ```

3. **Environment Setup**
   - Node.js >= 20
   - pnpm >= 9.0.0

## Deployment Steps

### 1. Setup Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Select your account
3. Navigate to **Pages**
4. Click **Create a project**
5. Connect your GitHub repository: `helpers4/helpers4.github.io`
6. Configure build settings:
   - **Framework**: None (custom build)
   - **Build command**: `pnpm install && pnpm build`
   - **Build output directory**: `dist`
   - **Root directory**: `/`

7. Set environment variables:
   ```
   PNPM_VERSION = 9
   NODE_VERSION = 20
   ```

8. Deploy

### 2. Configure Domain

1. In Cloudflare Dashboard, go to your domain settings
2. Go to **Pages** → Your project
3. In project settings, set:
   - **Project name**: `helpers4`
   - **Custom domain**: `helpers4.dev`

4. Update DNS records (if not already pointing to Cloudflare)

### 3. Setup GitHub Secrets

Navigate to repository settings → Secrets and variables → Actions:

1. Add `CLOUDFLARE_API_TOKEN`
   - Go to [Cloudflare Tokens](https://dash.cloudflare.com/profile/api-tokens)
   - Create token with PostgreSQL Pages:Deploy permission
   - Copy and add to GitHub

2. Add `CLOUDFLARE_ACCOUNT_ID`
   - Get from Cloudflare Dashboard URL: `https://dash.cloudflare.com/{ACCOUNT_ID}`

3. Add `HELPERS4_WEBSITE_TOKEN`
   - GitHub Personal Access Token with `repo` scope
   - Used to trigger cross-repo dispatch events

### 4. Deploy

**Manual Deploy:** Push to main branch
```bash
git push origin main
```

**Automatic:** The workflow `.github/workflows/deploy.yml` runs automatically.

## Update Workflow

### When releasing TypeScript

1. **In typescript repo:**
   - Tag release: `git tag v2.1.0`
   - Push: `git push --tags`
   - GitHub Actions:
     - Builds, tests, publishes to npm
     - Runs workflow: `.github/workflows/trigger-website-typescript.yml`
     - Sends dispatch to website repo

2. **Automatic in website repo:**
   - Workflow: `.github/workflows/typescript-release.yml` triggers
   - Syncs docs from typescript repo
   - Generates API docs
   - Updates versioning
   - Commits and pushes
   - **Deploys to Cloudflare Pages**

**Same process for devcontainer & action repos.**

## Versioning Management

### TypeScript Versions

Current versioning strategy:

```
docs/               → v2.1.5 (current development)
versioned_docs/version-2.x/  → v2.0.0 (stable major version 2)
versioned_docs/version-1.x/  → v1.4.0 (stable major version 1)
```

#### To Create New Version

```bash
cd docs/typescript
npm run docusaurus docs:version 2.1.0
```

This auto-generates the versioned docs structure. Then commit.

#### Docusaurus will automatically:
- Create new version in `versioned_docs/version-2.1/`
- Update `versions.json`
- Show version selector in navbar

### Versioning Files

- `docs/typescript/versions.json` - List of available versions
- `docs/typescript/versioned_docs/version-X.X/version.json` - Version metadata
- `docs/typescript/versioned_docs/version-X.X/docs/` - Versioned documentation

## Build & Preview Locally

### Full Build

```bash
pnpm install
pnpm build
```

Output in `dist/`

### Preview

```bash
# Serve locally
npx serve dist
```

Visit `http://localhost:3000`

### Individual Development

```bash
# Landing page
cd landing
pnpm dev

# TypeScript docs (port 3001)
cd docs/typescript
pnpm start

# DevContainer docs (port 3002)
cd docs/devcontainer
pnpm start

# Action docs (port 3003)
cd docs/github-action
pnpm start
```

## Troubleshooting

### Cloudflare Deploy Fails

Check `.github/workflows/deploy.yml`:
- Verify `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` are set
- Ensure token has Pages:Deploy permission
- Check build command: `pnpm install && pnpm build`

### Docs Not Updating

1. Verify dispatch token `HELPERS4_WEBSITE_TOKEN` has `repo` scope
2. Check workflows in source repos (typescript, devcontainer, action)
3. Verify `@github/rest` in website workflows can access dispatch

### TypeScript Docs Versioning Issues

Run:
```bash
npm run docusaurus docs:version 2.1.0  # Create new version
node scripts/version-management.js list  # Check versions
```

## Notes

- **Zone setup:** helpers4.dev Cloudflare zone must be configured
- **SSL:** Automatically enabled by Cloudflare
- **Performance:** Global CDN via Cloudflare
- **Analytics:** Available in Cloudflare Dashboard
- **Maintenance:** Website is automatically updated on source repo releases

---

**Need help?** Check the [GitHub Issues](https://github.com/helpers4/helpers4.github.io/issues)
