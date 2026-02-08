import { Menu, X, Phone, Mail } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navigateAndScroll = (sectionId: string) => {
    setIsMenuOpen(false);
    if (window.location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img
              src="/whatsapp.jpeg"
              alt="Sri Medha Global Connect"
              className="h-12 w-12 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-teal-600">Sri Medha Global Connect</h1>
              <p className="text-xs text-gray-600">Your Gateway to Global Education</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => navigateAndScroll('home')} className="text-gray-700 hover:text-teal-600 transition">Home</button>
            <button onClick={() => navigateAndScroll('about')} className="text-gray-700 hover:text-teal-600 transition">About</button>
            <button onClick={() => navigateAndScroll('countries')} className="text-gray-700 hover:text-teal-600 transition">Countries</button>
            <button onClick={() => {navigate("/refinance-page"); setIsMenuOpen(false);}} className="text-gray-700 hover:text-teal-600 transition">Education Refinance</button>   
            <button onClick={() => navigateAndScroll('partners')} className="text-gray-700 hover:text-teal-600 transition">Partners</button>
            <button onClick={() => navigateAndScroll('contact')} className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition">Contact</button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              <button onClick={() => navigateAndScroll('home')} className="text-gray-700 hover:text-teal-600 transition py-2">Home</button>
              <button onClick={() => navigateAndScroll('about')} className="text-gray-700 hover:text-teal-600 transition py-2">About</button>
              <button onClick={() => navigateAndScroll('countries')} className="text-gray-700 hover:text-teal-600 transition py-2">Countries</button>
              <button onClick={() => {navigate("/refinance-page"); setIsMenuOpen(false);}} className="text-gray-700 hover:text-teal-600 transition py-2">Education Refinance</button>   
              <button onClick={() => navigateAndScroll('partners')} className="text-gray-700 hover:text-teal-600 transition py-2">Partners</button>
              <button onClick={() => navigateAndScroll('contact')} className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition">Contact</button>
            </div>
          </div>
        )}
      </div>

      <div className="bg-teal-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center items-center gap-4 text-sm">
          <a href="tel:+918466946661" className="flex items-center gap-2 hover:text-teal-100 transition">
            <Phone size={16} />
            <span>+91 8466946661</span>
          </a>
          <a href="mailto:hello@srimedhagc.com" className="flex items-center gap-2 hover:text-teal-100 transition">
            <Mail size={16} />
            <span>hello@srimedhagc.com</span>
          </a>
        </div>
      </div>
    </header>
  );
}
