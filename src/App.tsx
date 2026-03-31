import Navbar from "./components/Navbar";
import { Hero, ValueProp, Services, About, Portfolio, Pricing, Testimonials, Contact, Footer } from "./components/Sections";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ValueProp />
        <Services />
        <About />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      
      {/* Sticky CTA for mobile */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <a 
          href="#contact" 
          className="bg-pastel-pink text-white p-4 rounded-full shadow-2xl flex items-center justify-center animate-bounce"
        >
          <span className="sr-only">Book Now</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
