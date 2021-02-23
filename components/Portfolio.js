import Section from "./Section";
import Project from './Project';

const Portfolio = () => {
  return (
    <Section 
      title="Portfolio" 
      subtitle="Check what I've been doing lately"
    >
      <div className="space-y-20">
        <Project i={1} project={{
          name: "Realtime Chat", 
          image: "/chat-ss.png",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus ea inventore animi officia numquam nobis quos exercitationem? Commodi at eligendi ullam molestias earum. Quibusdam cumque quasi tempora delectus assumenda esse.",
          stack: "Next.js - TailwindCSS - Firebase"
        }}/>
        <Project i={2} project={{
          name: "Realtime Chat", 
          image: "/chat-ss.png",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus ea inventore animi officia numquam nobis quos exercitationem? Commodi at eligendi ullam molestias earum. Quibusdam cumque quasi tempora delectus assumenda esse.",
          stack: "Next.js - TailwindCSS - Firebase"
        }}/>
      </div>
    </Section> 
  );
}
 
export default Portfolio;