import Header from '../components/Header';
import Footer from '../components/Footer';
import franceBanner from "../assets/images/study-in-france.jpg";
import studyabroad from "../assets/images/study-in-abroad.webp";
import StudentForm from "../components/StudentForm";
import {
  COUNTRIES,
  COURSES,
  EDUCATION_LEVELS,
  STUDY_TIMELINES,
  EDUCATION_FUNDS
} from '../constants/formOptions';
import {
  GraduationCap,
  BookOpen,
  TrendingUp,
  FlaskConical,
  Users,
  DollarSign,
  Building2,
  Calendar,
  Award,
  FileText,
  MapPin,
  Languages,
  Globe,
} from 'lucide-react';

export default function StudyInFrance() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Banner */}
      <div className="w-full h-96 md:h-[500px] overflow-hidden">
        <img
          src={franceBanner}
          alt="Study in France"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Best France Education Consultants in Hyderabad
            </h1>
          </div>

          <div className="max-w-6xl mx-auto">
            <p className="text-gray-700 leading-relaxed mb-6">
              France is one of Europe’s most preferred study destinations, offering world-class education at affordable tuition fees. Renowned for excellence in engineering, business, fashion, hospitality, and research, France hosts several globally ranked universities and Grandes Écoles. With a strong emphasis on innovation, research, and industry collaboration, France provides international students with exceptional academic exposure and career prospects.
              At Srimedha global connect, we simplify your journey to studying in France with expert counselling, university shortlisting, application assistance, visa guidance, and scholarship support. As trusted France education consultants in Hyderabad, we ensure your overseas education journey is smooth, transparent, and successful.
            </p>
          </div>
        </div>
      </section>

      {/* Counselling Form */}
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
            <StudentForm />

            {/* Image Side */}
            <div className="lg:col-span-2 hidden lg:block">
              {/* The background image shows the person on the left side */}
            </div>
          </div>
        </div>
      </section>

      {/* Why Study in France */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Study in France?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover the key benefits of choosing France as your study
              destination
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl">
              <GraduationCap className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">
                World-Class Education
              </h3>
              <p>
                France is home to globally ranked universities and prestigious
                Grandes Écoles known for academic excellence.
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-xl">
              <DollarSign className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">
                Affordable Tuition Fees
              </h3>
              <p>
                Public universities in France offer highly subsidized education
                for international students.
              </p>
            </div>

            <div className="bg-orange-50 p-8 rounded-xl">
              <Languages className="w-8 h-8 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">
                English-Taught Programs
              </h3>
              <p>
                Over 1,500 programs are taught entirely in English across
                various disciplines.
              </p>
            </div>

            <div className="bg-purple-50 p-8 rounded-xl">
              <FlaskConical className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">
                Research & Innovation
              </h3>
              <p>
                France is a global leader in research, innovation, and
                technological advancement.
              </p>
            </div>

            <div className="bg-teal-50 p-8 rounded-xl">
              <Users className="w-8 h-8 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">
                Excellent Career Prospects
              </h3>
              <p>
                Graduates benefit from strong industry links and post-study work
                opportunities.
              </p>
            </div>

            <div className="bg-rose-50 p-8 rounded-xl">
              <Globe className="w-8 h-8 text-rose-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">
                Rich Cultural Experience
              </h3>
              <p>
                Experience French culture, history, art, and a vibrant student
                lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Courses */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Top Courses to Study in France
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
          {[
            'MBA',
            'International Business',
            'Engineering',
            'Fashion & Luxury Management',
            'Data Science',
            'Artificial Intelligence',
            'Hospitality Management',
            'Finance',
          ].map((course, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow border-l-4 border-teal-500">
              {course}
            </div>
          ))}
        </div>
      </section>

      {/* Top Universities */}
      <section className="py-16 bg-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Top Universities in France</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Study at prestigious institutions recognized worldwide for academic excellence
            </p>
          </div>
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6">
          {[
            'Sorbonne University',
            'HEC Paris',
            'INSEAD',
            'École Polytechnique',
            'PSL University',
            'Sciences Po',
          ].map((u, i) => (
            <div key={i} className="bg-blue-50 p-6 rounded-xl">
              <Building2 className="mb-2" />
              {u}
            </div>
          ))}
        </div>
      </section>

      {/* Intakes */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-teal-600 text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Intake Periods in France</h2>
            <p className="text-blue-100 max-w-3xl mx-auto">
                Understanding the academic calendar is essential for planning your studies. The Ireland  generally has two main intakes:
            </p>
          </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 px-4">
          <div className="p-6 bg-white/10 rounded-xl">
            <Calendar className="mb-4" />
            <h3 className="text-xl font-bold mb-2">September Intake</h3>
            <p>Main intake with maximum course availability.</p>
          </div>
          <div className="p-6 bg-white/10 rounded-xl">
            <Calendar className="mb-4" />
            <h3 className="text-xl font-bold mb-2">January Intake</h3>
            <p>Limited programs available.</p>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-16 bg-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Scholarship Opportunities
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
                To ease the financial burden, numerous scholarships are available for international students. Some of the prominent scholarships include:
            </p>
          </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 px-4">
          <div className="p-6 shadow rounded-xl">
            <Award className="mb-3 text-blue-600" />
            <h3 className="font-bold mb-2">Eiffel Excellence Scholarship</h3>
            <p>Merit-based scholarship for international students.</p>
          </div>
          <div className="p-6 shadow rounded-xl">
            <Award className="mb-3 text-green-600" />
            <h3 className="font-bold mb-2">Erasmus+</h3>
            <p>Funded mobility programs across Europe.</p>
          </div>
          <div className="p-6 shadow rounded-xl">
            <Award className="mb-3 text-orange-600" />
            <h3 className="font-bold mb-2">University Scholarships</h3>
            <p>Institution-specific merit scholarships.</p>
          </div>
        </div>
      </section>

      {/* Cost of Living */}
      <section className="py-16 bg-gray-50">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cost of Living in Ireland</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Average monthly expenses for international students
            </p>
          </div>
        <div className="max-w-4xl mx-auto bg-white shadow rounded-xl p-8">
          <p className="text-center font-semibold">
            Average Monthly Living Cost: €800 – €1,400
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
