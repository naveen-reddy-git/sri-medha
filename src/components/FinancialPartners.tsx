import { Landmark, TrendingUp, Shield, CheckCircle } from 'lucide-react';

const partners = [
  { name: "Tata Capital", logo: "/tata_capital.png" },
  { name: "Poonawalla Fincorp", logo: "/poonawala.jpg" },
  { name: "ICICI Bank", logo: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=200" },
  { name: "Axis Bank", logo: "https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=200" },
  { name: "IDFC First Bank", logo: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=200" },
  { name: "InCred", logo: "https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=200" },
  { name: "Avanse", logo: "https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=200" },
  { name: "Credila", logo: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=200" },
  { name: "Auxilo", logo: "https://images.pexels.com/photos/7681464/pexels-photo-7681464.jpeg?auto=compress&cs=tinysrgb&w=200" },
  { name: "MPower Financing", logo: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=200" },
  { name: "Prodigy Finance", logo: "/prodigy_bank.png" }
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Competitive Interest Rates",
    description: "Get the best rates from our partner institutions"
  },
  {
    icon: Shield,
    title: "Flexible Repayment",
    description: "Customize your repayment schedule as per your needs"
  },
  {
    icon: CheckCircle,
    title: "Quick Approval",
    description: "Fast-track loan processing and approval"
  },
  {
    icon: Landmark,
    title: "100% Finance",
    description: "Cover tuition, living expenses, and more"
  }
];

export default function FinancialPartners() {
  return (
    <section id="partners" className="py-20 bg-gradient-to-br from-teal-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Study Abroad Without <span className="text-teal-600">Financial Worries</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Partner with India's leading financial institutions for education loans with attractive terms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="text-teal-600" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Our Trusted Financial Partners
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 rounded-lg hover:bg-gray-50 transition group"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition opacity-70 group-hover:opacity-100"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      const fallback = document.createElement('div');
                      fallback.className = 'flex items-center justify-center w-full h-16 bg-teal-100 rounded-lg';
                      fallback.innerHTML = `<span class="text-teal-600 font-semibold text-sm text-center px-2">${partner.name}</span>`;
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Need help finding the right education loan? Our experts will guide you through the process.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition font-medium"
            >
              Get Financial Guidance
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
