import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {FaInstagram} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5zy694t', 'template_zo64p0z', form.current, '4-ebKbBsFLriM22DJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdEmail/>
            <h4>Email</h4>
            <h5>radityadanue@gmail.com</h5>
            <a href="mailto:radityadanue@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <FaInstagram/>
            <h4>Instagram</h4>
            <h5>@raditdanu</h5>
            <a href="https://www.instagram.com/raditdanu/" target="_blank">My Instagram</a>
          </article>
          <article className='contact__option'>
            <BsLinkedin/>
            <h4>LinkedIn</h4>
            <h5>Raditya Danu</h5>
            <a href="https://www.linkedin.com/in/raditya-danu-129a72205/" target="_blank">My LinkedIn</a>
          </article>
        </div>
        {/*  */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" id="" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact