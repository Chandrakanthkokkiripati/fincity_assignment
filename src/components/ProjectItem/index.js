import React from 'react'
import './index.css'

const ProjectItem = (props) => {
    const {project} = props
    console.log(project)
    const {projectName, projectImgUrl, projectDescription} = project
  return (
    <li className='project-list-item'>
      <div className='list-item-desc'>
        <h1>{projectName}</h1>
        <p>{projectDescription}</p>
        <button type='button'>View Project</button>
      </div>
      <img src={projectImgUrl} alt='projectImage' className='project-image'/>
    </li>
  )
}

export default ProjectItem
