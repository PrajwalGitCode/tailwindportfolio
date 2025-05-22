function Contact() {
  return (
    <section id="contact" className="min-h-screen w-full bg-black py-20 px-4">
      <div className="max-w-3xl mx-auto bg-zinc-900 p-10 rounded-xl shadow-md border-4 border-cyan-500">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Contact Me</h2>


        <form className="space-y-6">
          <div>
            <label className="block text-white font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input type="text"
              id="name"
              className="w-full border border-zinc-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder:text-gray-400"
              placeholder="Your name" />
          </div>


          <div>
            <label className="block text-white font-medium mb-1" htmlFor="email">
              Email
            </label>


            <input
              type="email"
              id="email"
              className="w-full border border-zinc-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder:text-gray-400"
              placeholder="you@example.com" />
          </div>


          <div>
            <label className="block text-white font-medium mb-1" htmlFor="message"> Message </label>
            <textarea
              id="message"
              rows="4"
              className="w-full border border-zinc-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder:text-gray-400"
              placeholder="Your message...">
            </textarea>
          </div>


          <button
            type="submit"
            className="bg-cyan-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-cyan-600 transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
