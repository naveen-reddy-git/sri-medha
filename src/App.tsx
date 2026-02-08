import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SuccessStories from './components/SuccessStories';
import About from './components/About';
import Countries from './components/Countries';
import FinancialPartners from './components/FinancialPartners';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import StudyInUSA from './pages/StudyInUSA';
import StudyInUK from './pages/StudyInUK';
import StudyInCanada from './pages/StudyInCanada';
import StudyInAustralia from './pages/StudyInAustralia';
import StudyInIreland from './pages/StudyInIreland';
import StudyInFrance from './pages/StudyInFrance';
import EducationLoanRefinance from './pages/EducationLoanRefinance';  
import StudentEnquiries from "./pages/StudentEnquiries";

function Home() {
  const location = useLocation();

  useEffect(() => {
    // Handle scroll to section from navigation state
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      <Header />
      <Hero />
      <SuccessStories />
      <About />
      <Countries />
      <FinancialPartners />
      <ContactForm />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/study-in-usa" element={<StudyInUSA />} />
          <Route path="/study-in-uk" element={<StudyInUK />} />
          <Route path="/study-in-canada" element={<StudyInCanada />} />
          <Route path="/study-in-australia" element={<StudyInAustralia />} />
          <Route path="/study-in-ireland" element={<StudyInIreland />} />
          <Route path="/study-in-france" element={<StudyInFrance />} />
          <Route path="/refinance-page" element={<EducationLoanRefinance />} />
          <Route path="/student-enquiries" element={<StudentEnquiries />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
