import Header from '../components/Header';
import Footer from '../components/Footer';
import usabanner from "../assets/images/study-in-usa-banner.jpg";
import studyAbroadBg from "../assets/images/study-in-abroad.webp";
import {
  COUNTRIES,
  COURSES,
  EDUCATION_LEVELS,
  STUDY_TIMELINES,
  EDUCATION_FUNDS
} from '../constants/formOptions';

export default function StudyInUSA() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Full Width Banner Image */}
      <div className="w-full h-96 md:h-[500px] overflow-hidden">
        <img
          src={usabanner}
          alt="Study in USA Banner"
          className="w-full h-full object-cover"
        />
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Best USA Education Consultants in Hyderabad
            </h2>
          </div>

          {/* YouTube Video */}
          <div className="flex justify-center mb-12">
            <div className="w-full max-w-4xl aspect-video">
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Study in USA - Sri Medha Global Connect"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
            <p className="text-gray-700 leading-relaxed mb-6">
                The United States is one of the most preferred destinations for students aspiring for world-class education and exceptional growth opportunities, both academically and personally. With top-ranked universities, diverse courses, and unmatched facilities for research and innovation, the USA stands out as a global education hub. However, studying in the USA can be challenging, from navigating visa regulations to finding the right scholarships. That’s where Triospace Overseas, your trusted USA education consultants in Hyderabad, makes the entire process simple and stress-free.
                At Triospace Overseas, we help students turn their dreams into reality with expert guidance from one of the leading USA study consultants in Hyderabad. Our personalized approach ensures every student receives the support they need, from selecting top universities to securing financial aid and preparing for visa interviews. As the best consultancy for the USA in Hyderabad, we ensure your path to studying abroad is clear, smooth, and successful. Begin your journey with a team as committed to your future as you are.           
            </p>
        </div>
      </section>

      {/* Counselling Form Section */}
      <section className="relative py-10">
        <div className="absolute inset-0 min-h-full overflow-hidden hidden md:block">
          <img
            src={studyAbroadBg}
            alt="Study Abroad Background"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[400px]">
            {/* Image Side */}
            <div className="lg:col-span-1 hidden lg:block">
              {/* The background image shows the person on the left side */}
            </div>

            {/* Form Side */}
            <div className="lg:col-span-1 bg-white lg:bg-white/95 backdrop-blur-sm rounded-2xl px-6 lg:px-12 py-8 lg:py-10 shadow-2xl ml-20">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Get Personalized Counselling Today!
                </h2>
                <p className="text-gray-600">
                  Leave your details with us, and our team member will connect with you shortly.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="form_full_name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="form_full_name"
                      name="full_name"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition text-sm"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="form_email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="form_email"
                      name="email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition text-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="form_phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="form_phone"
                      name="phone"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition text-sm"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label htmlFor="form_country" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Country *
                    </label>
                    <select
                      id="form_country"
                      name="country"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition text-sm"
                    >
                      <option value="">Select Country</option>
                      {COUNTRIES.map((country) => (
                        <option key={country.key} value={country.key}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="form_course" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Course *
                    </label>
                    <select
                      id="form_course"
                      name="course"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition text-sm"
                    >
                      <option value="">Select Course</option>
                      {COURSES.map((course) => (
                        <option key={course.key} value={course.key}>
                          {course.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="form_education_level" className="block text-sm font-medium text-gray-700 mb-1">
                      Current Education Level *
                    </label>
                    <select
                      id="form_education_level"
                      name="education_level"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition text-sm"
                    >
                      <option value="">Select Level</option>
                      {EDUCATION_LEVELS.map((level) => (
                        <option key={level.key} value={level.key}>
                          {level.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="form_study_timeline" className="block text-sm font-medium text-gray-700 mb-1">
                      When do you plan to study? *
                    </label>
                    <select
                      id="form_study_timeline"
                      name="study_timeline"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition text-sm"
                    >
                      <option value="">Select Timeline</option>
                      {STUDY_TIMELINES.map((timeline) => (
                        <option key={timeline.key} value={timeline.key}>
                          {timeline.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="form_budget" className="block text-sm font-medium text-gray-700 mb-1">
                      Education Fund *
                    </label>
                    <select
                      id="form_budget"
                      name="budget"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition text-sm"
                    >
                      <option value="">Select Education Fund</option>
                      {EDUCATION_FUNDS.map((fund) => (
                        <option key={fund.key} value={fund.key}>
                          {fund.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition font-medium"
                >
                  Get Free Counselling
                </button>
              </form>
            </div>

            {/* Image Side */}
            <div className="lg:col-span-2 hidden lg:block">
              {/* The background image shows the person on the left side */}
            </div>
          </div>
        </div>
      </section>
        
      <Footer />
    </div>
  );
}