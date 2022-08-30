import React from 'react'
import './about.css'
import htmlIcon from '../../assets/html_icon.png'
import cssIcon from '../../assets/css_icon.png'
import javascriptIcon from '../../assets/javascript_icon.png'
import pythonIcon from '../../assets/python_icon.png'
import flutterIcon from '../../assets/flutter_icon.png'
import reactIcon from '../../assets/react_icon.png'
import gitIcon from '../../assets/git_icon.png'
import apiIcon from '../../assets/api_icon.png'

const About = () => {
  return (
    <section className='about' id='about'>
      <h1 className='about-title'>Acerca de mí</h1>
      <p className='container p-about'>Hola! Mi nombre es Mario Alvear González y vivo en Iquique, Chile. Soy Ingeniero Civil Informático titulado en la Universidad de Tarapacá el año 2022. Me apasiona la informática
        en general, pero mi área preferida es el desarrollo de software, me encanta programar y aprender nuevas tecnologías!</p>
      <h2 className='about-skills'>Tengo conocimientos en: </h2>
      <ul className='skills-ul'>
        <li className='skills-item'>
          <img className='skills-icon' src={htmlIcon} alt='html-icon'></img>
          HTML5
        </li>
        <li className='skills-item'>
          <img className='skills-icon' src={cssIcon} alt='css-icon'></img>
          CSS3
        </li>
        <li className='skills-item'>
          <img className='skills-icon' src={javascriptIcon} alt='javascript-icon'></img>
          Javascript
        </li>
        <li className='skills-item'>
          <img className='skills-icon' src={pythonIcon} alt='python-icon'></img>
          Python
        </li>
        <li className='skills-item'>
          <img className='skills-icon' src={flutterIcon} alt="flutter-icon"></img>
          Flutter
        </li>
        <li className='skills-item'>
          <img className='skills-icon' src={reactIcon} alt='react-icon'></img>
          React.js
        </li>
        <li className='skills-item'>
          <img className='skills-icon' src={gitIcon} alt='git-icon'></img>
          Git
        </li>
        <li className='skills-item'>
          <img className='skills-icon' src={apiIcon} alt='api-icon'></img>
          API/Webservices
        </li>
      </ul>
      {/* <p className='container p-about'>Front-end y Backend</p> */}
    </section>
  )
}

export { About }