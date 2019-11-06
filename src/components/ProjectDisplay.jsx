import React from 'react'

const ProjectDisplay = props => {
  const { project } = props
  const { name, imageUrl, description, languages, gitHubFrontEnd, gitHubBackEnd, demoUrl, live } = project

  return(<>
    <div className='container project-display' title={name} id={name}>

      <div className='text-center'>
        <h1>{name}</h1>
      </div>

      <hr width={'80%'}/>

      <img alt={name + 'demo image'} src={imageUrl} className='project-img'/>

      <div className='project-links'>
        <span className='project-link'><a href={gitHubFrontEnd} target='_blank' rel='noopener noreferrer'>GitHub Front End</a></span>
        <span>|</span>
        <span className='project-link'><a href={gitHubBackEnd} target='_blank' rel='noopener noreferrer'>GitHub Back End</a></span>
        <span>|</span>
        <span className='project-link'><a href={demoUrl} target='_blank' rel='noopener noreferrer'>Demo</a></span>
        <span>|</span>
        <span className='project-link'><a href={live} target='_blank' rel='noopener noreferrer'>Live</a></span>
      </div>

      <p className='project-languages'>
        {languages}
      </p>

      <div className='project-description'>
        {description}
      </div>

    </div>
  </>)
}

export default ProjectDisplay