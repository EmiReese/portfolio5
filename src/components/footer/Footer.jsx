import React from 'react'
import './footer.css'
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'></a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/emily-reese-55488629a/"><FaLinkedin /></a>
        <a href="https://github.com/EmiReese"><FaGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; All rights reserved. </small>
      </div>
    </footer>
  )
}

export default Footer