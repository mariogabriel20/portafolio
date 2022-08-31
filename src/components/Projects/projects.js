import React from 'react'
import './projects.css'
import { CustomCarousel } from '../Carousel/carousel.js'

const Projects = () => {
  return (
    <section className='projects' id='projects'>
      <h1 className='projects-title'>Proyectos</h1>
      <div className='carousel-container'>
        <CustomCarousel/>
      </div>
      

    </section>
  )
}

export { Projects }