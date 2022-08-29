import React from 'react'
import "./Platform.css"
import THC1 from "../../assets/the learners corner 1.jpg"

const Platform = () => {
    return (
        <div className="" style={{background:"var(--color-white)"}}>
            <section className=" container  platform">
                <div className="platform-left">
                    <div className="platform-content">
                        <h2>
                            Know about learning learning platform
                        </h2>
                        <p>My name is Mayowa (a.k.a Mayor). I will be documenting and sharing contents as
                            I explore new fields subjects and Hobbies such as:</p>
                    </div>
                    <div className="platform-list">
                        <ul>
                            <li>Business Inteligence</li>
                            <li>Data Analysis</li>
                            <li>Financial Modelling and Valuations</li>
                            <li>German Language</li>
                            <li>Keyboard practice</li>
                            <li>And Much More</li>
                        </ul>
                    </div>
                    <div className="platform-btn">
                        <a href="#start" className="btn btn-primary">Start learning now</a>
                    </div>
                </div>
                <div className="platform-right">
                    <div className="platform-img">
                        <div></div>
                        <img src={THC1} alt="thc" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Platform
