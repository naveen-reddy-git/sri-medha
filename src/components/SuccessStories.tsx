import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Priya Sharma",
    university: "Stanford University, USA",
    course: "MS in Computer Science",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 5,
    text: "Sri Medha Global Connect made my dream of studying at Stanford a reality. Their guidance throughout the application process was invaluable."
  },
  {
    name: "Rahul Verma",
    university: "University of Toronto, Canada",
    course: "MBA",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 5,
    text: "The team's expertise in visa processing and documentation helped me secure admission to my dream university without any hassles."
  },
  {
    name: "Ananya Reddy",
    university: "University of Melbourne, Australia",
    course: "MS in Data Science",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 5,
    text: "Their personalized counselling and financial aid guidance made studying abroad affordable. Forever grateful to the Sri Medha team!"
  }
];

export default function SuccessStories() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Students' <span className="text-teal-600">Success Stories</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from students who achieved their dreams of studying abroad with our guidance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition group"
            >
              <Quote className="text-teal-600 opacity-20 mb-4" size={48} />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="fill-yellow-400 text-yellow-400" size={18} />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-teal-500"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.course}</div>
                  <div className="text-sm text-teal-600 font-medium">{testimonial.university}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
