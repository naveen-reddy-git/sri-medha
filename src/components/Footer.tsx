import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateAndScroll = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      document.getElementById(sectionId) ?.scrollIntoView({ behavior: "smooth" });
    }
  };

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
              <h3 className="text-lg font-bold">
                Sri Medha Global Connect
              </h3>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted partner for overseas education since 1998.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigateAndScroll("home")}
                  className="text-gray-400 hover:text-teal-400 transition"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateAndScroll("about")}
                  className="text-gray-400 hover:text-teal-400 transition"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateAndScroll("countries")}
                  className="text-gray-400 hover:text-teal-400 transition"
                >
                  Countries
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateAndScroll("contact")}
                  className="text-gray-400 hover:text-teal-400 transition"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">
              Popular Destinations
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/study-in-usa">Study in USA</Link></li>
              <li><Link to="/study-in-uk">Study in UK</Link></li>
              <li><Link to="/study-in-canada">Study in Canada</Link></li>
              <li><Link to="/study-in-australia">Study in Australia</Link></li>
              <li><Link to="/study-in-ireland">Study in Ireland</Link></li>
              <li><Link to="/study-in-france">Study in France</Link></li>
              <li><Link to="/refinance-page">Education Loan Refinance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex gap-2">
                <Phone size={16} />
                <a href="tel:+919876543210">+91 98765 43210</a>
              </li>
              <li className="flex gap-2">
                <Mail size={16} />
                <a href="mailto:info@srimedha.com">
                  info@srimedha.com
                </a>
              </li>
              <li className="flex gap-2">
                <MapPin size={16} />
                Hyderabad, India
              </li>
            </ul>

            <div className="flex gap-4 mt-6">
              <Facebook size={18} />
              <Twitter size={18} />
              <Instagram size={18} />
              <Linkedin size={18} />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Sri Medha Global Connect. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
