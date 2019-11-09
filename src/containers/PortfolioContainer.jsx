import React, { useState } from 'react'
import ProjectSelector from '../components/ProjectSelector'
import ProjectDisplay from '../components/ProjectDisplay'
import LinksContainer from './LinksContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PortfolioContainer = props => {

  const { setOpen, setFlamingo } = props
  const [ project, setProject ] = useState()

  return(<>
    <div className='portfolio-container'>
      <span className='title-text' >Welcome to Dan's Coconuts!</span>
      <div className='p-text-container container'>
        <div className='ml-auto my-2 times' onClick={() => {
            setOpen(false)
            window.scroll({
              top:0,
              behavior: 'smooth'
            })
            setFlamingo(true)
          }
        }>
          <FontAwesomeIcon icon='times'/>
        </div>
        <p className='p-text'>Greetings! My name is <strong>Dan Fyfe</strong> and I am a New York based Full Stack Web Developer with experience in Ruby on Rails, JavaScript and React. I ventured into programming after working as a recording engineer where creative, simple solutions to complex problems are always best. I love to learn and am excited to take my experiences and apply them to new problems as part of a team.</p>

        <LinksContainer/>

        <hr width={'80%'}/>
        <p className='p-text'>Feel free to grab a coconut and check out my projects below or close this window and enjoy the view!</p>

        <ProjectSelector setProject={setProject}/>


        { project ? <ProjectDisplay project={project}/> : null }
      </div>
    </div>
  </>)
}

export default PortfolioContainer