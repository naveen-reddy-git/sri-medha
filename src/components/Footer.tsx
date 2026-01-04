import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/whatsapp.jpeg"
                alt="Sri Medha Global Connect"
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="text-lg font-bold">Sri Medha Global Connect</h3>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner for overseas education since 1998. Guiding students towards global academic excellence.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-teal-400 transition">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-teal-400 transition">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('countries')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-teal-400 transition">
                  Countries
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-teal-400 transition">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Destinations</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Study in USA</li>
              <li>Study in UK</li>
              <li>Study in Canada</li>
              <li>Study in Australia</li>
              <li>Study in Ireland</li>
              <li>Study in France</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Phone className="flex-shrink-0 mt-1" size={16} />
                <a href="tel:+919876543210" className="hover:text-teal-400 transition">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Mail className="flex-shrink-0 mt-1" size={16} />
                <a href="mailto:info@srimedha.com" className="hover:text-teal-400 transition">
                  info@srimedha.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="flex-shrink-0 mt-1" size={16} />
                <span>Bangalore, Karnataka, India</span>
              </li>
            </ul>

            <div className="flex gap-4 mt-6">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-teal-600 transition">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-teal-600 transition">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-teal-600 transition">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-teal-600 transition">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Sri Medha Global Connect. All rights reserved.</p>
            <p className="mt-2">Trusted since 1998 | Led by Sri S. Mahesh & M. Lokesh (IIT Madras)</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
