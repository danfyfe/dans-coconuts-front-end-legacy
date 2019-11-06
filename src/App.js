import React, { useState, useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import './App.css';
import PortfolioContainer from './containers/PortfolioContainer'

function App() {

  library.add(faTimes)

  const [ open, setOpen ] = useState(true)
  const [ flamingo, setFlamingo ] = useState()

  useEffect(() => {
    const fishDiv = document.querySelector('#fish-div')
    const fishWater = document.createElement('div')
    fishWater.id='fish-water'
    fishWater.innerText = '~~~'

    const fish = document.createElement('img')
    fish.src = 'https://i.imgur.com/s8dsRWX.png'
    fish.id = 'fish'

    setInterval(() => {
      fishDiv.appendChild(fishWater)
      fishDiv.appendChild(fish)
      setTimeout(() => {
        fish.remove()
        // fishWater.remove()
      }, 900)

      setTimeout(() => {
        fishWater.remove()
      }, 1000)

    }, 8000)
  })

  const dropCoconut = () => {
    const fullCoconut = document.querySelector('.full-coconut')
    fullCoconut.className = 'falling'
    setTimeout(breakCoconut,500)
  }


  const breakCoconut = () => {
    const fullCoconut = document.querySelector('.falling')

    const treeContainer = document.querySelector('.tree-container')

    const leftHalfCoconut = document.createElement('img')
    leftHalfCoconut.src = 'https://i.imgur.com/r7eQv0P.png'
    leftHalfCoconut.className = 'half-coconut left-half'

    const rightHalfCoconut = document.createElement('img')
    rightHalfCoconut.src = 'https://i.imgur.com/r7eQv0P.png'
    rightHalfCoconut.className = 'half-coconut right-half'


    treeContainer.appendChild(leftHalfCoconut)
    treeContainer.appendChild(rightHalfCoconut)


    fullCoconut.remove()

    // title text and flamingo removed for now

    // const titleText = document.createElement('span')
    // titleText.innerText = "Welome to Dan's Coconuts"
    // titleText.className = 'title-text'
    // treeContainer.appendChild(titleText)
    // renderFlamingo()
    setOpen(true)
  }

  // commented out for now - not sure flamingo is needed

  const renderFlamingo = () => {
    const sand = document.querySelector('.sand')
    const flamingo = document.createElement('img')
    flamingo.className='flamingo'
    flamingo.src='https://i.imgur.com/rqRhHlL.png'

    sand.appendChild(flamingo)
  }

  return (<>
    <div className='main-wrapper d-flex flex-column'>

    { flamingo ? renderFlamingo() : null }

    { open ?
      <PortfolioContainer setOpen={setOpen} setFlamingo={setFlamingo}/> : null }

      <div className='sky'>

        <div className='sun'/>

      </div>

      <div className='water'>

      <div className='d-flex flex-column'>

        <div>
          <div className='wave'>
            ~~~~~~
          </div>
        </div>

        <div id="fish-div">

        </div>

        <div className='d-flex justify-content-center'>
          <div className='wave'>
            ~~~~~~~~~~
          </div>
        </div>

        <div className='d-flex justify-content-end'>
          <div className='wave'>
            ~~~~~~
          </div>
        </div>

      </div>

      </div>

      <div className='sand'>

        <div className='tide'/>


        <div className='tree-container'>
          <img id='coconut-tree' src='https://i.imgur.com/LQlH63o.png' alt='cartoon coconut tree'/>
          <img id='full-coconut' className='full-coconut' src='https://i.imgur.com/Xv80fwu.png' alt='full coconut' onClick={dropCoconut}/>
        </div>

      </div>
      <div className='more-sand'/>

    </div>

  </>);
}

export default App;

//   <img id='palm-tree' src='https://i.imgur.com/LQlH63o.png' alt='palm tree'/>

// <img id='half-coconut' src='https://i.imgur.com/r7eQv0P.png' alt='half coconut'/>