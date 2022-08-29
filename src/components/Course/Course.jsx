import React from 'react'
import "./Course.css"
import THC1 from "../../assets/the learners corner 1.jpg"

const Course = () => {
    return (
        <div className="course">
           <section className="container">
                <div className="course-top">
                    <div className="course-top-text">
                        <h1>Get a course of your choice</h1>
                    </div>
                    <div className="course-top-nav">
                        <a href="#design" target="_blank" rel='noopener noreferrer'>Design</a>
                        <a href="#view" className="btn btn-primary" target="_blank" rel='noopener noreferrer' >view all</a>
                    </div>
                </div>
                <div className="course-ss-all">
                    <div className="course-ss">
                        <div className="course-s" >
                            <div className="course-s-img">
                                <img src={THC1} alt="the learners corner" />
                            </div>
                            <div style={{ padding:"0.5rem 0rem", display:"flex", justifyContent:"space-evenly" }}>
                            <p><span style={{ color:"rgb(255, 153, 0)", fontWeight:"800"}} >@</span>45(00)</p>
                            <p><span style={{ color:"red", fontWeight:"800"}} >@</span>22,800</p>
                            <p><span style={{ color:"green", fontWeight:"800"}} >@</span>likes</p>
                            </div>
                            
                            <hr />
                            <div className="course-s-content">
                                <p> Everything You Need to Know About Business</p>
                                <div className="course-s-bottom">
                                    <div className="course_s_bottom_img">
                                        <img src={THC1} alt="Learning" />
                                    </div>
                                    <span> Mayowa Ismail</span>
                                    <div className="course-s-bottom-price">
                                        <del>50.00</del> <span style={{ color:"rgb(255, 153, 0)", fontWeight:"800"}} >49.45</span>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>
                    <div className="course-ss">
                        <div className="course-s" >
                            <div className="course-s-img">
                                <img src={THC1} alt="the learners corner" />
                            </div>
                            <div style={{ padding:"0.5rem 0rem", display:"flex", justifyContent:"space-evenly" }}>
                            <p><span style={{ color:"rgb(255, 153, 0)", fontWeight:"800"}} >@</span>45(00)</p>
                            <p><span style={{ color:"red", fontWeight:"800"}} >@</span>22,800</p>
                            <p><span style={{ color:"green", fontWeight:"800"}} >@</span>likes</p>
                            </div>
                            
                            <hr />
                            <div className="course-s-content">
                                <p> Everything You Need to Know About Business</p>
                                <div className="course-s-bottom">
                                    <div className="course_s_bottom_img">
                                        <img src={THC1} alt="Learning" />
                                    </div>
                                    <span> Mayowa Ismail</span>
                                    <div className="course-s-bottom-price">
                                        <del>50.00</del> <span style={{ color:"rgb(255, 153, 0)", fontWeight:"800"}} >49.45</span>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>
                    <div className="course-ss">
                        <div className="course-s" >
                            <div className="course-s-img">
                                <img src={THC1} alt="the learners corner" />
                            </div>
                            <div style={{ padding:"0.5rem 0rem", display:"flex", justifyContent:"space-evenly" }}>
                            <p><span style={{ color:"rgb(255, 153, 0)", fontWeight:"800"}} >@</span>45(00)</p>
                            <p><span style={{ color:"red", fontWeight:"800"}} >@</span>22,800</p>
                            <p><span style={{ color:"green", fontWeight:"800"}} >@</span>likes</p>
                            </div>
                            
                            <hr />
                            <div className="course-s-content">
                                <p> Everything You Need to Know About Business</p>
                                <div className="course-s-bottom">
                                    <div className="course_s_bottom_img">
                                        <img src={THC1} alt="Learning" />
                                    </div>
                                    <span> Mayowa Ismail</span>
                                    <div className="course-s-bottom-price">
                                        <del>50.00</del> <span style={{ color:"rgb(255, 153, 0)", fontWeight:"800"}} >49.45</span>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
           </section>
        </div>
    )
}

export default Course
