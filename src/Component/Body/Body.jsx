import React from 'react'
import { FaGithub } from 'react-icons/fa';
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
                I specalize in Javascript, Java, Node-Js, React
                HTML, MongoDb
            </p>
               <a href="https://github.com/ahmed19567" className='github'>
                <FaGithub/>
               </a>
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
