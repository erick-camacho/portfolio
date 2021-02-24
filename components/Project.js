import Image from 'next/image'
import { useState, useEffect } from 'react';
import Button from './Button'
import { FaLink, FaGithub } from 'react-icons/fa'

const Project = ({ project, i }) => {
  const [isOdd, setIsOdd] = useState(false)
  useEffect(() => {
    if (!(i%2)) {
      setIsOdd(true)
    }
  }, [])
  
  return (
    <article className="flex flex-col justify-center items-center text-center lg:text-left">
      <h4 className="font-mono font-bold text-lg md:text-xl lg:text-2xl mb-8">{project.name}</h4>
      <div className={isOdd ? "lg:flex lg:flex-row-reverse" : "lg:flex"}>
        <div className="shadow-md mb-6 lg:flex-1">
          <Image src={project.image} width={600} height={300} />
        </div>
        <div className="mb-6 lg:flex-1 lg:pl-8">
          <p className="text-gray-600 mb-6">{project.description}</p>
          <p className="font-bold text-xs uppercase mb-8">
            {project.stack}
          </p>
          <div className="relative space-x-10">
            <Button primary><FaLink size={12} className="inline mb-1 mr-1"/>Visit</Button>
            <Button><FaGithub size={12} className="inline mb-1 mr-1"/>Source</Button>
          </div>
        </div>
      </div>
    </article>
  );
}
 
export default Project;