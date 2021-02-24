import Section from "./Section";
import { FaGithubSquare, FaLinkedin, FaEnvelopeSquare } from 'react-icons/fa'

const Contact = () => {
  return (
    <Section
      title="Contact"
      subtitle="If you want to talk, you can find me at:"
    >
      <div className="flex justify-center items-center space-x-10" id="contact">
        <a href="mailto:e.camachov94@gmail.com">
          <FaEnvelopeSquare size={32} className="hover:text-yellow-500"/>
        </a>
        <a 
          href="https://github.com/erick-camacho" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaGithubSquare size={32} className="hover:text-yellow-500"/>
        </a>
        <a 
          href="http://www.linkedin.com/in/erick-j-camacho" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaLinkedin size={32} className="hover:text-yellow-500"/>
        </a>
      </div>
    </Section>
  );
}
 
export default Contact;