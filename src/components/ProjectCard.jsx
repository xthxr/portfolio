export default function ProjectCard({ name, description, stars, url }) {
  return (
    <div className="border border-accent rounded-xl p-4 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-accent">{name}</h3>
      <p className="text-sm text-text mt-2">{description || 'No description provided.'}</p>
      <div className="mt-4 flex justify-between items-center text-sm text-gray-400">
        <span>⭐ {stars}</span>
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
          View Repo
        </a>
      </div>
    </div>
  );
}
