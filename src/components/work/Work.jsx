import React from 'react'
import './work.scss'
import { Link } from "react-router-dom";

export default function Work() {
    return (
        <React.Fragment>
            <div className="work bg-black">
                <div className="container py-4">
                <Link to={"/home"} className='navigate'>Navigate Home</Link>
                    <br />
                    <div className="row">
                        <div className="col-md-6 mt-4">
                            <div className='position-relative project'>
                                <img className='w-100' src="./assets/noxe.png" alt="" />
                                <div className="layer position-absolute top-0 start-0 w-100 h-100 bg-opacity-50 bg-black">
                                    <div className='position-relative w-100 h-100 p-1'>
                                        <h3 >details</h3>
                                        <p className='mt-4'>React project with moivedb , the website has a real validation and verification</p>
                                        <a target={"_blank"} href='https://react-project1-mu.vercel.app/' className='btn btn-light position-absolute bottom-0 start-50 px-3'>vist</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mt-4">
                            <div className='position-relative project'>
                                <img className='w-100' src="./assets/Screenshot 2023-02-01 144048.png" alt="" />
                                <div className="layer position-absolute top-0 start-0 w-100 h-100 bg-opacity-50 bg-black">
                                    <div className='position-relative w-100 h-100 p-1 '>
                                        <h3 >details</h3>
                                        <p className='mt-4'>React project with E-commerce  , the website has cart to add products in cart and save this products in local storage </p>
                                        <a target={"_blank"} href='https://e-commerce-tan-delta.vercel.app/' className='btn btn-light position-absolute bottom-0 start-50 px-3'>vist</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mt-4">
                            <div className='position-relative project'>
                                <img className='w-100' src="./assets/Weather.png" alt="" />
                                <div className="layer position-absolute top-0 start-0 w-100 h-100 bg-opacity-50 bg-black">
                                    <div className='position-relative w-100 h-100 p-1'>
                                        <h3 >details</h3>
                                        <p className='mt-4'>weather project with areal api 3 days </p>
                                        <a target={"_blank"} href='https://weather-api-opal.vercel.app/' className='btn btn-light position-absolute bottom-0 start-50 px-3'>vist</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mt-4">
                            <div className='position-relative project'>
                                <img className='w-100' src="./assets/crud.png" alt="" />
                                <div className="layer position-absolute top-0 start-0 w-100 h-100 bg-opacity-50 bg-black">
                                    <div className='position-relative w-100 h-100 p-1'>
                                        <h3 className='text-'>details</h3>
                                        <p className='mt-4'>javascript project crud with local storage  </p>
                                        <a target={"_blank"} href='https://crud-rho-navy.vercel.app/' className='btn btn-light position-absolute bottom-0 start-50 px-3'>vist</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mt-4">
                            <div className='position-relative project'>
                                <img className='w-100' src="./assets/fokir.png" alt="" />
                                <div className="layer position-absolute top-0 start-0 w-100 h-100 bg-opacity-50 bg-black">
                                    <div className='position-relative w-100 h-100 p-1'>
                                        <h3 className='text-'>details</h3>
                                        <p className='mt-4'>html css bootstrap project </p>
                                        <a target={"_blank"} href='https://task1-tan.vercel.app/' className='btn btn-light position-absolute bottom-0 start-50 px-3'>vist</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mt-4">
                            <div className='position-relative project'>
                                <img className='w-100' src="./assets/morgan.png" alt="" />
                                <div className="layer position-absolute top-0 start-0 w-100 h-100 bg-opacity-50 bg-black">
                                    <div className='position-relative w-100 h-100 p-1'>
                                        <h3 className='text-'>details</h3>
                                        <p className='mt-4'>html css bootstrap project  </p>
                                        <a target={"_blank"} href='https://reoute-task6.vercel.app/' className='btn btn-light position-absolute bottom-0 start-50 px-3'>vist</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mt-4">
                            <div className='position-relative project'>
                                <img className='w-100' src="./assets/Quote.png" alt="" />
                                <div className="layer position-absolute top-0 start-0 w-100 h-100 bg-opacity-50 bg-black">
                                    <div className='position-relative w-100 h-100 p-1'>
                                        <h3 className='text-'>details</h3>
                                        <p className='mt-4'>html css bootstrap project </p>
                                        <a target={"_blank"} href='https://task2-pied.vercel.app/' className='btn btn-light position-absolute bottom-0 start-50 px-3'>vist</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}
