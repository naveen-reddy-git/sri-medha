import Header from './components/Header';
import Hero from './components/Hero';
import SuccessStories from './components/SuccessStories';
import About from './components/About';
import Countries from './components/Countries';
import FinancialPartners from './components/FinancialPartners';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <SuccessStories />
      <About />
      <Countries />
      <FinancialPartners />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
