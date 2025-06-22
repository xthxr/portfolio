import experience from '../data/experience.json';

export default function Experience() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6 text-accent text-center">Experience</h2>
      <div className="space-y-6">
        {experience.map((exp, index) => (
          <div key={index} className="border-l-4 border-accent pl-4">
            <h3 className="text-xl font-semibold text-accent">{exp.role} at {exp.company}</h3>
            <p className="text-sm text-gray-400">{exp.start} – {exp.end}</p>
            <p className="text-md text-text mt-1">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
