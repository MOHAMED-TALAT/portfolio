import React from 'react'
import './contact.scss'
import { Link } from 'react-router-dom'

export default function Contact() {
    return (
        <React.Fragment>
            <div className="contact bg-black">
                <Link to={"/home"} className='navigate'>Navigate Home</Link>
                <div className="container vh-100">
                    <br />
                    <div className="row  py-3">
                        <div className="inf">
                            <h3 className='fw-bold'>I design & build <br /> UI websites.</h3>
                        </div>
                    </div>
                    <div className="row py-3">
                        <h3>Contact</h3>
                        <div className="col-md-12 w-50 mt-3 py-3">
                            <a href="https://github.com/MOHAMED-TALAT">GiHhub</a>
                            <a href="https://www.facebook.com/profile.php?id=100009418744091">Facebook</a>
                            <a href="mailto:talatm216@gmail.com">gmail</a>
                            <a href="tel:01069452104">phone number</a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}
