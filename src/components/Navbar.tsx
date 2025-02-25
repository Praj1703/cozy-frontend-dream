
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark-purple/80 backdrop-blur-md shadow-lg shadow-purple-500/10' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-xl font-semibold text-white">
            Brand
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm text-gray-300 hover:text-primary transition-colors">Features</a>
            <a href="#about" className="text-sm text-gray-300 hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-sm text-gray-300 hover:text-primary transition-colors">Contact</a>
            <button className="bg-primary text-white px-6 py-2 rounded-full text-sm hover:bg-secondary transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
