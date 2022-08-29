import React from 'react'
import "./Coaching.css"
import THC1 from "../../assets/the learners corner 1.jpg"

const Coaching = () => {
    return (
        <div className="coaching">
            <section className="container">
                <div className="coaching-top">
                    <div className="coaching-img img1">
                        <img src={THC1} alt="image icon" />
                    </div>
                    <div className="coaching-img img2">
                        <img src={THC1} alt="image icon" />
                    </div>
                </div>
                <div className="coaching-circle">
                    <div className="circle1"></div>
                    <div className="circle2"></div>
                </div>
                <div className="coaching-middle">
                    <div className="coaching-img img1">
                        <img src={THC1} alt="image icon" />
                    </div>
                    <div className="coaching-img img2">
                        <img src={THC1} alt="image icon" />
                    </div>
                </div>
                <div className="coaching-content">
                    <h2>Online Coaching Lessons For Remote Learning.</h2>
                    <p>100% online learning from the world's best universities and companies</p>
                    <a href="#join" className="btn btn-primary">Join Today</a>
                </div>
                <div className="coaching-buttom">
                    <div className="coaching-img img1">
                        <img src={THC1} alt="image icon" />
                    </div>
                    <div className="coaching-img img2">
                        <img src={THC1} alt="image icon" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Coaching
