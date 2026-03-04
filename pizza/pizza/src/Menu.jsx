import React, { useState } from 'react';
import './Menu.css';
import pizza1 from './assets/USA pizza.jpg';
// I'll reuse the existing pizza image for the demo cards, 
// since we only have a few assets verified in the project.

const menuItems = [
  { id: 1, category: 'pizzas', name: 'Classic Margherita', price: '$12.99', desc: 'Fresh tomatoes, mozzarella, sweet basil', img: pizza1, tags: ['Vegetarian'] },
  { id: 2, category: 'pizzas', name: 'Pepperoni Supreme', price: '$15.99', desc: 'Double pepperoni, extra cheese, classic crust', img: pizza1, tags: ['Popular'] },
  { id: 3, category: 'pizzas', name: 'BBQ Chicken', price: '$16.99', desc: 'Grilled chicken, red onions, tangy BBQ sauce', img: pizza1, tags: [] },
  { id: 4, category: 'pizzas', name: 'Truffle Mushroom', price: '$18.99', desc: 'Wild mushrooms, truffle oil, white garlic sauce', img: pizza1, tags: ['Premium'] },
  { id: 5, category: 'sides', name: 'Garlic Knots', price: '$5.99', desc: 'Six knots tossed in garlic butter with marinara', img: pizza1, tags: ['Vegetarian'] },
  { id: 6, category: 'sides', name: 'Cheesy Bread', price: '$6.99', desc: 'Oven-baked bread smothered in 3 cheeses', img: pizza1, tags: [] },
  { id: 7, category: 'drinks', name: 'Italian Soda', price: '$3.99', desc: 'Blood orange, raspberry, or lemon', img: pizza1, tags: [] },
  { id: 8, category: 'drinks', name: 'Craft Root Beer', price: '$4.99', desc: 'Locally brewed artisan root beer', img: pizza1, tags: [] },
];

function Menu() {
  const [filter, setFilter] = useState('all');

  const filteredItems = filter === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === filter);

  return (
    <div className="menu-page">
      <div className="menu-header">
        <h1>Our Menu</h1>
        <p>Expertly crafted and baked to perfection</p>
      </div>

      <div className="menu-filters">
        <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All</button>
        <button className={filter === 'pizzas' ? 'active' : ''} onClick={() => setFilter('pizzas')}>Pizzas</button>
        <button className={filter === 'sides' ? 'active' : ''} onClick={() => setFilter('sides')}>Sides</button>
        <button className={filter === 'drinks' ? 'active' : ''} onClick={() => setFilter('drinks')}>Drinks</button>
      </div>

      <div className="menu-grid">
        {filteredItems.map(item => (
          <div key={item.id} className="menu-card">
            <div className="card-image">
              <img src={item.img} alt={item.name} />
              {item.tags.map(tag => (
                <span key={tag} className="card-tag">{tag}</span>
              ))}
            </div>
            <div className="card-info">
              <div className="card-top">
                <h3>{item.name}</h3>
                <span className="price">{item.price}</span>
              </div>
              <p className="desc">{item.desc}</p>
              <button className="add-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu;
