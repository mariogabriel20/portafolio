import React from 'react'
import './home.css'
import ME from '../../assets/me_img.jpg'
import CV from '../../assets/CV.pdf'

const Home = () => {
    return (
        <section className='home' id='home'>
            <h1 className='home-title'>Mario Alvear González</h1>
            <h4 className='home-h4'>Ingeniero Civil Informático</h4>
            <img src={ME} className='me-img' alt=''></img>
            <div className='home-buttons'>
                <a type="button" className="btn btn-outline-primary" href={CV} download>Descargar CV</a>
                <a type="button" className="btn btn-outline-primary" href='#contact'>Contáctame</a>
            </div>

        </section>
    )
}

export { Home }