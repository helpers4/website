/**
 * This file is part of helpers4.
 * Copyright (C) 2025 baxyz
 * SPDX-License-Identifier: LGPL-3.0-or-later
 *
 * Build-time GitHub stats fetcher, memoized per repo — SocialIcons.astro renders on every page
 * (~900+ for typescript alone), so without this a full build would fire one API call per page
 * instead of one per repo. Module-level state persists for the whole `astro build` process since
 * Vite/Astro only ever import a given module once during SSG.
 */

export interface RepoStats {
  stars: number | null;
  scorecard: number | null;
  coverage: number | null;
}

async function fetchStars(repoPath: string): Promise<number | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${repoPath}`, {
      headers: { Accept: 'application/vnd.github+json' },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { stargazers_count?: number };
    return typeof data.stargazers_count === 'number' ? data.stargazers_count : null;
  } catch {
    return null;
  }
}

/**
 * Falls back to null on any error, including a plain 404 for a repo OpenSSF hasn't scanned yet
 * (devcontainer/action don't have the Scorecard workflow set up as of 2026-07-26, unlike
 * typescript) — the badge just doesn't render for those.
 */
async function fetchScorecard(repoPath: string): Promise<number | null> {
  try {
    const res = await fetch(`https://api.securityscorecards.dev/projects/github.com/${repoPath}`);
    if (!res.ok) return null;
    const data = (await res.json()) as { score?: number };
    return typeof data.score === 'number' ? data.score : null;
  } catch {
    return null;
  }
}

/**
 * Falls back to null on any error, including a repo with no Codecov integration at all
 * (devcontainer/action, as of 2026-07-26, unlike typescript) — the badge just doesn't render.
 */
async function fetchCoverage(repoPath: string): Promise<number | null> {
  try {
    const res = await fetch(`https://img.shields.io/codecov/c/github/${repoPath}.json`);
    if (!res.ok) return null;
    const data = (await res.json()) as { message?: string };
    const value = data.message ? parseFloat(data.message) : NaN;
    return Number.isFinite(value) ? value : null;
  } catch {
    return null;
  }
}

const cache = new Map<string, Promise<RepoStats>>();

export function getRepoStats(repoPath: string): Promise<RepoStats> {
  let entry = cache.get(repoPath);
  if (!entry) {
    entry = (async () => ({
      stars: await fetchStars(repoPath),
      scorecard: await fetchScorecard(repoPath),
      coverage: await fetchCoverage(repoPath),
    }))();
    cache.set(repoPath, entry);
  }
  return entry;
}
