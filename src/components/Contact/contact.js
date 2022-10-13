import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {FaWhatsapp} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const showSnackBar = () => {
    // Create the snackbar DIV
    var x = document.createElement("div");
    x.id = "snackbar";
    x.className = "show";
    x.innerHTML = "Se ha enviado el mensaje";
    document.getElementById("root").append(x);
    
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ document.getElementById("snackbar").remove();}, 3000);
  }

  const showErrorSnackBar = () => {
    // Create the snackbar DIV
    var x = document.createElement("div");
    x.id = "snackbar";
    x.className = "show";
    x.innerHTML = "Hubo un problema al enviar su mensaje";
    document.getElementById("root").append(x);
    
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ document.getElementById("snackbar").remove();}, 3000);
  }

  const sendEmail = (e) => {
    e.preventDefault(); 
    emailjs.sendForm('service_x0o437k', 'template_ny0o8dv', form.current, '17IORc5BjCALnj1FG')
      .then((result) => {
          console.log(result.text);
          showSnackBar();
          e.target.reset()
      }, (error) => {
          showErrorSnackBar();
          console.log(error.text);
      });
  };

  return (
    <section className='contact' id='contact'>
      <h1 className='contact-title'>Contacto</h1>
      <div className='container contact-container'>
        <div className='contact-options'>
          <article className='contact-option'>
            <HiOutlineMail className='contact-option-icon'/>
            <h5>gabbriel.mario@gmail.com</h5>
            <a href='mailto:gabbriel.mario@gmail.com' target="_blank" rel='noreferrer'>Enviar un mensaje</a>
          </article>
          <article className='contact-option'>
            <FaWhatsapp className='contact-option-icon'/>
            <h5>+56 9 53672028</h5>
            <a href='https://api.whatsapp.com/send?phone+56953672028' target="_blank" rel='noreferrer'>Enviar un mensaje</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Tu nombre completo" required/>
          <input type="email" name="email" placeholder="Tu email" required/>
          <textarea name='message' id='' cols='30' rows='10' placeholder="Mensaje" required/>
          <button type='submit' className='btn btn-primary'>Enviar</button>
        </form>
      </div>
    </section>
  )
}

export {Contact}