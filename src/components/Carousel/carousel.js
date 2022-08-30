import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import p5game from '../../assets/p5game.png'
import portfolio from '../../assets/portfolio.png'
import './carousel.css'

const CustomCarousel = () => {
    return (
        <Carousel fade>
            <Carousel.Item className='asd'>
                <img
                    className="d-block w-100"
                    src={portfolio}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Portafolio</h3>
                    <p>Mi portafolio desarrollado con framework React</p>
                    <div className='project-buttons-container'>
                        <a type="button" className="btn btn-primary" href="https://github.com/mariogabriel20/mariogabriel20.github.io">Ver código</a>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='asd'>
                <img
                    className="d-block w-100"
                    src={p5game}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Spaceship survivor</h3>
                    <p>Videojuego desarrollado con "p5.js", librería de Javascript</p>
                    <div className='project-buttons-container'>
                        <a type="button" className="btn btn-primary" href="https://mariogabriel20.github.io/">Ir</a>
                        <a type="button" className="btn btn-primary" href="https://github.com/mariogabriel20/mariogabriel20.github.io">Ver código</a>
                    </div>

                </Carousel.Caption>
            </Carousel.Item>

            {/* <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={p5game}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item> */}
        </Carousel>
    )
}

export { CustomCarousel }