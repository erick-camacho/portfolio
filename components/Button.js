const Button = ({ children, primary, href = "#" }) => {
  return (
    <div className="transform hover:-translate-y-1 inline-block">
      <a href={href} role="button" className={primary ? 
        "uppercase bg-yellow-500 text-white border-2 border-yellow-500 py-2 px-8 lg:px-9 text-xs font-bold rounded-full mt-24 shadow-md transform hover:-translate-y-1":
        "uppercase text-yellow-500 border-2 border-yellow-500 py-2  px-8 lg:px-9 text-xs font-bold rounded-full mt-24 shadow-md transform hover:-translate-y-1"
      }>
        { children }
      </a>
    </div>
  );
}
 
export default Button;