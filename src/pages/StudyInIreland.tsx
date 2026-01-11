import Header from '../components/Header';
import Footer from '../components/Footer';
import irelandBanner from "../assets/images/study-in-ireland.jpg";
import studyabroad from "../assets/images/study-in-abroad.webp";
import {
  COUNTRIES,
  COURSES,
  EDUCATION_LEVELS,
  STUDY_TIMELINES,
  EDUCATION_FUNDS
} from '../constants/formOptions';
import {
  GraduationCap,
  Briefcase,
  BookOpen,
  Globe,
  FlaskConical,
  Users,
  DollarSign,
  Building2,
  Calendar,
  Award,
  FileText,
  MapPin,
  Languages
} from 'lucide-react';

export default function StudyInIreland() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Banner */}
      <div className="w-full h-96 md:h-[500px] overflow-hidden">
        <img src={irelandBanner} className="w-full h-full object-cover" />
      </div>

      {/* Intro */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6">
            Best Ireland Education Consultants in Hyderabad
          </h1>
          <p className="text-gray-700 leading-relaxed">
            Ireland has emerged as one of Europe’s most attractive destinations
            for international students, particularly for IT, Data Science,
            Business, and Pharmaceutical studies. With globally ranked
            universities, strong industry connections, and generous post-study
            work options, Ireland offers exceptional academic and career
            opportunities. Triospace Overseas guides students at every step —
            from university selection to visa success.
          </p>
        </div>
      </section>

      {/* Counselling Form */}
      {/* Counselling Form Section */}
      <section className="relative py-10">
        <div className="absolute inset-0 min-h-full overflow-hidden hidden md:block">
          <img
            src={studyabroad}
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

      {/* Why Study */}
      <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Study in the Ireland?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover the incredible benefits of pursuing your education in the Ireland
            </p>
          </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          
          <div className="p-6 bg-green-50 rounded-xl">
            <GraduationCap className="w-8 h-8 text-green-600" />
            <h3 className="font-bold mt-3">Globally Ranked Universities</h3>
            <p>Institutions like Trinity College Dublin rank globally.</p>
          </div>
          <div className="p-6 bg-blue-50 rounded-xl">
            <Briefcase className="w-8 h-8 text-blue-600" />
            <h3 className="font-bold mt-3">Post Study Work Visa</h3>
            <p>Up to 24 months stay back after graduation.</p>
          </div>
          <div className="p-6 bg-teal-50 rounded-xl">
            <Globe className="w-8 h-8 text-teal-600" />
            <h3 className="font-bold mt-3">Tech & Pharma Hub</h3>
            <p>Home to Google, Apple, Meta, Pfizer.</p>
          </div>
        </div>
      </section>

      {/* Top Courses */}
      <section className="py-16 bg-gray-50">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Top Courses to Study in Ireland</h2>
          </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
          {[
            'Data Science',
            'Computer Science',
            'Business Analytics',
            'Pharmaceutical Sciences',
            'Finance',
            'Cyber Security',
            'Artificial Intelligence'
          ].map((c, i) => (
            <div key={i} className="bg-white p-4 rounded shadow">
              {c}
            </div>
          ))}
        </div>
      </section>

      {/* Universities */}
      <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Top Universities in Ireland</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Study at prestigious institutions recognized worldwide for academic excellence
            </p>
          </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            'Trinity College Dublin',
            'University College Dublin',
            'University of Galway',
            'Dublin City University'
          ].map((u, i) => (
            <div key={i} className="p-6 bg-blue-50 rounded-xl">
              <Building2 className="mb-2" /> {u}
            </div>
          ))}
        </div>
      </section>

      {/* Intakes */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Intake Periods in Ireland</h2>
            <p className="text-blue-100 max-w-3xl mx-auto">
                Understanding the academic calendar is essential for planning your studies. The Ireland  generally has two main intakes:
            </p>
          </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          <div>
            <Calendar /> <h3>September Intake</h3>
            <p>Main intake with maximum course availability.</p>
          </div>
          <div>
            <Calendar /> <h3>January Intake</h3>
            <p>Limited courses, flexible option.</p>
          </div>
        </div>
      </section>

      {/* Cost */}
      <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cost of Living in Ireland</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Average monthly expenses for international students
            </p>
          </div>
        <div className="max-w-4xl mx-auto bg-white shadow p-8">
          <p>Average Monthly Cost: €900 – €1,500</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
