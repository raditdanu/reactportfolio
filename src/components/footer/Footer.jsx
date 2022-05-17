import React from 'react'
import './footer.css'
import {FaInstagram, FaSpotify} from 'react-icons/fa'
import {BsLinkedin, BsGithub,} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className=''>RZet</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#service">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/raditya-danu-129a72205/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/raditdanu?tab=repositories" target="_blank"><BsGithub/></a>
        <a href="https://www.instagram.com/raditdanu/"><FaInstagram/></a>
        <a href="https://open.spotify.com/show/47iJTTVIFo6zoFKbAkPSZf"><FaSpotify/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; RZet. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer