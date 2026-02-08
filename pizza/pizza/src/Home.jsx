import React from 'react'
import './home.css'
import pic from './assets/hom.jpg'


function Home() {

  const OrderButton = () => {
    // Navigate to the Menu component when the button is clicked
    window.location.href = '/menu';
  }

  return (
    <>
    <header>
      <h2>Welcome to Pizza Hub!</h2>
      <p>Your one-stop destination for delicious pizzas.</p>
      <button onClick={OrderButton}>Order Now</button>
    </header>
   
    <div>
      <img src={pic} alt="" id='hi'/>
    </div>
    <footer>
            <p>&copy; 2024 Pizza Hub. All rights reserved.</p>
          </footer>
    </>
  )
}

export default Home
