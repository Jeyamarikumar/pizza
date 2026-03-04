import React from 'react'
import './contact.css'
import pic from './assets/cont.jpg'

function Contact() {
  return (
    <div className='contact-container'>
      <div className='contact-content'>
        <div className='contact-image-wrapper'>
          <img src={pic} alt="Contact Us" className='contact-image' />
        </div>
        <div className='contact-form-wrapper'>
          <h3 className='contact-title'>Review Us</h3>
          <form className='contact-form'>
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required placeholder='Enter Your Name' />
            </div>
            <div className="input-group">
              <label htmlFor="favorite">Favorite Pizza</label>
              <input type="text" id="favorite" name="favorite" required placeholder='Enter Your Favorite Pizza' />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required placeholder='Enter Your Email' />
            </div>
            <div className="input-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" required placeholder='Enter Your Message'></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit Review</button>
          </form>
        </div>
      </div>


    </div>
  )
}

export default Contact
