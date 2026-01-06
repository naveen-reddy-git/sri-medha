import { GraduationCap, MapPin, Building2, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const countries = [
  {
    name: "United States",
    flag: "🇺🇸",
    universities: "4,000+",
    students: "1M+ International",
    cost: "$25k-$55k/year",
    image: "https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: ["World-class universities", "Research opportunities", "OPT work permits"],
    route: "/study-in-usa"
  },
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    universities: "150+",
    students: "600K+ International",
    cost: "£10k-£38k/year",
    image: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: ["1-year master's programs", "Rich cultural heritage", "Post-study work visa"],
    route: "/study-in-uk"
  },
  {
    name: "Canada",
    flag: "🇨🇦",
    universities: "100+",
    students: "800K+ International",
    cost: "CAD 15k-35k/year",
    image: "https://images.pexels.com/photos/2994920/pexels-photo-2994920.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: ["PR pathways", "Safe & welcoming", "Quality education"],
    route: "/study-in-canada"
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    universities: "43+",
    students: "700K+ International",
    cost: "AUD 20k-45k/year",
    image: "https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: ["Work while studying", "Beautiful lifestyle", "Global recognition"],
    route: "/study-in-australia"
  },
  {
    name: "Ireland",
    flag: "🇮🇪",
    universities: "35+",
    students: "35K+ International",
    cost: "€9k-25k/year",
    image: "https://images.pexels.com/photos/2416653/pexels-photo-2416653.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: ["Tech hub of Europe", "English-speaking", "Stay-back options"],
    route: "/study-in-ireland"
  },
  {
    name: "France",
    flag: "🇫🇷",
    universities: "250+",
    students: "370K+ International",
    cost: "€3k-15k/year",
    image: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: ["Affordable education", "Art & culture", "EU opportunities"],
    route: "/study-in-france"
  }
];

export default function Countries() {
  return (
    <section id="countries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Countries You Can <span className="text-teal-600">Study In</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore world-class education destinations and find the perfect fit for your academic journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={country.image}
                  alt={country.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="text-4xl mb-2">{country.flag}</div>
                  <h3 className="text-2xl font-bold text-white">{country.name}</h3>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-start gap-2">
                    <Building2 className="text-teal-600 flex-shrink-0 mt-1" size={18} />
                    <div>
                      <div className="text-sm text-gray-600">Universities</div>
                      <div className="font-semibold text-gray-900">{country.universities}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <DollarSign className="text-teal-600 flex-shrink-0 mt-1" size={18} />
                    <div>
                      <div className="text-sm text-gray-600">Avg. Cost</div>
                      <div className="font-semibold text-gray-900 text-sm">{country.cost}</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2 mb-4">
                  <GraduationCap className="text-teal-600 flex-shrink-0 mt-1" size={18} />
                  <div>
                    <div className="text-sm text-gray-600">Students</div>
                    <div className="font-semibold text-gray-900">{country.students}</div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="text-sm font-semibold text-gray-900 mb-2">Key Highlights:</div>
                  <ul className="space-y-1">
                    {country.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-teal-600 rounded-full"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to={country.route} className="mt-6 w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition font-medium text-center block">
                  Explore Programs
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
