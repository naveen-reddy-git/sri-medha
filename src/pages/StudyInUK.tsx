import Header from '../components/Header';
import Footer from '../components/Footer';
import ukbanner from "../assets/images/study-in-uk.jpg";
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
  ChevronDown,
  ChevronUp,
  Languages,
  Globe,
} from 'lucide-react';

export default function StudyInUK() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Full Width Banner Image */}
      <div className="w-full h-96 md:h-[500px] overflow-hidden">
        <img
          src={ukbanner}
          alt="Study in UK Banner"
          className="w-full h-full object-cover"
        />
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Best UK Education Consultants in Hyderabad
            </h2>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
            <p className="text-gray-700 leading-relaxed mb-6">
                The UK is one of the most preferred destinations for students aspiring for world-class education and exceptional growth opportunities, both academically and personally. With top-ranked universities, diverse courses, and unmatched facilities for research and innovation, the UK stands out as a global education hub. However, studying in the UK can be challenging, from navigating visa regulations to finding the right scholarships. That’s where Triospace Overseas, your trusted UK education consultants in Hyderabad, makes the entire process simple and stress-free.
                At Triospace Overseas, we help students turn their dreams into reality with expert guidance from one of the leading UK study consultants in Hyderabad. Our personalized approach ensures every student receives the support they need, from selecting top universities to securing financial aid and preparing for visa interviews. As the best consultancy for the UK in Hyderabad, we ensure your path to studying abroad is clear, smooth, and successful. Begin your journey with a team as committed to your future as you are.           
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Study in the UK?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover the incredible benefits of pursuing your education in the UK
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">World-Class Education</h3>
              <p className="text-gray-700">
               The UK is home to some of the world's most prestigious universities, offering high-quality education recognized globally. Universities like Oxford, Cambridge, and Imperial College London are known for their rigorous academic standards and groundbreaking research.
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Diverse Range of Courses</h3>
              <p className="text-gray-700">
                With thousands of courses across various disciplines, the UK provides options to suit every student's interests and career goals. Whether you are interested in engineering, medicine, business, or the arts, the UK has a program that will meet your needs.
              </p>
            </div>

            <div className="bg-orange-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Globe className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cultural Experience</h3>
              <p className="text-gray-700">
                Studying in the UK offers an opportunity to experience a rich cultural heritage and a multicultural environment. You'll have the chance to explore historic landmarks, attend world-class cultural events, and interact with people from diverse backgrounds.
              </p>
            </div>

            <div className="bg-purple-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <FlaskConical className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Research Opportunities</h3>
              <p className="text-gray-700">
            The UK is largely a research and innovation centre. Students get the opportunity to work with the best facilities and resources here. At universities in the UK, there is a strong emphasis placed on research, offering the opportunity for students to collaborate with pioneering projects that would lead to new discoveries, breakthroughs, or improvements in many fields.
              </p>
            </div>

            <div className="bg-teal-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Career Prospects</h3>
              <p className="text-gray-700">
                Graduates from UK universities are highly sought after by employers worldwide, thanks to the rigorous academic standards and practical experience. The UK's strong reputation for quality education ensures that your degree will be recognized and valued globally.
              </p>
            </div>

            <div className="bg-rose-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Languages className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Language Skills</h3>
              <p className="text-gray-700">
                Studying in an English-speaking country helps improve your language skills, which are highly valued in the global job market.
              </p>
            </div>
          </div>
        </div>
      </section>
        <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Top Courses to Study in UK</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
                As leading UK education consultants in Hyderabad, we guide students towards the most sought-after programs that offer excellent career prospects and global recognition.

                The UK offers a wide range of courses that attract international students. Here are some of the top courses to consider:            
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'MBA',
              'Business Analytics',
              'Artificial Intellegence',
              'IBM',
              'Cyber Security',
              'Public Health',
              'Msc Computer Science',
              'Data Science',
              'Global Healthcare and Management',
              'LLM',
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Top Universities in UK</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Study at prestigious institutions recognized worldwide for academic excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'University of Oxford',
              'University of Cambridge',
              'Imperial College London',
              'London School of Economics and Political Science (LSE)',
              'University College London (UCL)',
              'University of Edinburgh'
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
            <h2 className="text-4xl font-bold mb-4">Intake Periods in UK</h2>
            <p className="text-blue-100 max-w-3xl mx-auto">
                Understanding the academic calendar is essential for planning your studies. The UK generally has two main intakes:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <Calendar className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-3">September/October Intake</h3>
              <p className="text-blue-100">
                This is the primary intake for most universities, with the majority of courses starting in the autumn. The application deadlines for this intake typically range from January to April, depending on the university and program.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <Calendar className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-3">January/February Intake</h3>
              <p className="text-blue-100">
                Some universities offer a secondary intake in the winter, providing flexibility for students who miss the autumn intake. The application deadlines for the January/February intake usually fall between June and September of the previous year.
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
                To ease the financial burden, numerous scholarships are available for international students. Some of the prominent scholarships include:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <DollarSign className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Commonwealth Scholarships</h3>
              <p className="text-gray-700">
                Available to students from Commonwealth countries, these scholarships cover tuition fees, travel, and living expenses. Commonwealth Scholarships are offered for various levels of study, including master’s and PhD programs
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Award className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">GREAT Scholarships</h3>
              <p className="text-gray-700">
                These scholarships are provided by the British Council and participating UK universities. They are available for students from specific countries and cover tuition fees for postgraduate programs.
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
          </div>
        </div>
      </section>
            <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">UK Student Visa Types</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
                To study in the UK, you will need to obtain a student visa. The main types of student visas are:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-8 rounded-xl border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tier 4 (General) Student Visa</h3>
              <p className="text-gray-700 mb-4">
                This visa is for students who are 16 or older and have been offered a place on a course by a licensed Tier 4 sponsor. The Tier 4 visa allows you to stay in the UK for the duration of your course, plus an additional period depending on the length of your course. This type of visa permits you to work part-time during term time and full-time during vacations, giving you the opportunity to gain work experience while studying.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-100 to-teal-50 p-8 rounded-xl border-2 border-teal-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Short-Term Study Visa</h3>
              <p className="text-gray-700 mb-4">
                For students who are taking a short course or an English language course lasting up to 6 months, or an English language course lasting up to 11 months. This visa is ideal for students who wish to experience studying in the UK for a shorter period. However, it's important to note that with a short-term study visa, you are not allowed to work or extend your stay beyond the initial visa period.
              </p>
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
                To be eligible to study in the UK, you need to meet certain criteria:
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Top Cities to Study in UK</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
                The UK offers a variety of cities that are ideal for international students. Here are some of the top cities to consider:

            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-xl shadow-xl">
              <MapPin className="w-10 h-10 mb-4" />
              <h3 className="text-2xl font-bold mb-3">London</h3>
              <p className="text-blue-100">
             The capital city is home to many world-renowned universities and offers a vibrant cultural scene, a diverse population, and numerous career opportunities.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white p-8 rounded-xl shadow-xl">
              <MapPin className="w-10 h-10 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Edinburgh</h3>
              <p className="text-orange-100">
              Known for its historic and beautiful architecture, Edinburgh offers a rich academic tradition with institutions like the University of Edinburgh.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-600 to-pink-600 text-white p-8 rounded-xl shadow-xl">
              <MapPin className="w-10 h-10 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Manchester</h3>
              <p className="text-red-100">
          A city with a strong industrial heritage, Manchester is home to a thriving student community and universities like the University of Manchester.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-teal-600 text-white p-8 rounded-xl shadow-xl">
              <MapPin className="w-10 h-10 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Glasgow</h3>
              <p className="text-green-100">
              Scotland’s largest city, Glasgow offers a lively cultural scene and is home to the University of Glasgow.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-8 rounded-xl shadow-xl">
              <MapPin className="w-10 h-10 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Birmingham</h3>
              <p className="text-indigo-100">
                The UK’s second-largest city, Birmingham has a diverse student population and is known for its universities and colleges.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white p-8 rounded-xl shadow-xl">
              <MapPin className="w-10 h-10 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Bristol</h3>
              <p className="text-yellow-100">
                A city with a strong maritime history, Bristol offers excellent academic institutions and a vibrant cultural environment.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cost of Living in UK</h2>
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