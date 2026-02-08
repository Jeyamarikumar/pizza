import React from 'react'
import './contact.css'  
import pic from './assets/cont.jpg'


function Contact() {
  return (
    <div className='contactbg'>
      <img src={pic} alt="" id='contac'/>
     <div className='form'>
      <h3 id='title'>Review Us</h3>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required placeholder='Enter Your Name'/><br/><br/>
        <label htmlFor="favorite">Favorite Pizza:</label>
        <input type="text" id="favorite" name="favorite" required placeholder='Enter Your Favorite Pizza'/><br/><br/>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" required placeholder='Enter Your Email'/><br/><br/>
        <label htmlFor="message">Message:</label>
        <textarea type="text" id="message" name="message" required placeholder='Enter Your Message'/><br/><br/>
        <button type="submit">Submit</button>
        </form>
     </div>
     <footer className="foot">
      <p className='para'>Pizza Hub Contact us on :</p>
        <p>© 2024 Pizza Hub. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📷 Instagram</a>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">📺 YouTube</a>
        </div>
      </footer>
    </div>
  )
}

export default Contact
