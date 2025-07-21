export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-100 text-center">
      <h2 className="text-3xl font-semibold mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Project {i}</h3>
            <p className="text-gray-600">A short description of project {i} goes here.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
