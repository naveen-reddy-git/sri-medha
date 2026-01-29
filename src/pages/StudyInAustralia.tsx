import Header from '../components/Header';
import Footer from '../components/Footer';
import australiaBanner from "../assets/images/study-in-australia.jpg";
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
  TrendingUp,
  FlaskConical,
  Users,
  DollarSign,
  Building2,
  Calendar,
  Award,
  Languages,
  Globe,
  Briefcase,
} from 'lucide-react';

export default function StudyInAustralia() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Banner */}
      <div className="w-full h-96 md:h-[500px] overflow-hidden">
        <img
          src={australiaBanner}
          alt="Study in Australia"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Best Australia Education Consultants in Hyderabad
            </h1>
          </div>

          <div className="max-w-6xl mx-auto">
            <p className="text-gray-700 leading-relaxed mb-6">
              Australia is one of the most preferred study destinations for
              international students, known for its globally ranked
              universities, high-quality education system, and excellent
              lifestyle. Australian institutions emphasize practical learning,
              research, and industry exposure, making graduates highly
              employable worldwide.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At Triospace Overseas, we provide complete guidance for students
              aspiring to study in Australia — from course selection and
              university admissions to visa assistance and pre-departure
              support. As trusted Australia education consultants in Hyderabad,
              we help you achieve your international education goals with
              confidence.
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

      {/* Why Study in Australia */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Study in Australia?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl">
              <GraduationCap className="mb-4 text-blue-600" />
              <h3 className="font-bold mb-2">Globally Ranked Universities</h3>
              <p>Australia has 7 universities in the global top 100.</p>
            </div>

            <div className="bg-green-50 p-8 rounded-xl">
              <Briefcase className="mb-4 text-green-600" />
              <h3 className="font-bold mb-2">Post Study Work Visa</h3>
              <p>Stay back 2–4 years after graduation.</p>
            </div>

            <div className="bg-orange-50 p-8 rounded-xl">
              <TrendingUp className="mb-4 text-orange-600" />
              <h3 className="font-bold mb-2">High Employability</h3>
              <p>Strong demand for skilled professionals.</p>
            </div>

            <div className="bg-purple-50 p-8 rounded-xl">
              <FlaskConical className="mb-4 text-purple-600" />
              <h3 className="font-bold mb-2">Research Excellence</h3>
              <p>World leader in research & innovation.</p>
            </div>

            <div className="bg-teal-50 p-8 rounded-xl">
              <Users className="mb-4 text-teal-600" />
              <h3 className="font-bold mb-2">Multicultural Society</h3>
              <p>Students from 190+ countries.</p>
            </div>

            <div className="bg-rose-50 p-8 rounded-xl">
              <Globe className="mb-4 text-rose-600" />
              <h3 className="font-bold mb-2">High Quality of Life</h3>
              <p>Safe cities and excellent healthcare.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Courses */}
      <section className="py-16 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Top Courses to Study in Australia</h2>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 px-4">
          {[
            'Engineering',
            'Information Technology',
            'Data Science',
            'Business & Management',
            'MBA',
            'Health Sciences',
            'Cyber Security',
            'Accounting & Finance'
          ].map((c, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow border-l-4 border-teal-500">
              {c}
            </div>
          ))}
        </div>
      </section>

      {/* Top Universities */}
      <section className="py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Top Universities in Australia</h2>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 px-4">
          {[
            'University of Melbourne',
            'Australian National University',
            'University of Sydney',
            'Monash University',
            'University of Queensland',
            'University of New South Wales'
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
          <h2 className="text-4xl font-bold">Intake Periods in Australia</h2>
          <p className="text-blue-100">Australia generally has three main intakes:</p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-4">
          <div className="bg-white/10 p-6 rounded-xl">
            <Calendar className="mb-4" />
            <h3 className="font-bold">February Intake</h3>
            <p>Main intake</p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl">
            <Calendar className="mb-4" />
            <h3 className="font-bold">July Intake</h3>
            <p>Second major intake</p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl">
            <Calendar className="mb-4" />
            <h3 className="font-bold">November Intake</h3>
            <p>Limited courses</p>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Scholarship Opportunities</h2>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 px-4">
          <div className="p-6 shadow rounded-xl">
            <Award className="text-blue-600 mb-3" />
            <h3 className="font-bold">Australia Awards</h3>
            <p>Government-funded scholarships.</p>
          </div>
          <div className="p-6 shadow rounded-xl">
            <Award className="text-green-600 mb-3" />
            <h3 className="font-bold">University Scholarships</h3>
            <p>Merit-based scholarships.</p>
          </div>
          <div className="p-6 shadow rounded-xl">
            <Award className="text-orange-600 mb-3" />
            <h3 className="font-bold">Research Training Program</h3>
            <p>For postgraduate research students.</p>
          </div>
        </div>
      </section>

      {/* Cost of Living */}
      <section className="py-16 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Cost of Living in Australia</h2>
        </div>

        <div className="max-w-4xl mx-auto bg-white shadow rounded-xl p-8">
          <p className="text-center font-semibold">
            Average Monthly Living Cost: AUD 1,400 – 2,500
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
