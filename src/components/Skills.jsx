import skills from '../data/skills.json';
import SkillBadge from './SkillBadge';

export default function Skills() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6 text-accent text-center">Skills</h2>
      <div className="flex flex-wrap justify-center">
        {skills.map((skill, idx) => (
          <SkillBadge key={idx} skill={skill} />
        ))}
      </div>
    </section>
  );
}
