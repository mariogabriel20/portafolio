import React, { useState } from 'react';
import './header.css';

const Header = () => {
    const [isActive, setIsActive] = useState(false)
    const [activeNav, setActiveNav] = useState('#home')

    const handleClick = event => {
        // 👇️ toggle isActive state on click
        setIsActive(current => !current);
      };
    return (
        <div className='header'>
            <nav className="navbar navbar-expand-lg navbar-light menu-bar">
                <button onClick={handleClick} className="navbar-toggler bg-primary" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isActive ? 'show': ''}`} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a onClick={() => setActiveNav('#home')} className={`nav-link ${activeNav === '#home' ? 'active': ''}`} href="#home">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={() => setActiveNav('#about')} className={`nav-link ${activeNav === '#about' ? 'active': ''}`} href="#about">Acerca de mí</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={() => setActiveNav('#projects')} className={`nav-link ${activeNav === '#projects' ? 'active': ''}`} href="#projects">Proyectos</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={() => setActiveNav('#contact')} className={`nav-link ${activeNav === '#contact' ? 'active': ''}`} href="#contact">Contacto</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        // <div className="header">
        //     <nav className="menu-bar">
        //         <a className="menu-bar-text" href="home">Inicio</a>
        //         <a className="menu-bar-text" href="about">Acerca de mí</a>
        //         <a className="menu-bar-text" href="projects">Proyectos</a>
        //     </nav>
        //     Header
        // </div>
    )
}

export { Header };