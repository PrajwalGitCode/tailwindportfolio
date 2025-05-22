import profileImage from './assets/profile.jpg';

function Navbar() {
  return (
    <header className="bg-[#1A1A1A] text-white fixed top-0 left-0 w-full shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">


        <div className="flex items-center space-x-2 select-none cursor-default">
          <img src={profileImage} alt="Profile" className="w-10 h-10 rounded-full object-cover" />
        </div>


        <nav className="flex flex-wrap justify-center gap-6 text-lg">
          <a href="#" className="hover:text-cyan-500">About</a>
          <a href="#skills" className="hover:text-cyan-500">Skills</a>
          <a href="#projects" className="hover:text-cyan-500">Projects</a>
          <a href="#contact" className="hover:text-cyan-500">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
