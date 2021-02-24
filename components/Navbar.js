import { FaBars, FaTimes } from 'react-icons/fa';
import NavList from './NavList';
import NavItem from './NavItem';
import { useState } from 'react';
import Dropdown from './Dropdown';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <nav className={`fixed overflow-hidden top-0 w-full bg-white z-50 ${isOpen || "bg-opacity-95 shadow-md"}`} role="navigation">
        <div className="flex justify-between items-center h-14 md:h-16 max-w-5xl mx-auto px-8 text-md uppercase">
          {/* LOGO */}
          <NavItem section="home">
            <strong>Erick Camacho</strong>
          </NavItem>
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