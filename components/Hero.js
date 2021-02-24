import { Link } from "react-scroll"

const Hero = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center pt-14 lg:pt-16 bg-hero bg-no-repeat bg-center bg-cover" id="home">
      <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl text-center">
        Hello! I'm <span className="text-yellow-500 font-black">Erick</span>
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl mt-4 md:mt-5 lg:mt-6 text-gray-600">Web Developer</p>
      <Link
        activeClass="active"
        to="portfolio"
        spy={true}
        smooth={true}
        offset={-220}
        duration={500}
        className="uppercase bg-yellow-500 text-white border-2 border-yellow-500 py-2 px-8 lg:px-9 text-xs font-bold rounded-full mt-24 shadow-md cursor-pointer transform hover:-translate-y-1"
      >
        See my projects
      </Link>
    </div>
  );
}
 
export default Hero;