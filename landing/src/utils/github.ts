/**
 * @license AGPL-3.0-or-later
 */

export function formatStars(value: number | null): string {
  if (value === null) {
    return 'N/A';
  }

  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}k`;
  }

  return String(value);
}

export async function fetchRepoStars(repoPath: string): Promise<number | null> {
  try {
    const response = await fetch(`https://api.github.com/repos/${repoPath}`);
    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as { stargazers_count?: number };
    return typeof data.stargazers_count === 'number' ? data.stargazers_count : null;
  } catch {
    return null;
  }
}

export async function fetchAllStars(repoPaths: string[]): Promise<Record<string, number | null>> {
  const entries = await Promise.all(
    repoPaths.map(async (repoPath) => {
      const stars = await fetchRepoStars(repoPath);
      return [repoPath, stars] as const;
    }),
  );

  return Object.fromEntries(entries);
}
