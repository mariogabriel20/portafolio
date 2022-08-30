import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaReact} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='footer'>
      {/* <ul className='permalinks'>
        <li><a href='https://www.youtube.com'>Inicio</a></li>
        <li><a href='https://www.youtube.com'>Proyectos</a></li>
        <li><a href='https://www.youtube.com'>Acerca de mí</a></li>
        <li><a href='https://www.youtube.com'>Contacto</a></li>
      </ul> */}

      

      <div className='footer-socials'>
        <a href='https://www.linkedin.com/in/mario-alvear-843a0a23a/'>
          <BsLinkedin className='footer-icon'/>
        </a>
        <a href='https://github.com/mariogabriel20'>
          <BsGithub className='footer-icon'/>
        </a>
      </div>

      <div className='permalinks'>
        <h5>Desarrollado por Mario Alvear con React <FaReact id='footer-icon-react'/></h5>
      </div>
    </footer>
  )
}

export {Footer}