import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa"
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
         <a href="https://www.linkedin.com/in/emily-reese-55488629a/"><FaLinkedin /></a>
        <a href="https://github.com/EmiReese"><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials