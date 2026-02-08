import './App.css'
import Home from './Home'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Menu from './Menu';
import About from './About';
import Contact from './Contact';




function App() {
  
  return (
    <>
     <BrowserRouter>
    
            <nav>
              <h1 id='logo'>Pizza Hub</h1>
              <ol>
               <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}><span>Home</span></NavLink>
               <NavLink to="/menu" className={({ isActive }) => (isActive ? 'active' : '')}><span>Menu</span></NavLink>
               <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}><span>About</span></NavLink>
               <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}><span>Contact</span></NavLink> 
               </ol>
            </nav>
      
            <Routes>
               <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
               <Route path="/about" element={<About />} />
               <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
     
    </>
  )
}

export default App
