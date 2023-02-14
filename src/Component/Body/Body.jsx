import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import computer from './computer.png'
import './body.css'

function Body() {
    return (
        <section class="section_wrapper">
            <section className="section_container">
    <section class="section1">
        <section class="section1_info">
            <h1>Ahmed Abdi</h1>
            <p>I am a software Engieer based in Minneapolis.
                I specalize in Javascript  React
                HTML,CSS, MongoDb
            </p>
             <div className="iconlink">
             <a href="https://github.com/ahmed19567" className='github'>
                <FaGithub/>
               </a>
               <a href="https://linkedin.com/in/ahmed-abdi-ahmed19567" className='linkedin'>
                <FaLinkedinIn/>
               </a>
             </div>
              
         </section>
        <section class="section1_icon">
            
        </section>
    </section>
    <section className='section2'>
        <img src={computer} alt="" className='computer_pic'/>
    </section>
    </section>
</section>
    )
}

export default Body
