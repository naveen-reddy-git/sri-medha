import Header from '../components/Header';
import Footer from '../components/Footer';

export default function StudyInCanada() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Study in <span className="text-teal-600">Canada</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover world-class education opportunities in Canada
            </p>
          </div>
          {/* Add your content here */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <p className="text-center text-gray-600">Page content coming soon...</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}