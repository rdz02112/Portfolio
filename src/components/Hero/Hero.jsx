import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero-container">
        <div className="hero-content">
            <h2>Welcome to My Portfolio</h2>
            <h3>
                Hi! I'm Siraphat Frontend Dev
            </h3>
            <p>
            I am a committed frontend developer with a passion for building responsive and interactive web applications. I have basic knowledge in HTML, CSS, JavaScript and am currently studying and developing 
            my skills in modern frameworks like React.js and Vue.js.
            </p>
        </div>

        <div className="hero-img">
          <div>
            <div className="tech-icon">
                <img src="./assets/images/react.png" alt="" />
            </div>
                <img src="./assets/images/hero.png" alt="" />
            </div>

            <div>
                <div className="tech-icon">
                    <img src="./assets/images/html.png" alt="" />
                </div>
                <div className="tech-icon">
                    <img src="./assets/images/css.png" alt="" />
                </div>
                <div className="tech-icon">
                    <img src="./assets/images/js.png" alt="" />
            </div>
          </div>
        </div>
    </section>
  );
};

export default Hero