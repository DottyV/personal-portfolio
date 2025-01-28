import React from 'react'
import ProjectItem from './ProjectItem'
import recipeImg from '../assets/recipeImg.jpg'
import kritiqueImg from '../assets/kritiqueImg.jpg'
import defaultProjImg from '../assets/defaultProjImg.png'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
       <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
       <p className='text-center py-8'>
       Explore some of my featured projects that showcase my skills in software development, data analytics, and problem-solving. 
       These projects demonstrate my ability to design, implement, and deliver solutions using modern technologies such as Python, C++, React, and cloud-based platforms. 
       Dive in to see how I tackle real-world challenges with creativity and technical expertise.
       </p>
       <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={kritiqueImg} title = 'Kritique' link={"https://kritique-web.vercel.app/"} pryTech={'Python, Flask, Vite.js, MongoDB'}/>
        <ProjectItem img={recipeImg} title = 'Dishcovery' link={"https://recipe-app-zeta-seven-50.vercel.app/"} pryTech={'Javascript, Vite.js, React, Tailwind'}/>
        <ProjectItem img={defaultProjImg} title = 'AED Plus' link={"https://github.com/DottyV/AED-Plus"} pryTech={'C++, Qt framework'}/>
        <ProjectItem img={defaultProjImg} title = 'Wellnex' link={"https://github.com/DottyV/Wellnex"} pryTech={'JavaScript, PostgreSQL, CSS'}/>
       </div>
    </div>
  )
}

export default Projects
