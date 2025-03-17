import React from 'react';
import './project.css';

const Project = ({index, setModal, ...otherProps}) => {
  return (
    <div onMouseEnter={() => {setModal({active: true, index})}} onMouseLeave={() => {setModal({active: false, index})}} className="projectsmain_project">
            <h2>{otherProps.title}</h2>
            <img src={otherProps.src} alt="" srcset="" />
            {/* <p>{otherProps.tech}</p>
            <p>{otherProps.domain}</p> */}
        </div>
  )
}

export default Project