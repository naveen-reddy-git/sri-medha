import { Award, Target, Users, TrendingUp } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "25+ years of proven track record in education counselling"
    },
    {
      icon: Target,
      title: "Integrity",
      description: "Transparent and ethical guidance at every step"
    },
    {
      icon: Users,
      title: "Student-Centric",
      description: "Personalized approach for each student's unique journey"
    },
    {
      icon: TrendingUp,
      title: "Success-Driven",
      description: "100% commitment to your academic goals"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-teal-600">Sri Medha Global Connect</span>
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Legacy</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Founded on a legacy of academic excellence that began in 1998, Sri Medha has been a trusted
                educational institution guiding students from every corner of India toward meaningful academic
                and professional success. For over two decades, Sri Medha has played a pivotal role in shaping
                careers by mentoring and preparing aspirants for central and state government examinations,
                with students securing top ranks across multiple departments and services.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Leadership</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                At the heart of this success lies the visionary leadership of <strong>Director Sri S. Mahesh</strong>,
                whose unwavering commitment to integrity, academic rigor, and student-centric guidance has
                transformed Sri Medha into a respected and reliable name in education. His principled approach,
                long-term vision, and relentless focus on quality have not only inspired thousands of students
                but have also cultivated a culture of trust, discipline, and excellence within the institution.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Expansion</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Building upon this strong foundation, Sri Medha Global Edu Connect marks the institution's
                natural evolution into the domain of international education and global academic pathways.
                This initiative is led in collaboration with <strong>Mr. M. Lokesh</strong>, an alumnus of IIT Madras,
                whose professional journey is defined by exceptional discipline, perseverance, and an
                uncompromising commitment to quality.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Mr. Lokesh embodies the values that Sri Medha stands for—hard work, integrity, and purpose-driven
                leadership. Known for his methodical approach and attention to detail, he believes in doing things
                the right way, without shortcuts. His calm determination, ethical mindset, and deep sense of
                responsibility have earned him the trust and respect of students, parents, and peers alike.
              </p>
            </div>

            <div className="bg-teal-600 text-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
              <p className="leading-relaxed">
                Together, Sri Medha Global Edu Connect offers students a hassle-free, transparent, and well-guided
                transition from Indian universities to reputed international institutions. Our focus is not on volume,
                but on personalized guidance, ethical counselling, and long-term student success.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition group"
            >
              <div className="bg-teal-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-600 transition">
                <value.icon className="text-teal-600 group-hover:text-white transition" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
