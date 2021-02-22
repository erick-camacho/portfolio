const Button = ({ children, primary }) => {
  return (
    <button className={primary ? 
      "uppercase bg-yellow-500 text-white border-2 border-yellow-500 py-3 lg:py-4 px-8 lg:px-9 text-sm font-bold rounded-full mt-24 focus:outline-none shadow-md" :
      "uppercase text-yellow-500 border-2 border-yellow-500 py-3 lg:py-4 px-8 lg:px-9 text-sm font-bold rounded-full mt-24 focus:outline-none shadow-md"
    }>
      { children }
    </button>
  );
}
 
export default Button;