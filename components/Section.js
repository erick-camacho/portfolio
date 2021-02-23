const Section = ({ children, title, subtitle }) => {
  return (
    <section className="flex flex-col justify-center items-center max-w-5xl mx-auto px-8 pt-20">
      <h2 className="font-mono font-bold text-xl md:text-2xl lg:text-3xl text-center uppercase">
        {title}
      </h2>
      <p className="text-gray-600 mb-12">{subtitle}</p>
      {children}
    </section>
  );
}
 
export default Section;