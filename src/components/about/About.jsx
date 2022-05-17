import React from 'react'
import './about.css'
import ME from '../../assets/Radit1.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">


          <p>
          I'm Raditya Danu Erlangga, born in Jakarta, 10 August 1993. I'm a Front End Developer. I have been in this field since 2019 and I'm still going to learn and develop my skills to give better experience for companies I'm working with. I hope I will be given an opportunity to work with you.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About