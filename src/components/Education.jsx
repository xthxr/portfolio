import education from '../data/education.json';

export default function Education() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6 text-accent text-center">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="border-l-4 border-accent pl-4">
            <h3 className="text-xl font-semibold text-accent">{edu.degree}</h3>
            <p className="text-md text-text">{edu.institution}</p>
            <p className="text-sm text-gray-400">{edu.startYear} – {edu.endYear}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
