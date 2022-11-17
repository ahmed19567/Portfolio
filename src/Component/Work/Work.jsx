import React from 'react'
import './work.css'
import grocery from './Pictures/grocery.png'
import huluclone from './Pictures/huluclone.png'

function Work() {
    return (
        <div className='work_container' id="portfolio">
            <h1>Projects</h1>
            <div className="project_wrapper"> 
            <div className="projects">
                <img src={grocery} alt="project" className='project_pic'/>
                <h2 className='project_title'>Grocery Project</h2>
                <p className='project_detail'>Online grocery shopping </p>
                <div className="visit">
                <a href="https://grocery-project.vercel.app/">Visit Page</a>
                <a href="https://github.com/ahmed19567">Code</a>
                </div>
            </div>
            <div className="projects">
                <img src={huluclone} alt="project" className='project_pic'/>
                <h2 className='project_title'>Hulu Project</h2>
                <p className='project_detail'>Hulu Clone </p>
                <div className="visit">
                <a href="https://hulu-clone-tau-sage.vercel.app">Visit Page</a>
                <a href="https://github.com/ahmed19567/HuluClone">Code</a>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default Work
