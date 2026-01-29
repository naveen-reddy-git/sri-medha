// src/components/ContactForm.tsx
import { useState } from 'react';
import { Send, CheckCircle, Loader } from 'lucide-react';
import { supabase } from '../lib/supabase';
import {
  COUNTRIES,
  COURSES,
  EDUCATION_LEVELS,
  STUDY_TIMELINES,
  EDUCATION_FUNDS
} from '../constants/formOptions';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    country: '',
    course: '',
    education_level: '',
    study_timeline: '',
    budget: '',
    exam_scores: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('enquiries') // <-- make sure your table name matches exactly in Supabase
        .insert([{
          full_name: formData.full_name,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          course: formData.course,
          education_level: formData.education_level,
          study_timeline: formData.study_timeline,
          budget: formData.budget,
          exam_scores: formData.exam_scores,
          additional_info: formData.message
        }]);

      if (error) throw error;

      setStatus('success');
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        country: '',
        course: '',
        education_level: '',
        study_timeline: '',
        budget: '',
        exam_scores: '',
        message: ''
      });

      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setErrorMessage('Failed to submit form. Please try again.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="bg-white lg:bg-white/95 backdrop-blur-sm rounded-2xl px-6 lg:px-12 py-8 lg:py-10 shadow-2xl ml-20">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Get Personalized Counselling Today!
        </h2>
        <p className="text-gray-600">
          Leave your details with us, and our team member will connect with you shortly.
        </p>
      </div>

      {status === "success" && (
        <div className="mb-4 text-green-700 font-semibold">
          Your enquiry has been submitted successfully!
        </div>
      )}
      {status === "error" && (
        <div className="mb-4 text-red-600 font-semibold">
          Something went wrong. Please try again.
        </div>
      )}

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label htmlFor="form_full_name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="form_full_name"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition text-sm"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="form_email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="form_email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition text-sm"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="form_phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              id="form_phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition text-sm"
              placeholder="+91 98765 43210"
            />
          </div>

          {/* Country */}
          <div>
            <label htmlFor="form_country" className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Country *
            </label>
            <select
              id="form_country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition text-sm"
            >
              <option value="">Select Country</option>
              {COUNTRIES.map((country) => (
                <option key={country.key} value={country.key}>{country.name}</option>
              ))}
            </select>
          </div>

          {/* Course */}
          <div>
            <label htmlFor="form_course" className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Course *
            </label>
            <select
              id="form_course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition text-sm"
            >
              <option value="">Select Course</option>
              {COURSES.map((course) => (
                <option key={course.key} value={course.key}>{course.name}</option>
              ))}
            </select>
          </div>

          {/* Education Level */}
          <div>
            <label htmlFor="form_education_level" className="block text-sm font-medium text-gray-700 mb-1">
              Current Education Level *
            </label>
            <select
              id="form_education_level"
              name="education_level"
              value={formData.education_level}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition text-sm"
            >
              <option value="">Select Level</option>
              {EDUCATION_LEVELS.map((level) => (
                <option key={level.key} value={level.key}>{level.name}</option>
              ))}
            </select>
          </div>

          {/* Study Timeline */}
          <div>
            <label htmlFor="form_study_timeline" className="block text-sm font-medium text-gray-700 mb-1">
              When do you plan to study? *
            </label>
            <select
              id="form_study_timeline"
              name="study_timeline"
              value={formData.study_timeline}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition text-sm"
            >
              <option value="">Select Timeline</option>
              {STUDY_TIMELINES.map((timeline) => (
                <option key={timeline.key} value={timeline.key}>{timeline.name}</option>
              ))}
            </select>
          </div>

          {/* Budget */}
          <div>
            <label htmlFor="form_budget" className="block text-sm font-medium text-gray-700 mb-1">
              Education Fund *
            </label>
            <select
              id="form_budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition text-sm"
            >
              <option value="">Select Education Fund</option>
              {EDUCATION_FUNDS.map((fund) => (
                <option key={fund.key} value={fund.key}>{fund.name}</option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition font-medium"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Submitting..." : "Get Free Counselling"}
        </button>
      </form>
    </div>
  );
}
