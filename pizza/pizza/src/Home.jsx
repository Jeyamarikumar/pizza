import React from 'react'
import { useNavigate } from 'react-router-dom';
import './home.css'
import heroImg from './assets/hom.jpg'
import pizza1 from './assets/USA pizza.jpg'

function Home() {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate('/menu');
  }

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="hero-content">
          <span className="badge">Authentic Italian Taste</span>
          <h1 className="hero-title">Experience the Magic of <span className="highlight">Wood-Fired</span> Pizza.</h1>
          <p className="hero-desc">Crispy crusts, farm-fresh ingredients, and 100% mozzarella cheese. Delivered hot and fresh to your doorstep.</p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={handleOrderClick}>Order Now</button>
            <button className="btn-secondary" onClick={() => navigate('/about')}>Our Story</button>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img src={heroImg} alt="Delicious Pizza Hub Special" className="floating-pizza" />
          <div className="price-tag">
            <span className="price">$14.99</span>
            <span className="label">Signature</span>
          </div>
        </div>
      </section>

      {/* Features Outline */}
      <section className="features-section">
        <div className="feature-card">
          <div className="feature-icon">🛵</div>
          <h3>Fast Delivery</h3>
          <p>Hot pizza in 30 minutes, or it's on us.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🍅</div>
          <h3>Fresh Ingredients</h3>
          <p>Locally sourced veggies and premium meats.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🔥</div>
          <h3>Wood-Fired Ovens</h3>
          <p>Baked at 800° for that perfect blistered crust.</p>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="cta-banner">
        <div className="cta-content">
          <h2>Hungry yet? Check out our menu!</h2>
          <p>We've got something for everyone. From classic Margheritas to fully loaded meat lovers.</p>
          <button className="btn-primary" onClick={handleOrderClick}>View Full Menu</button>
        </div>
        <div className="cta-image">
          <img src={pizza1} alt="Fresh Pizza" />
        </div>
      </section>
    </div>
  )
}

export default Home
