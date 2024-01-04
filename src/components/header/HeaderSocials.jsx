import React from 'react'
import {CiLinkedin} from "react-icons/ci"
import { FaGithub } from "react-icons/fa"
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="www.linkedin.com/in/emily-reese-55488629a/" target="_blank"><CiLinkedin /></a>
        <a href="www.github.com" target="_blank"><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials