import { motion } from "motion/react";
import { Menu, X, Calendar } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass-nav py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-display font-bold tracking-tighter text-dark-gray">
          CHEVIE <span className="text-pastel-pink">VA</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-pastel-pink transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-dark-gray text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-pastel-pink transition-all flex items-center gap-2"
          >
            <Calendar size={16} />
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-dark-gray" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col space-y-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-pastel-pink text-white px-6 py-3 rounded-full text-center font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Book Now
          </a>
        </motion.div>
      )}
    </nav>
  );
}
