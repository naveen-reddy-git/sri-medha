import Header from '../components/Header';
import Footer from '../components/Footer';
import canadaBanner from "../assets/images/study-in-canada.jpeg";
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
  Globe,
  Briefcase,
  BookOpen,
  Building2,
  Calendar,
  Award,
  DollarSign,
  FileText,
  MapPin,
  Users
} from 'lucide-react';

export default function StudyInCanada() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Banner */}
      <div className="w-full h-96 md:h-[500px] overflow-hidden">
        <img
          src={canadaBanner}
          alt="Study in Canada"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Intro */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6">
            Best Canada Education Consultants in Hyderabad
          </h1>
          <p className="text-gray-700 leading-relaxed">
            Canada is one of the most preferred study destinations for
            international students due to its world-class education system,
            affordable tuition fees, multicultural environment, and excellent
            post-study work and PR opportunities. Canadian universities and
            colleges are globally recognized for academic excellence, research,
            and industry-focused programs. With Triospace Overseas, students
            receive complete end-to-end guidance — from course selection and
            admissions to visas, accommodation, and pre-departure support.
          </p>
        </div>
      </section>

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

      {/* Why Study in Canada */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Study in Canada?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow">
              <GraduationCap className="w-8 h-8 text-red-600" />
              <h3 className="font-bold mt-3 mb-2">World-Class Education</h3>
              <p className="text-gray-600">
                Canadian institutions are globally ranked and known for academic
                excellence and innovation.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow">
              <Briefcase className="w-8 h-8 text-red-600" />
              <h3 className="font-bold mt-3 mb-2">Post Study Work Permit</h3>
              <p className="text-gray-600">
                Get up to 3 years of Post Graduation Work Permit (PGWP).
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow">
              <Globe className="w-8 h-8 text-red-600" />
              <h3 className="font-bold mt-3 mb-2">PR Opportunities</h3>
              <p className="text-gray-600">
                Canada offers clear pathways to Permanent Residency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Courses */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Top Courses to Study in Canada
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              'Computer Science & IT',
              'Data Science & AI',
              'Business & Management',
              'Engineering',
              'Healthcare & Nursing',
              'Finance & Accounting',
              'Supply Chain Management',
              'Cyber Security'
            ].map((course, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 rounded-lg shadow-sm text-center font-medium"
              >
                <BookOpen className="mx-auto mb-2" />
                {course}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Top Universities in Canada
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              'University of Toronto',
              'University of British Columbia',
              'McGill University',
              'University of Alberta',
              'University of Waterloo',
              'York University'
            ].map((uni, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow"
              >
                <Building2 className="mb-2 text-red-600" />
                <h3 className="font-semibold">{uni}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intakes */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Canada Intakes
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Calendar />
              <h3 className="font-bold mt-2">September Intake</h3>
              <p>Main intake with maximum course availability.</p>
            </div>

            <div>
              <Calendar />
              <h3 className="font-bold mt-2">January Intake</h3>
              <p>Second major intake with good options.</p>
            </div>

            <div>
              <Calendar />
              <h3 className="font-bold mt-2">May Intake</h3>
              <p>Limited courses, ideal for select programs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Types */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Canada Student Visa Types
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl shadow">
              <FileText className="mb-2 text-red-600" />
              <h3 className="font-bold mb-2">Study Permit</h3>
              <p>
                Issued for the duration of the course with work rights.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl shadow">
              <Briefcase className="mb-2 text-red-600" />
              <h3 className="font-bold mb-2">Post Graduation Work Permit</h3>
              <p>
                Allows graduates to work in Canada for up to 3 years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Eligibility Criteria
          </h2>

          <ul className="space-y-4 text-gray-700">
            <li>✔ Academic transcripts</li>
            <li>✔ IELTS / PTE / TOEFL scores</li>
            <li>✔ Statement of Purpose (SOP)</li>
            <li>✔ Proof of Funds</li>
            <li>✔ Letter of Acceptance</li>
          </ul>
        </div>
      </section>

      {/* Cities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Top Student Cities in Canada
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa', 'Waterloo'].map(
              (city, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 rounded-lg shadow text-center"
                >
                  <MapPin className="mx-auto mb-2 text-red-600" />
                  {city}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Cost of Living */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <DollarSign className="mx-auto mb-4 text-red-600 w-10 h-10" />
          <h2 className="text-3xl font-bold mb-4">
            Cost of Living in Canada
          </h2>
          <p className="text-gray-700">
            Average monthly living cost ranges between CAD 800 – CAD 1,500,
            depending on the city and lifestyle.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
