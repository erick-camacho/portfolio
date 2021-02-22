import Button from "./Button"

const Hero = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center pt-14 lg:pt-16 bg-hero bg-no-repeat bg-center bg-cover">
      <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl text-center">
        Hello! I'm <span className="text-yellow-500 font-black">Erick</span>
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl mt-4 md:mt-5 lg:mt-6 text-gray-600">Web Developer</p>
      <Button primary>See my projects</Button>
    </div>
  );
}
 
export default Hero;