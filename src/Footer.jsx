function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-center sm:text-left text-sm">
          &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 sm:mt-0">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:cyan-500">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:cyan-500">
            LinkedIn
          </a>
          <a href="#contact" className="hover:cyan-500">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
