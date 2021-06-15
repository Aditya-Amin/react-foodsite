import React from 'react';
import aboutimage from '../images/about.png';

function About() {
    return (
        <div id="about">
            <div className="about-text">
                <h1>UPCOMING EVENT</h1>
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
            </div>
            <div className="about-image">
                <img src={aboutimage} alt=""/>
            </div>
        </div>
    )
}

export default About;
