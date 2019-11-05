import React from 'react'

const ProjectCard = props => {

  const { name, id } = props.project
  const { setProject, project } = props

  return(<>
    <div className='d-flex flex-column project-selector' onClick={() => setProject(project)}>
      <img id='proj' className='project-selector-coconut' src='https://i.imgur.com/Xv80fwu.png' alt='full coconut'/>
      <span className='project-selector-text'>{name}</span>
    </div>
  </>)
}

export default ProjectCard