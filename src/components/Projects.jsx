import { useEffect, useState } from 'react';
import { fetchGithubRepos } from '../utils/fetchGithub';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetchGithubRepos('xthxr').then(setRepos);
  }, []);

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6 text-accent text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map(repo => (
          <ProjectCard
            key={repo.id}
            name={repo.name}
            description={repo.description}
            stars={repo.stargazers_count}
            url={repo.html_url}
          />
        ))}
      </div>
    </section>
  );
}
