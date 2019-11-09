import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LinksContainer = props => {
    return(
        <div className='links-container'>
            <a className='link-icon' href='https://www.linkedin.com/in/danfyfe' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={['fab','linkedin']}/>
            </a>
            <a className='link-icon' href='https://github.com/danfyfe' target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={['fab', 'github']}/>
            </a>
            <a className='link-icon' href='https://medium.com/@danfyfe' target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={['fab','medium']}/>
            </a>
        </div>
    )
}

export default LinksContainer