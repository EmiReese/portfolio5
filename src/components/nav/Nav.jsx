import React , {useState}from 'react'
import './nav.css';
import { FiHome } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5"
import { RiServiceLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => { setActiveNav('#')}} className={activeNav === '#' ? 'active': ''}><FiHome /></a>
      <a href="#about" onClick={() => { setActiveNav('about')}} className={activeNav === 'about' ? 'active': ''}><FaRegUserCircle /></a>
      <a href="#experience" onClick={() => { setActiveNav('experience')}} className={activeNav === 'experience' ? 'active': ''}><IoBookOutline /></a>
      <a href="#services" onClick={() => { setActiveNav('services')}}className={activeNav === 'services' ? 'active': ''}><RiServiceLine /></a>
      <a href="#contact" onClick={() => { setActiveNav('contact')}}className={activeNav === 'contact' ? 'active': ''}><FiPhoneCall /></a>
    </nav>
  )
}

export default Nav