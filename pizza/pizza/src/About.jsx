import React from 'react'
import './about.css'
import heroPic from './assets/abt.jpg'
import pizzaPic from './assets/USA pizza.jpg'

function About() {
  const scrollToContent = () => {
    document.getElementById('about-story').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <img src={heroPic} alt="Pizza Hub Background" className="hero-bg" />
        <div className="hero-content">
          <h1 className="hero-title">Our Story</h1>
          <p className="hero-subtitle">Crafting the perfect slice since 2010</p>
          <button className="scroll-btn" onClick={scrollToContent}>
            Discover Our Passion
            <span className="arrow-down">↓</span>
          </button>
        </div>
      </section>

      {/* Infinite Scrolling Banner */}
      <div className="banner-container">
        <div className="banner-scroll">
          <span>🍕 Wood-Fired Perfection</span>
          <span>🍅 Farm-Fresh Ingredients</span>
          <span>🧀 100% Mozzarella</span>
          <span>👨‍🍳 Master Chefs</span>
          <span>🍕 Fast Delivery</span>
          {/* Duplicated for smooth infinite scrolling */}
          <span>🍕 Wood-Fired Perfection</span>
          <span>🍅 Farm-Fresh Ingredients</span>
          <span>🧀 100% Mozzarella</span>
          <span>👨‍🍳 Master Chefs</span>
          <span>🍕 Fast Delivery</span>
        </div>
      </div>

      {/* Main Content Section */}
      <section id="about-story" className="about-section">
        <div className="about-container">

          <div className="about-image-wrapper">
            <div className="image-decoration"></div>
            <img src={pizzaPic} alt="Delicious USA Pizza" className="about-image" />
          </div>

          <div className="about-text-content">
            <h2 className="section-heading">More Than Just Pizza</h2>
            <div className="text-body">
              <p>
                At Pizza Hub, we don’t just make pizza. We make memories. Born from a tiny kitchen with a massive dream, we were built on the belief that pizza night should be an unforgettable experience.
              </p>
              <p>
                With over a decade of dedication to the craft, we understand how to best serve our community: by creating food we’re deeply proud of. Our dough is rested for 48 hours, our tomatoes are hand-crushed, and our ovens run at a roaring 800 degrees to give you that perfect artisanal blistered crust.
              </p>
              <p>
                From day one, we promised our customers the finest slice in town. We know the local farmers who grow our ingredients, and they share our relentless passion for quality. No one loves pizza more than we do. That’s why pizza isn't just in our name — it's in our DNA.
              </p>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <h3>10+</h3>
                <p>Years of Baking</p>
              </div>
              <div className="stat-card">
                <h3>5M+</h3>
                <p>Pizzas Served</p>
              </div>
              <div className="stat-card">
                <h3>100%</h3>
                <p>Fresh Ingredients</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default About
