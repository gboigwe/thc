import React from 'react'
import "./Student.css"
import THC1 from "../../assets/the learners corner 1.jpg"

const Student = () => {
    return (
        <div className="student">
           <section className="container">
                <div className="student-top">
                    <div className="student-top-text">
                        <h1>What our students have to say</h1>
                    </div>
                    <div className="student-top-nav">
                        <a href="#design" target="_blank" rel='noopener noreferrer'>icon</a>
                        <a href="#view" className="btn btn-primary" target="_blank" rel='noopener noreferrer' >icon</a>
                    </div>
                </div>
                <div className="student-body">
                    <div className="student-say">
                        <div className="student-say-id">
                            <div className="student-id-say-img">
                                <img src={THC1} alt="Learning" />
                            </div>
                            <div className="student-say-id-content">
                                <p>Business Intl</p>
                                <span>Mayowa Ismail</span>
                            </div>
                            <div className="student-rate">
                                <span style={{ color:"var(--color-gold)", fontWeight:"800"}} >@ @ @ @ @</span>
                            </div>
                        </div>
                        <div className="student-say-content">
                            <p>The Learners Corner is a life saver. I don't have the time/money
                                for a college education. My goal is to become a freelance web
                                developer and thanks to Learners Corner.
                            </p>
                        </div>
                    </div>
                    <div className="student-say">
                        <div className="student-say-id">
                            <div className="student-id-say-img">
                                <img src={THC1} alt="Learning" />
                            </div>
                            <div className="student-say-id-content">
                                <p>Business Intl</p>
                                <span>Mayowa Ismail</span>
                            </div>
                            <div className="student-rate">
                                <span style={{ color:"var(--color-gold)", fontWeight:"800"}} >@ @ @ @ @</span>
                            </div>
                        </div>
                        <div className="student-say-content">
                            <p>The Learners Corner is a life saver. I don't have the time/money
                                for a college education. My goal is to become a freelance web
                                developer and thanks to Learners Corner.
                            </p>
                        </div>
                    </div>
                </div>
           </section>
        </div>
    )
}

export default Student
