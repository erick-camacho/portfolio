import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="fixed overflow-hidden top-0 w-full shadow-md bg-white bg-opacity-95" role="navigation">
      <div className="flex justify-between items-center h-14 md:h-16 max-w-5xl mx-auto px-8 text-md uppercase">
        {/* LOGO */}
        <a href="#" className="font-bold">Erick Camacho</a>
        {/* DROPDOWN MENU ICON */}
        <FaBars className="cursor-pointer h-6 md:hidden"/>
        {/* MENU */}
        <div className="hidden md:block">
          <a href="#" className="p-4 hover:text-yellow-500">About Me</a>
          <a href="#" className="p-4 hover:text-yellow-500">Portfolio</a>
          <a href="#" className="p-4 hover:text-yellow-500">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;