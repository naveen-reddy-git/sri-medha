import Header from '../components/Header';
import Footer from '../components/Footer';
import usabanner from "../assets/images/study-in-usa-banner.jpg";
import studyAbroadBg from "../assets/images/study-in-abroad.webp";
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
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

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
        </div>

        <div className="max-w-6xl mx-auto">
            <p className="text-gray-700 leading-relaxed mb-6">
                The United States is one of the most preferred destinations for students aspiring for world-class education and exceptional growth opportunities, both academically and personally. With top-ranked universities, diverse courses, and unmatched facilities for research and innovation, the USA stands out as a global education hub. However, studying in the USA can be challenging, from navigating visa regulations to finding the right scholarships. That’s where Srimedha global connect , your trusted USA education consultants in Hyderabad, makes the entire process simple and stress-free. At Srimedha global connect , we help students turn their dreams into reality with expert guidance from one of the leading USA study consultants in Hyderabad. Our personalized approach ensures every student receives the support they need, from selecting top universities to securing financial aid and preparing for visa interviews. As the best consultancy for the USA in Hyderabad, we ensure your path to studying abroad is clear, smooth, and successful. Begin your journey with a team as committed to your future as you are.
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
            <StudentForm />

            {/* Image Side */}
            <div className="lg:col-span-2 hidden lg:block">
              {/* The background image shows the person on the left side */}
            </div>
          </div>
        </div>
      </section>
            <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Study in the USA?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover the incredible benefits of pursuing your education in the United States
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Top-Quality Education</h3>
              <p className="text-gray-700">
                The USA is home to many of the world's top-ranked universities, offering
                exceptional academic programs and world-class faculty.
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Course Diversity</h3>
              <p className="text-gray-700">
                With thousands of programs across various fields, students have unparalleled
                flexibility to pursue their passions and career goals.
              </p>
            </div>

            <div className="bg-orange-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Career Opportunities</h3>
              <p className="text-gray-700">
                Graduates from US universities are highly sought after by employers globally,
                opening doors to excellent career prospects.
              </p>
            </div>

            <div className="bg-purple-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <FlaskConical className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Research & Innovation</h3>
              <p className="text-gray-700">
                Access cutting-edge research facilities and participate in groundbreaking projects
                that shape the future of technology and science.
              </p>
            </div>

            <div className="bg-teal-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cultural Diversity</h3>
              <p className="text-gray-700">
                Experience a multicultural environment with students from around the world,
                enriching your personal and academic growth.
              </p>
            </div>

            <div className="bg-rose-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scholarship Options</h3>
              <p className="text-gray-700">
                Numerous scholarship opportunities and financial aid programs available to help
                international students achieve their dreams.
              </p>
            </div>
          </div>
        </div>
      </section>
            <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Top Courses to Study in USA</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore the most popular and in-demand programs offered by American universities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Computer Science & IT',
              'Cybersecurity',
              'Data Science & Analytics',
              'Business Administration',
              'Engineering',
              'Healthcare & Medicine',
              'Nursing',
              'Finance & Accounting',
              'Biotechnology',
              'Artificial Intelligence',
              'Marketing',
              'Hospitality Management',
            ].map((course, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition border-l-4 border-teal-500"
              >
                <h3 className="text-lg font-semibold text-gray-900">{course}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
            <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Top Universities in USA</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Study at prestigious institutions recognized worldwide for academic excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Harvard University',
              'Stanford University',
              'Massachusetts Institute of Technology (MIT)',
              'Yale University',
              'Princeton University',
              'Columbia University',
              'University of Chicago',
              'University of Pennsylvania',
              'California Institute of Technology (Caltech)',
              'Duke University',
              'Northwestern University',
              'Johns Hopkins University',
              'Cornell University',
              'University of California, Berkeley',
              'University of Michigan',
              'Carnegie Mellon University',
              'New York University',
              'University of California, Los Angeles (UCLA)',
              'University of Southern California',
              'Boston University',
              'Georgia Institute of Technology',
              'University of Washington',
              'University of Texas at Austin',
              'University of Illinois Urbana-Champaign',
            ].map((university, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-lg shadow-md hover:shadow-xl transition"
              >
                <Building2 className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900">{university}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gradient-to-br from-blue-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Intake Periods in USA</h2>
            <p className="text-blue-100 max-w-3xl mx-auto">
              Plan your application timeline based on the three main intake periods
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <Calendar className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Fall Intake</h3>
              <p className="text-lg mb-2">September - December</p>
              <p className="text-blue-100">
                The most popular intake with maximum course availability and scholarship
                opportunities. Applications typically open in September of the previous year.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <Calendar className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Spring Intake</h3>
              <p className="text-lg mb-2">January - May</p>
              <p className="text-blue-100">
                Good alternative for students who missed fall intake. Limited courses compared to
                fall but still offers quality programs.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <Calendar className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Summer Intake</h3>
              <p className="text-lg mb-2">May - August</p>
              <p className="text-blue-100">
                Limited availability with fewer universities offering admissions. Suitable for
                specific courses and programs.
              </p>
            </div>
          </div>
        </div>
      </section>
            <section className="py-16 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Scholarship Opportunities
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Financial aid options to help fund your American education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Award className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Merit-Based Scholarships</h3>
              <p className="text-gray-700">
                Awarded based on academic excellence, standardized test scores, and extracurricular
                achievements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <DollarSign className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Need-Based Scholarships</h3>
              <p className="text-gray-700">
                Financial assistance provided based on demonstrated financial need and family
                circumstances.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Award className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Athletic Scholarships</h3>
              <p className="text-gray-700">
                Offered to talented athletes who can contribute to university sports programs while
                pursuing their studies.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <GraduationCap className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Fulbright Scholarships
              </h3>
              <p className="text-gray-700">
                Prestigious government-funded program for international students seeking graduate
                education in the USA.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Building2 className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                University-Specific Scholarships
              </h3>
              <p className="text-gray-700">
                Many universities offer their own scholarship programs for international students
                based on various criteria.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <FileText className="w-12 h-12 text-teal-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Private Scholarships</h3>
              <p className="text-gray-700">
                Scholarships from private organizations, foundations, and companies supporting
                international education.
              </p>
            </div>
          </div>
        </div>
      </section>
            <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">USA Student Visa Types</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Understanding different visa categories for international students
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-8 rounded-xl border-2 border-blue-200">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                F-1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">F-1 Visa</h3>
              <p className="text-gray-700 mb-4">
                The most common student visa for academic studies at accredited US colleges,
                universities, high schools, or language programs.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Full-time academic studies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Limited work opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Optional Practical Training (OPT)</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-100 to-teal-50 p-8 rounded-xl border-2 border-teal-200">
              <div className="bg-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                M-1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">M-1 Visa</h3>
              <p className="text-gray-700 mb-4">
                For students enrolled in vocational or other non-academic programs, excluding
                language training.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>Vocational studies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>Technical training programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>Fixed duration of stay</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-8 rounded-xl border-2 border-purple-200">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                J-1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">J-1 Visa</h3>
              <p className="text-gray-700 mb-4">
                Exchange visitor visa for participants in work-and-study-based exchange programs.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Exchange programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Research scholars</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Cultural exchange</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
            <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Eligibility Criteria
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Key requirements for admission to US universities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <FileText className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Academic Requirements
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">✓</span>
                  <span>Minimum GPA requirements (typically 3.0 or higher)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">✓</span>
                  <span>Transcripts from previous institutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">✓</span>
                  <span>Relevant coursework and prerequisites</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <BookOpen className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Standardized Tests
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2 mt-1">✓</span>
                  <span>TOEFL or IELTS for English proficiency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2 mt-1">✓</span>
                  <span>SAT or ACT for undergraduate programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2 mt-1">✓</span>
                  <span>GRE or GMAT for graduate programs</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <FileText className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Application Documents
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-1">✓</span>
                  <span>Statement of Purpose (SOP)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-1">✓</span>
                  <span>Letters of Recommendation (LORs)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-1">✓</span>
                  <span>Resume or CV</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <DollarSign className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Financial Documentation
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  <span>Proof of financial support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  <span>Bank statements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  <span>Scholarship or loan documentation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Top Cities to Study in USA</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore popular student destinations across America
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-xl shadow-xl">
              <MapPin className="w-10 h-10 mb-4" />
              <h3 className="text-2xl font-bold mb-3">New York City</h3>
              <p className="text-blue-100">
                The city that never sleeps offers world-renowned universities, diverse culture, and
                endless career opportunities in finance, media, and technology.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white p-8 rounded-xl shadow-xl">
              <MapPin className="w-10 h-10 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Los Angeles</h3>
              <p className="text-orange-100">
                Home to entertainment industry, tech startups, and excellent universities. Perfect
                for students interested in film, business, and innovation.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-600 to-pink-600 text-white p-8 rounded-xl shadow-xl">
              <MapPin className="w-10 h-10 mb-4" />
              <h3 className="text-2xl font-bold mb-3">San Francisco</h3>
              <p className="text-red-100">
                Technology hub with proximity to Silicon Valley, offering unparalleled
                opportunities in tech, entrepreneurship, and innovation.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-teal-600 text-white p-8 rounded-xl shadow-xl">
              <MapPin className="w-10 h-10 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Boston</h3>
              <p className="text-green-100">
                Historic education center with prestigious universities like Harvard and MIT.
                Strong in research, healthcare, and academia.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-8 rounded-xl shadow-xl">
              <MapPin className="w-10 h-10 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Chicago</h3>
              <p className="text-indigo-100">
                Vibrant city with excellent universities, strong business sector, and rich cultural
                scene. Great for business and architecture students.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white p-8 rounded-xl shadow-xl">
              <MapPin className="w-10 h-10 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Seattle</h3>
              <p className="text-yellow-100">
                Tech-forward city home to major companies like Amazon and Microsoft. Ideal for
                computer science and engineering students.
              </p>
            </div>
          </div>
        </div>
      </section>
            <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cost of Living in USA</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Average monthly expenses for international students
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Building2 className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="text-lg font-semibold text-gray-900">Accommodation</span>
                  </div>
                  <span className="text-xl font-bold text-blue-600">$500 - $1,500</span>
                </div>

                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <DollarSign className="w-6 h-6 text-green-600" />
                    </div>
                    <span className="text-lg font-semibold text-gray-900">Food & Groceries</span>
                  </div>
                  <span className="text-xl font-bold text-green-600">$300 - $600</span>
                </div>

                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <TrendingUp className="w-6 h-6 text-purple-600" />
                    </div>
                    <span className="text-lg font-semibold text-gray-900">Transportation</span>
                  </div>
                  <span className="text-xl font-bold text-purple-600">$50 - $150</span>
                </div>

                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <BookOpen className="w-6 h-6 text-orange-600" />
                    </div>
                    <span className="text-lg font-semibold text-gray-900">
                      Books & Supplies
                    </span>
                  </div>
                  <span className="text-xl font-bold text-orange-600">$100 - $200</span>
                </div>

                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="bg-teal-100 p-3 rounded-lg">
                      <Users className="w-6 h-6 text-teal-600" />
                    </div>
                    <span className="text-lg font-semibold text-gray-900">Personal Expenses</span>
                  </div>
                  <span className="text-xl font-bold text-teal-600">$100 - $300</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        
      <Footer />
    </div>
  );
}