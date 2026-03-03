#!/usr/bin/env sh
# Script to merge all builds into dist/

set -e

# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT_DIR="$SCRIPT_DIR"
DIST_DIR="$ROOT_DIR/dist"

echo "🔨 Merging builds..."

# Ensure dist directory exists
mkdir -p "$DIST_DIR"

# Build TypeScript docs
echo "📚 TypeScript docs..."
cd "$ROOT_DIR/docs/typescript"
pnpm exec docusaurus build --out-dir "$DIST_DIR/ts"

# Build DevContainer docs
echo "🐳 DevContainer docs..."
cd "$ROOT_DIR/docs/devcontainer"
pnpm exec docusaurus build --out-dir "$DIST_DIR/dev-container"

# Build Action docs
echo "⚙️ GitHub Action docs..."
cd "$ROOT_DIR/docs/github-action"
pnpm exec docusaurus build --out-dir "$DIST_DIR/action"

# Create .nojekyll for GitHub Pages compatibility
touch "$DIST_DIR/.nojekyll"

echo "✅ Build merge complete!"
echo "📁 Output directory: $DIST_DIR"
ls -lah "$DIST_DIR"
