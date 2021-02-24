import NavList from './NavList'

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div className={`fixed top-14 left-0 z-40 transform transition-all duration-300 ease-in-out ${isOpen ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="h-screen w-screen flex flex-col justify-center items-center bg-white -mt-14 md:hidden">
        <NavList toggle={toggle}/>
      </div>
    </div>
  );
}
 
export default Dropdown;