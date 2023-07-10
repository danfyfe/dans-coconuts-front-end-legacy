import React, { useState } from 'react'
import ProjectSelector from '../components/ProjectSelector'
import ProjectDisplay from '../components/ProjectDisplay'
import LinksContainer from './LinksContainer'
import ContactContainer from './ContactContainer'
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
        <p className='p-text'>
          Greetings! My name is <strong>Dan Fyfe</strong> 
           and I am a user-focused Software Engineer passionate about simple, creative solutions to complex problems. With my background in the e-commerce marketplace sector reaching millions of users, I have a proven track record of quickly learning and adapting while working closely with product and design teams to deliver high-quality software that meets business objectives and brings value to the team. I thrive on challenging projects that allow me to stretch my skills and expertise to deliver innovative solutions, while my experience with JavaScript, React, Next.js, and Node, accompanied by my technical design and documentation skills, makes me a valuable addition to any software engineering team.
        </p>

        <LinksContainer/>
        <ContactContainer/>

        <hr width={'80%'}/>
        <p className='p-text'>
          I am currently modernizing and updating this site with some exciting new features, but for now, feel free to grab a coconut and check out some projects from my days at Flatiron School below or close this window and enjoy the view!
        </p>

        <ProjectSelector setProject={setProject}/>


        { project ? <ProjectDisplay project={project}/> : null }
      </div>
    </div>
  </>)
}

export default PortfolioContainer