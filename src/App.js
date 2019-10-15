import React, { useEffect } from 'react';
import './App.css';

function App() {

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

    // const titleText = document.createElement('span')
    // titleText.innerText = "Dan's Coconuts"
    // titleText.className = 'title-text'
    const iframe = document.createElement('iframe')
    iframe.src = 'https://www.danfyfe.com'
    iframe.className = 'portfolio'
    const sky = document.querySelector('.sky')
    sky.appendChild(iframe)
    treeContainer.appendChild(leftHalfCoconut)
    treeContainer.appendChild(rightHalfCoconut)
    // treeContainer.appendChild(titleText)

    fullCoconut.remove()

    renderFlamingo()
  }

  const renderFlamingo = () => {
    const sand = document.querySelector('.sand')
    const flamingo = document.createElement('img')
    flamingo.className='flamingo'
    flamingo.src='https://i.imgur.com/rqRhHlL.png'
    sand.appendChild(flamingo)
  }

  return (
    <div className='main-wrapper d-flex flex-column'>
      <div className='sky'>

        <div className='sun'>

        </div>

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

        <div className='tide'>

        </div>

        <div className='tree-container'>
          <img id='coconut-tree' src='https://i.imgur.com/LQlH63o.png' alt='cartoon coconut tree'/>
          <img id='full-coconut' className='full-coconut' src='https://i.imgur.com/Xv80fwu.png' alt='full coconut' onClick={dropCoconut}/>
        </div>
      </div>

    </div>

  );
}

export default App;

//   <img id='palm-tree' src='https://i.imgur.com/LQlH63o.png' alt='palm tree'/>

// <img id='half-coconut' src='https://i.imgur.com/r7eQv0P.png' alt='half coconut'/>