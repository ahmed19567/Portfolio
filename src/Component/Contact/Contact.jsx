import React from 'react'
import { FaEnvelope } from 'react-icons/fa';

import './contact.css'
function Contact() {
    return (
        <footer className='contact_container' id="contact" >
            <h2>
                Let's Create
                <br/>
                Something Great
            </h2>
            <p className='moreinfo'>
            If you like my work and have some cool project to work on, you can get in 
            touch with me using this email address: joneyjones05@gmail.com
            </p>
            <a href="mailto:joneyjones05@gmail.com" className='contact_tag'>  
                <div className="sendmail">
                    <FaEnvelope className='envelope'/>
                    <p>Get in touch</p>
                </div>
                 </a>  

        </footer>
    )
}

export default Contact
