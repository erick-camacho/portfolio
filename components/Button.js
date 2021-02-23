const Button = ({ children, primary, href = "#" }) => {
  return (
    <a href={href} role="button" className={primary ? 
      "uppercase bg-yellow-500 text-white border-2 border-yellow-500 py-2 px-8 lg:px-9 text-xs font-bold rounded-full mt-24 focus:outline-none shadow-md" :
      "uppercase text-yellow-500 border-2 border-yellow-500 py-2  px-8 lg:px-9 text-xs font-bold rounded-full mt-24 focus:outline-none shadow-md"
    }>
      { children }
    </a>
  );
}
 
export default Button;