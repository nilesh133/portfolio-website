import { useState } from 'react';
import Project from '../Project/Project';
import './projectsmain.css';
import ProjectModal from '../ProjectModal/ProjectModal';

const projects = [
  {
    title: "Hire It - Job Portal",
    src: "https://images.unsplash.com/photo-1523655223303-4e9ef5234587?q=80&w=1774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#000000",
    tech: "React JS, SCSS, NodeJS, MongoDB",
    domain: 'FullStack Developement'
  },
  {
    title: "Mosaic",
    src: "https://images.unsplash.com/photo-1483717214777-e2baa10cf8e1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#8C8C8C",
    tech: "React JS, CSS",
    domain: 'Frontend Developement'
  },
  {
    title: "Landing",
    src: "https://images.unsplash.com/photo-1713557112617-e12d67bddc3a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#EFE8D3",
    tech: "React JS, CSS",
    domain: 'Frontend Developement'
  },
  {
    title: "Landerz",
    src: "https://images.unsplash.com/photo-1709293185602-0bb6f936d97d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#706D63",
    tech: "React JS, CSS",
    domain: 'Frontend Developement'
  }
]

const ProjectsMain = () => {

  const [modal, setModal] = useState({active: false, index: 0})

  return (
  <main className="projectsmain">
    <div className="projectsmain_body">
      {
        projects.map( (project, index) => {
          return <Project key={index} index={index} setModal={setModal} {...project}/>
        })
      }
    </div>
    <ProjectModal modal={modal} projects={projects}/>
  </main>
  )
}

export default ProjectsMain