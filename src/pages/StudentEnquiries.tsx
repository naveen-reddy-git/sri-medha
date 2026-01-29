import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import {
  COUNTRIES,
  COURSES,
  EDUCATION_LEVELS,
  STUDY_TIMELINES,
  EDUCATION_FUNDS
} from '../constants/formOptions';

type StudentEnquiry = {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  country: string;
  course: string;
  education_level: string;
  study_timeline: string;
  budget: string;
  message: string;
  created_at: string;
};

export default function StudentEnquiries() {
  const [students, setStudents] = useState<StudentEnquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("enquiries")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase error:", error);
      setError(error.message);
    } else {
      setStudents(data || []);
    }

    setLoading(false);
  };

  // Helper functions to get name from key
  const getCountryName = (key: string) =>
    COUNTRIES.find((c) => c.key === key)?.name || key;

  const getCourseName = (key: string) =>
    COURSES.find((c) => c.key === key)?.name || key;

  const getEducationLevelName = (key: string) =>
    EDUCATION_LEVELS.find((e) => e.key === key)?.name || key;

  const getTimelineName = (key: string) =>
    STUDY_TIMELINES.find((t) => t.key === key)?.name || key;

  const getBudgetName = (key: string) =>
    EDUCATION_FUNDS.find((b) => b.key === key)?.name || key;

  if (loading) {
    return <div className="p-6">Loading enquiries...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-500">{error}</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Student Enquiries</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100 text-sm">
            <tr>
              <th className="border px-3 py-2">Name</th>
              <th className="border px-3 py-2">Email</th>
              <th className="border px-3 py-2">Phone</th>
              <th className="border px-3 py-2">Country</th>
              <th className="border px-3 py-2">Course</th>
              <th className="border px-3 py-2">Education</th>
              <th className="border px-3 py-2">Timeline</th>
              <th className="border px-3 py-2">Budget</th>
              <th className="border px-3 py-2">Message</th>
              <th className="border px-3 py-2">Date</th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {students.length === 0 && (
              <tr>
                <td colSpan={10} className="text-center py-4">
                  No enquiries found
                </td>
              </tr>
            )}

            {students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50">
                <td className="border px-3 py-2">{student.full_name}</td>
                <td className="border px-3 py-2">{student.email}</td>
                <td className="border px-3 py-2">{student.phone}</td>
                <td className="border px-3 py-2">{getCountryName(student.country)}</td>
                <td className="border px-3 py-2">{getCourseName(student.course)}</td>
                <td className="border px-3 py-2">{getEducationLevelName(student.education_level)}</td>
                <td className="border px-3 py-2">{getTimelineName(student.study_timeline)}</td>
                <td className="border px-3 py-2">{getBudgetName(student.budget)}</td>
                <td className="border px-3 py-2 max-w-xs truncate">{student.message || "-"}</td>
                <td className="border px-3 py-2">{new Date(student.created_at).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
