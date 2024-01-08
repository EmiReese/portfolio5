import React from 'react'
import './contact.css'
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from "emailjs-com";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_akuyrde', 'template_mae957g', form.current, 'Axix1-oQZyLqZxWVq')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className='contact__options'>
          <article className='contact__option'>
            <IoIosMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>emilyreese.ga@gmail.com</h5>
            <a href="mailto:emilyreese.ga@gmail.com">Send a message</a>
          </article>

          <article className='contact__option'>
            <FaPhoneAlt className='contact__option-icon'/>
            <h4>Phone</h4>
            <h5>6789789459</h5>
          </article>
        </div>
        {/* END OF OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact