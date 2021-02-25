import { FaBars, FaTimes } from 'react-icons/fa';
import NavList from './NavList';
import Dropdown from './Dropdown';
import { Link } from 'react-scroll'
import useMobileMenu from '../utils/useMobileMenu'

const Navbar = () => {
  const [isOpen, toggle, close] = useMobileMenu()
  
  return (
    <>
      <nav className={`fixed overflow-hidden top-0 w-full bg-white z-50 ${isOpen || "bg-opacity-95 shadow-md"}`} role="navigation">
        <div className="flex justify-between items-center h-14 md:h-16 max-w-5xl mx-auto px-8 text-md uppercase">
          {/* LOGO */}
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
            className="md:pl-4 uppercase font-bold cursor-pointer"
            onClick={close}
          >
            Erick Camacho
          </Link> 
          {/* DROPDOWN MENU ICON */}
          <div className="cursor-pointer md:hidden text-yellow-500">
            {isOpen ? (
              <FaTimes size={20} onClick={toggle}/>
            ) : (
              <FaBars size={20} onClick={toggle}/>
            )}
          </div>
          {/* MENU */}
          <div className="hidden md:block">
            <NavList/> 
          </div>
        </div>
      </nav>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
    </>
  );
}

export default Navbar;