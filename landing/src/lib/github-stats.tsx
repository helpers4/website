import { component$, useResource$, Resource } from '@builder.io/qwik';

interface GithubRepo {
  name: string;
  url: string;
  stars: number;
  issues: number;
  description: string;
}

interface GithubStats {
  typescript: GithubRepo;
  devcontainer: GithubRepo;
  action: GithubRepo;
}

export const useGithubStats = () => {
  return useResource$<GithubStats>(async () => {
    const repos = ['typescript', 'devcontainer', 'action'];
    const stats: any = {};

    try {
      for (const repo of repos) {
        const response = await fetch(`https://api.github.com/repos/helpers4/${repo}`);
        if (response.ok) {
          const data = await response.json();
          stats[repo] = {
            name: data.name,
            url: data.html_url,
            stars: data.stargazers_count || 0,
            issues: data.open_issues_count || 0,
            description: data.description || '',
          };
        }
      }
    } catch (error) {
      console.error('Failed to fetch GitHub stats:', error);
    }

    return stats as GithubStats;
  });
};

export const GithubCard = component$<{ repo: GithubRepo| undefined }>(
  ({ repo }) => {
    if (!repo) {
      return <div class="loading">Loading...</div>;
    }

    return (
      <div class="github-badge">
        <a href={repo.url} target="_blank" rel="noopener noreferrer">
          <div class="stats">
            <span class="stat">
              ⭐ <strong>{repo.stars}</strong>
            </span>
            <span class="stat">
              🐛 <strong>{repo.issues}</strong>
            </span>
          </div>
        </a>
      </div>
    );
  }
);
