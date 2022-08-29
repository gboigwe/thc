import React from 'react'
import "./Header.css"
import THC1 from "../../assets/the learners corner 1.jpg"

const Header = () => {
    return (
        <div className="container">
            <section className="header">
                <div className="header-left">
                    <div className="header-content">
                        <h1>
                            Turn your ambition into a success story
                        </h1>
                        <p>Choose from over 100,000 online video courses with new additions published every mont.</p>
                    </div>
                    <div className="header-input">
                        <input placeholder="Search your favourite course" />
                    </div>
                </div>
                <div className="header-right">
                    <div className="header-img">
                        <div></div>
                        <img src={THC1} alt="thc" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Header
