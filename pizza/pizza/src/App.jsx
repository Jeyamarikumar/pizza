import './App.css'
import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
