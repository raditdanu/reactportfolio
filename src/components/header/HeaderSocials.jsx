import React from 'react'
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/raditya-danu-129a72205/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/raditdanu?tab=repositories" target="_blank"><BsGithub/></a>
        <a href="https://www.instagram.com/raditdanu/" target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials