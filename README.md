# Sri Medha Global Connect - Overseas Education Website

A modern, professional website for Sri Medha Global Connect, offering overseas education services with expert counselling for students aspiring to study abroad.

## Features

- **Hero Section**: Engaging landing page with call-to-action for free counselling
- **Success Stories**: Testimonials from successful students
- **About Section**: Detailed information about the institution's 25+ year legacy
- **Countries Section**: Comprehensive overview of study destinations (USA, UK, Canada, Australia, Ireland, France)
- **Financial Partners**: Display of 11+ education loan partners
- **Contact Form**: Complete enquiry form with database integration
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Smooth Animations**: Modern transitions and hover effects

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Supabase (Database)
- Lucide React (Icons)

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Supabase

1. Create a Supabase account at https://supabase.com
2. Create a new project
3. Copy your project URL and anon key
4. Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

The database table `student_enquiries` has already been created via migration.

### 3. Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 4. Build for Production

```bash
npm run build
```

## Database Schema

The application uses a `student_enquiries` table with the following fields:

- `id` (UUID, Primary Key)
- `full_name` (Text)
- `email` (Text)
- `phone` (Text)
- `country` (Text)
- `course` (Text)
- `education_level` (Text)
- `study_timeline` (Text)
- `message` (Text)
- `created_at` (Timestamp)

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── SuccessStories.tsx  # Student testimonials
│   ├── About.tsx           # About section
│   ├── Countries.tsx       # Study destinations
│   ├── FinancialPartners.tsx # Loan partners
│   ├── ContactForm.tsx     # Enquiry form
│   └── Footer.tsx          # Footer section
├── lib/
│   └── supabase.ts         # Supabase client
├── App.tsx                 # Main app component
├── index.css               # Global styles
└── main.tsx                # Entry point
```

## Customization

### Update Contact Information

Edit the phone number and email in:
- `src/components/Header.tsx`
- `src/components/Footer.tsx`

### Add More Financial Partners

Edit `src/components/FinancialPartners.tsx` and update the `partners` array.

### Modify Countries

Edit `src/components/Countries.tsx` and update the `countries` array.

## Color Scheme

The website uses a teal color scheme that matches the brand:
- Primary: Teal 600 (#0d9488)
- Hover: Teal 700 (#0f766e)
- Background: Teal 50 (#f0fdfa)

## License

All rights reserved - Sri Medha Global Connect © 2025
