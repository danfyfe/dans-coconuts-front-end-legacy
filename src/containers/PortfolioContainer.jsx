import React from 'react'
import ProjectSelector from '../components/ProjectSelector'

const PortfolioContainer = props => {
  const { setOpen } = props

  return(<>
    <div className='portfolio-container'>
      <span className='title-text' >Welcome to Dan's Coconuts!</span>
      <div className='p-text-container container'>
        <div>
          X
        </div>
        <p className='p-text'>Greetings! My name is Dan Fyfe and I am a New York based Full Stack Web Developer with experience in Ruby on Rails, JavaScript and React. I ventured into programming after working as a recording engineer where creative, simple solutions to complex problems are always best. I love to learn and am excited to take my experiences and apply them to new problems as part of a team.</p>
        <p className='p-text'>Feel free to grab a coconut and check out my projects below!</p>
      </div>
      <ProjectSelector/>
    </div>
  </>)
}

export default PortfolioContainer