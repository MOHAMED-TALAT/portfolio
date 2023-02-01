import React from 'react'
import './about.scss'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <React.Fragment>
            <div className="About bg-black">
                <Link to={"/home"} className='navigate'>Navigate Home</Link>
                <div className="container">
                    <br />
                    <div className="row vh-50 py-3 ">
                        <div className="inf">
                            <h3 className='fw-bold'>I build <br /> UI websites.</h3>
                        </div>
                    </div>
                    <div className="row py-3 mt-5">
                        <h3>About</h3>
                        <div className="col-md-12 w-50 m-auto">
                            <p className='mt-4'>Hi, I'm Mohamed Talat. I'm an ambitious and talented Front End Developer React js who always seeking challenging opportunities where i can fully use my skills.</p>
                            <p className='mt-4'>I'll have a Bachelor's degree in computer science from Higher Technological Institute - (HTI) in 2023.</p>
                            <p className='mt-4'>A self learner who is commited with deadlines.</p>
                            <p className='mt-4'>I have worked on many Websites using ( HTML5, CSS3, JS, Bootstrap, JQuery, SCSS and React.js )</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
