import React from 'react'
import './projects.css'
import { CustomCarousel } from '../Carousel/carousel.js'

const Projects = () => {
  return (
    <section className='projects' id='projects'>
      <h1 className='projects-title'>Proyectos</h1>
      {/* <div className='container project-list'>
        <div className="card">
          <img className="card-img-top" src={p5game} alt="Card img cap"></img>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className='card-buttons'>
              <a type="button" className="btn btn-primary" href="https://mariogabriel20.github.io/">Ir</a>
              <a type="button" className="btn btn-primary" href="https://mariogabriel20.github.io/">Ver código</a>
            </div>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src={p5game} alt="Card img cap"></img>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className='card-buttons'>
              <a type="button" className="btn btn-primary" href="https://mariogabriel20.github.io/">Ir</a>
              <a type="button" className="btn btn-primary" href="https://mariogabriel20.github.io/">Ver código</a>
            </div>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src={p5game} alt="Card img cap"></img>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className='card-buttons'>
              <a type="button" className="btn btn-primary" href="https://mariogabriel20.github.io/">Ir</a>
              <a type="button" className="btn btn-primary" href="https://mariogabriel20.github.io/">Ver código</a>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className='carousel-container'>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={p5game} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={p5game} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={p5game} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div> */}
      <div className='carousel-container'>
        <CustomCarousel/>
      </div>
      

    </section>
  )
}

export { Projects }