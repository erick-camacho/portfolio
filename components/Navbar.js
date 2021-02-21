import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="fixed overflow-hidden top-0 w-full shadow-md bg-white" role="navigation">
      <div className="flex justify-between items-center h-14 md:h-16 max-w-5xl mx-auto px-8 font-mono text-lg">
        {/* LOGO */}
        <a href="#" className="font-black">Erick Camacho</a>
        {/* DROPDOWN MENU ICON */}
        <FaBars className="cursor-pointer h-6 md:hidden"/>
        {/* MENU */}
        <div className="hidden md:block">
          <a href="#" className="p-4">About Me</a>
          <a href="#" className="p-4">Portfolio</a>
          <a href="#" className="p-4">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;