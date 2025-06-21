import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.github.com/users/xthxr/repos?sort=updated')
      .then((res) => {
        const topRepos = res.data
          .filter(repo => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6);
        setRepos(topRepos);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6 text-accent text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <div key={repo.id} className="border border-accent rounded-xl p-4 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-accent">{repo.name}</h3>
            <p className="text-sm text-text mt-2">{repo.description || 'No description provided.'}</p>
            <div className="mt-4 flex justify-between items-center text-sm text-gray-400">
              <span>⭐ {repo.stargazers_count}</span>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                View Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
