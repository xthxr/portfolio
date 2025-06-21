export default function SkillBadge({ skill }) {
  return (
    <span className="bg-accent text-primary px-3 py-1 rounded-full text-sm font-mono mr-2 mb-2 inline-block">
      {skill}
    </span>
  );
}

