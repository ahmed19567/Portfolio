import React from 'react'
import './about.css'

function About() {
    return (
        <div className='about-container-content' id="about">
            <h1>About Me</h1>
            <p className="about_me_intro">I'm a software engineer based in Eagan Minnesota</p>
            <p className="about_me_detail">
            My primary focus is on creating real elegant looking projects. I believe it is best to keep it clean and simple with the added functionality needed for the user.
When I'm not programming I enjoy reading and boxing
            </p>
            <p className="about_me_tech_title">
                I work mainly in these techs
            </p>
            <ul className='tech_expertise'>
                <li className='expertise'>Javascript</li>
                <li className='expertise'>React</li>
                <li className='expertise'>HTML</li>
                <li className='expertise'>Css</li>
                <li className='expertise'>Mongodb</li>
            </ul>
        </div>
    )
}

export default About
