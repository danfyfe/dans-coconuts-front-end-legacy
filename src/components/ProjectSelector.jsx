import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectSelector = props => {

  const { setProject } = props

  const projects = [

      {id:'donde', name:'Donde', imageUrl:'https://i.imgur.com/M1XBP87.png', demoUrl:'https://youtu.be/BLBVYu3FjkI', gitHubFrontEnd:'https://github.com/danfyfe/donde_front_end', gitHubBackEnd:'https://github.com/danfyfe/donde_back_end', live:'https://df-donde.herokuapp.com/', languages:'Ruby on Rails, JavaScript, React, Redux, Semantic React UI', description:'Donde is a way to keep track of your items while sharing households with others. After signing up, creating and setting up their household (or joining an existing household with the correct password) the user can move items, which automatically posts a message to the household, and sends a text to the owners of the item describing which item was moved, which user moved it, and where the item was moved to.'},

      {id:'cookThis', name:'Cook This!', imageUrl:'https://i.imgur.com/pumcVdu.png', demoUrl:'https://youtu.be/Dm--Kmcx_A8', gitHubFrontEnd:'https://github.com/danfyfe/cook-this-frontend', gitHubBackEnd:'https://github.com/danfyfe/cook-this-backend', live: 'https://cookthis.herokuapp.com/', languages:'Ruby on Rails, JavaScript, React, Semantic React UI', description:'Cook This! is an interactive recipe book designed to allow the user to cook along with the recipe. After signing up, the user can add a recipe with a url from allrecipes.com, cook along with the recipe by using the built in timer, and crossing off ingredients and steps, and favorite the recipe to add notes.'},

      {id:'dopeCocktailMenu', name:'Dope Cocktail Menu', imageUrl:'https://i.imgur.com/RXWXsEj.png', demoUrl:'https://youtu.be/EaddWBecdtQ', gitHubFrontEnd:'https://github.com/danfyfe/DopeCocktailMenu_FrontEnd', gitHubBackEnd:'https://github.com/danfyfe/DopeCocktailMenu_BackEnd', live:'https://dope-cocktail-menu.herokuapp.com/', languages:'Ruby on Rails, JavaScript, Custom CSS',description:'Dope Cocktail Menu is an interactive cocktail recipe menu based on your mood. The user selects a mood from the menu and the page transforms to display cocktail recipes that fit that mood.'}
    ]

    const renderProjectCards = () => {
      return projects.map( project => {
        return <ProjectCard key={project.id} project={project} setProject={setProject}/>
      })
    }

  return(<>
    <div className='row'>
      { renderProjectCards()}
    </div>
  </>)
}

export default ProjectSelector