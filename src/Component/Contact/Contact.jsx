import React, { useState } from 'react'
import './Contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
const[done,setDone]=useState(false);
  const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_l386e64', 'template_gztok5k', form.current, 'iSbwBJDbXPxnI_eBg')
          .then((result) => {
              console.log(result.text);
              setDone(true);
          }, (error) => {
              console.log(error.text);
          });
      };





  return (
    <div className='contact-form' id='Contact'>
        <div className="c-left">
        <div className="awesome">
            <span>Get in touch</span>
            <span>Contact me</span>
            <div className="blur c-blur1"></div>
            </div>
        </div>
      <div className="c-right">
          <form action="" ref={form} onSubmit={sendEmail}>
              <input type="text" name='from_name' className='user' placeholder='Name' />
              <input type="email" name='to_name' className='user' placeholder='Email' />
              <textarea name="message" id=""  className='user' placeholder='Message'></textarea>
              <input type="submit" value="Send" className='button'  />
              <span>{done && "Thanks for contacting us"}</span>
              <div className="blur c-blur2">

              </div>
          </form>
      </div>
    </div>
  )
}

export default Contact
