/*
  # Create student enquiries table

  1. New Tables
    - `student_enquiries`
      - `id` (uuid, primary key)
      - `full_name` (text) - Student's full name
      - `email` (text) - Student's email address
      - `phone` (text) - Student's phone number
      - `country` (text) - Preferred study destination
      - `course` (text) - Preferred course/program
      - `education_level` (text) - Current education level
      - `study_timeline` (text) - When planning to study
      - `message` (text) - Additional details
      - `created_at` (timestamptz) - Submission timestamp

  2. Security
    - Enable RLS on `student_enquiries` table
    - Add policy for inserting enquiries (public access for form submission)
    - Add policy for reading enquiries (authenticated users only)
*/

CREATE TABLE IF NOT EXISTS student_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  country text NOT NULL,
  course text NOT NULL,
  education_level text NOT NULL,
  study_timeline text NOT NULL,
  message text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE student_enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit enquiry"
  ON student_enquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read enquiries"
  ON student_enquiries
  FOR SELECT
  TO authenticated
  USING (true);