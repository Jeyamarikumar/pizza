import React from 'react'
import './about.css'
import pic from './assets/abt.jpg'
import pi from './assets/USA pizza.jpg'

function About() {

  return (
    <>
      <img src={pic} alt="" id='abt'/>
      <button className='btn' onClick={() => document.querySelector('.about').scrollIntoView({ behavior: 'smooth' })}>Scroll Down</button>
      <br></br>
      <div className="infinite-scroll">🍕 Pizza Hut Special 🍕 Delicious Cheese Pizza 🍕 Fresh Ingredients 🍕 Fast Delivery 🍕 Family Favorite 🍕 Pizza Hut Special 🍕 Delicious Cheese Pizza 🍕 Fresh Ingredients 🍕 Fast Delivery 🍕 Family Favorite</div>
      <div className='aboutIg'>
      <img src={pi} alt="" id='abtus'/>
      </div>
      <div className='about'>
      <h4 id='b'>About Us</h4>
      <p>At Pizza Hut, we don’t just make pizza. We make people happy. Pizza Hut was built on the belief that pizza night should be special, and we carry that belief into everything we do. With more than 55 years of experience under our belts, we understand how to best serve our customers through tried and true service principles: We create food we’re proud to serve and deliver it fast, with a smile.
        From day one, the Carney brothers could look their customers in the eye and promise them the finest pizza in town — because they knew the farmers who grew the ingredients, and they knew those farmers cared about quality. Since then, our farmers have grown right alongside us, and the ingredients we use are still our highest priority. No one loves pizza more than Pizza Hut. That’s why pizza is in our name — and always will be.
      </p>
      </div>
    </>
  )
}

export default About
