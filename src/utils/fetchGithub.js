import axios from 'axios';

export async function fetchGithubRepos(username, limit = 6) {
  try {
    const res = await axios.get(`https://api.github.com/users/${xthxr}/repos?sort=updated`);
    const repos = res.data
      .filter(repo => !repo.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, limit);

    return repos;
  } catch (err) {
    console.error('❌ GitHub Repo Fetch Failed:', err.message);
    return [];
  }
}

