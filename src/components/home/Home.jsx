import React from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'

export default function Home() {

    return (
        <React.Fragment>
            <div className="main bg-black vh-100">
                <div className="container">
                    <div className="row pt-5 items-center">
                        <div className="col-md-5">
                            <div className="w-100 inf">
                                <Link to={"/about"} className='fw-bold faaa'></Link>
                                <Link to={"/work"} className='text-red-600 fw-bold'></Link>
                                <Link to={"/contact"} className='text-red-600 fw-bold'></Link>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="myImage">
                                <img className='w-100' src="./assets/myImage.png" alt="myPicture" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

