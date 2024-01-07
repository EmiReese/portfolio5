import React from 'react';
import './about.css';
import about from "../../assets/about.png"
import { FaAward } from "react-icons/fa";
import { PiUsersBold } from "react-icons/pi";
import { FaFolderOpen } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className='about__me-image'>
            <img src={about} alt="About Image" />

          </div>
        </div>

        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1 year of professional experience</small>
            </article>

            <article className='about__card'>
              <PiUsersBold className='about__icon' />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className='about__card'>
              <FaFolderOpen className='about__icon' />
              <h5>Projects</h5>
              <small>80+ Completed Projects</small>
            </article>
          </div>

          <p>Motivated software engineer with an extensive knowledge of web development, design, and coding, as well experience in a wide range of programming languages, frameworks, and tools. Proven success in developing and deploying applications, websites, and web services. Highly organized and detail-oriented, with a knack for finding creative solutions for challenging problems. Results-driven Web Developer develops cutting-edge websites and applications. Expertise in HTML, CSS, JavaScript, React, Node.js, C# and other web technologies. Skilled at developing custom solutions to fit client needs while delivering high-quality products on time and under-budget.</p>
        
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>


      </div>
    </section>
  )
}

export default About;