import { ArrowRight, GraduationCap } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-teal-50 via-white to-blue-50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium">
              <GraduationCap size={18} />
              <span>Trusted Since 1998</span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              Your Dream of
              <span className="text-teal-600"> Studying Abroad</span> Starts Here
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Expert guidance for studying in top universities across USA, UK, Canada, Australia, and more.
              Over 25 years of excellence in education counselling.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="group bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                Book Free Counselling
                <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
              </button>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg hover:bg-teal-50 transition"
              >
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t">
              <div>
                <div className="text-3xl font-bold text-teal-600">25+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600">10K+</div>
                <div className="text-sm text-gray-600">Students Placed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600">50+</div>
                <div className="text-sm text-gray-600">Universities</div>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/whatsapp_image_2025-12-29_at_8.48.28_am.jpeg"
                alt="Study Abroad"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
