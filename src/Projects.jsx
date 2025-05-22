function Projects() {
  return (
    <section id="projects" className="bg-black text-white py-20 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-[#1A1A1A] border border-zinc-700 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2 text-cyan-400">Apple Clone</h3>
            <p className="text-gray-300 mb-4">A clone Website of Apple</p>
            
            <a
              href="https://mellifluous-trifle-a1753c.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 hover:underline">
              View Project →
            </a>
          </div>

          <div className="bg-[#1A1A1A] border border-zinc-700 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2 text-cyan-400">Tech Store Website</h3>
            <p className="text-gray-300 mb-4">E-commerce platform built using Django and Python</p>
            <a
              href="https://thenebula.pythonanywhere.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 hover:underline">
              View Project →
            </a>
          </div>

          <div className="bg-[#1A1A1A] border border-zinc-700 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2 text-cyan-400">One-Stop Bank App</h3>
            <p className="text-gray-300 mb-4">All-in-one banking solution with secure transactions and UI.</p>
            <a
              href="https://nebulabank.pythonanywhere.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 hover:underline">
              View Project →
            </a>
          </div>

          <div className="bg-[#1A1A1A] border border-zinc-700 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2 text-cyan-400">Portfolio Website</h3>
            <p className="text-gray-300 mb-4">Personal portfolio showcasing skills and projects.</p>

            <a href="https://portfolioprajwalsite.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 hover:underline">
              View Project →
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
