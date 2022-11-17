import React from 'react'
import { FaGithub } from 'react-icons/fa';

import './body.css'

function Body() {
    return (
        <section class="section_wrapper">
    <section class="section1">
        <section class="section1_info">
            <h1>Ahmed Abdi</h1>
            <p>I am a software Engieer based in Minneapolis.
                I specalize in Javascript, Java, Node-Js, React
                HTML, MongoDb
            </p>
           {/* <div class="work_inquiry">
               <a href="#"><span>
                   My Work
               </span></a>
               <a href="#"><span>
                   Inquiry
               </span></a>
           </div> */}
           {/* <div className="icons"> */}
               <a href="https://github.com/ahmed19567" className='github'>
                <FaGithub/>
               </a>
           {/* </div> */}
        </section>
        <section class="section1_icon"></section>
    </section>
</section>
    )
}

export default Body
