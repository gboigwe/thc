import React from 'react'
import "./Apply.css"
import THC1 from "../../assets/the learners corner 1.jpg"

const Apply = () => {
    return (
        <div className="apply">
            <section className="container">
                <div className="apply-boxes">
                    <div className="apply-box">
                        <div className="apply-img img1">
                            <img src={THC1} alt="icon" />
                        </div>
                        <div className="apply-box-content">
                            <h2>Become a Teacher</h2>
                            <p>Teach what you love. Coursector gives you the tools to create a course</p>
                            <a href="#apply" className="btn btn-primary">Apply as teacher</a>
                        </div>
                    </div>
                    <div className="apply-box">
                        <div className="apply-img img1">
                            <img src={THC1} alt="icon" />
                        </div>
                        <div className="apply-box-content">
                            <h2>Becoome a Teacher</h2>
                            <p>Teach what you love. Coursector gives you the tools to create a course</p>
                            <a href="#apply" className="btn btn-primary">Get THC for business</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Apply
