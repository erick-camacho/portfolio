import Section from "./Section";
import Project from './Project';
import projects from '../data';

const Portfolio = () => {
  return (
    <Section 
      title="Portfolio" 
      subtitle="Check what I've been doing lately"
    >
      <div className="space-y-20" id="portfolio">
        {projects.map(project => 
          <Project project={project} key={project.id} />
        )}
      </div>
    </Section> 
  );
}
 
export default Portfolio;