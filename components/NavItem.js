import { Link } from 'react-scroll'

const NavItem = ({ children, section, toggle }) => {
  return (
    <Link
      activeClass="active"
      to={section}
      spy={true}
      smooth={true}
      offset={-200}
      duration={500}
      className="p-4 uppercase hover:text-yellow-500 cursor-pointer"
      onClick={toggle}
    >
      {children}
    </Link> 
  );
}
 
export default NavItem;