import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Residents from './components/Residents';
import Media from './components/media';
import Loading from './components/Loading';
import SpecialProjects from './components/SpecialProjects';
import Production from './components/Production';
import Advertisement from './components/Advertisement';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/globals.css';
import './assets/fonts/fonts.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [cursorExpanded, setCursorExpanded] = useState(false);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 2000);

    // Custom cursor
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
    };

    const expandCursor = () => {
      cursor.classList.add('custom-cursor-expanded');
      setCursorExpanded(true);
    };

    const shrinkCursor = () => {
      cursor.classList.remove('custom-cursor-expanded');
      setCursorExpanded(false);
    };

    window.addEventListener('mousemove', moveCursor);
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', expandCursor);
      el.addEventListener('mouseleave', shrinkCursor);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.querySelectorAll('a, button').forEach(el => {
        el.removeEventListener('mouseenter', expandCursor);
        el.removeEventListener('mouseleave', shrinkCursor);
      });
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <Loading />
      ) : (
        <div className="min-h-screen bg-dark">
          <Navbar />
          <Hero />
          <About />
          <Media />
          <Residents />
          <SpecialProjects />
          <Production />
          <Advertisement />
          <Contact />
          <Footer />
        </div>
      )}
    </AnimatePresence>
  );
}

export default App; 