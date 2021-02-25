import Section from './Section'

const About = () => {
  return (
    <Section
      title="About Me"
      subtitle="A little bit of who I am..."
    >
      <div className="text-center space-y-5" id="about">
        <p>I'm <strong>Erick Camacho</strong>, a <strong>Web Developer</strong> from <strong>Monclova, México</strong>.</p>
        <p>I've learned web development from college, by myself watching tutorials, taking courses and reading documentation, and most recently I took an intensive course at <a href="http://www.academlo.com" target="_blank" rel="noopener noreferrer" className="underline font-bold">Academlo</a> about Full-Stack Web Development and Computer Science.</p>
        <p>I always want to <strong>learn more</strong>, <strong>do more</strong>, and <strong>be more</strong>.</p>
        <p>I'm <strong>hard working</strong>, <strong>super curious</strong>, <strong>passionate</strong>, <strong>commited</strong>, and also a <strong>fast learner</strong>.</p>
        <h4 className="font-semibold text-lg md:text-xl lg:text-2xl pt-5">My current stack of languages/technologies is:</h4>
        <p className="uppercase font-bold text-sm text-yellow-500 font-mono lg:text-lg">HTML5 - CSS3 - JavaScript - ReactJS - TailwindCSS - Next.js - Firebase - Python - Django</p>
      </div>
    </Section>
  );
}
 
export default About;