function Skills() {
  return (
    <section id="skills" className="bg-black px-8 py-16 min-h-screen w-full">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl text-white font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            'HTML',
            'CSS',
            'JavaScript',
            'React',
            'Tailwind CSS',
            'Node.js',
            'Python',
            'Git',
            'Express.js',
            'MongoDB',
            'Next.js',
            'TypeScript',
            'GraphQL',
            'Firebase',
            'Django',
            'Flask',
          ].map((skill) => (
            <div
              key={skill}
              className="bg-zinc-900 border-4 border-cyan-500 rounded-xl shadow-md p-6 hover:shadow-xl hover:border-cyan-400 transition text-center">
              <div className="text-white text-2xl font-semibold">{skill}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Skills;
