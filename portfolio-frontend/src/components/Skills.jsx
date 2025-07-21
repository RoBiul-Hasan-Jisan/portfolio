export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-white text-center">
      <h2 className="text-3xl font-semibold mb-8">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Python', 'Git'].map((skill) => (
          <span key={skill} className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}