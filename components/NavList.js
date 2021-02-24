import NavItem from './NavItem';

const SECTIONS = ["portfolio", "about", "contact"];

const NavList = ({ toggle }) => {
  return (
    <>
      {SECTIONS.map((section, i) => (
        <NavItem section={section} key={i} toggle={toggle}>
          {section}
        </NavItem>
      ))}
    </>
  );
}
 
export default NavList;