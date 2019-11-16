import React from 'react'
import { scrollToElement } from '../actions/general'


const ProjectCard = props => {

  const { setProject, project } = props
  const { name } = project

  return(<>

      <div className='d-flex flex-column project-selector col-sm' onClick={() => {
        setProject(project)
        scrollToElement('.project-selector-text')
      }}>
        <img id='proj' className='project-selector-coconut m-auto' src='https://i.imgur.com/Xv80fwu.png' alt='full coconut'/>
          <span className='project-selector-text'>{name}</span>
      </div>
  </>)
}

export default ProjectCard

// <div className='d-flex flex-column project-selector col-sm' onClick={() => {
//   setProject(project)
// }}>
//   <img id='proj' className='project-selector-coconut' src='https://i.imgur.com/Xv80fwu.png' alt='full coconut'/>
//   <span className='project-selector-text'>{name}</span>
// </div>