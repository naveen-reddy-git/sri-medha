import Header from "../components/Header";
import Footer from "../components/Footer";
import refinanceBanner from "../assets/images/re-finance.jpg";
import {
  CheckCircle,
  TrendingDown,
  FileText,
  IndianRupee,
  Layers,
  ClipboardList,
  HelpCircle,
} from "lucide-react";

const phoneNumber = "+91 98765 43210";

const copyPhoneNumber = async () => {
  try {
    await navigator.clipboard.writeText(phoneNumber);
    alert("Phone number copied to clipboard!");
  } catch (err) {
    console.error("Failed to copy phone number", err);
  }
};

export default function EducationLoanRefinance() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Banner */}
      <div className="w-full h-96 md:h-[500px] overflow-hidden">
        <img
          src={refinanceBanner}
          alt="Education Loan Refinancing"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">
            Education Loan Refinancing in India
          </h1>

          <div className="max-w-5xl mx-auto text-gray-700 leading-relaxed space-y-6">
            <p>
              Education loan refinancing refers to the process of taking a new
              loan to pay off your existing education loan by replacing it with
              one that offers better terms such as lower interest rates, reduced
              EMIs, or extended repayment tenure.
            </p>
            <p>
              Refinancing can help ease your financial burden once your income
              stabilizes and your repayment capacity improves.
            </p>
          </div>
        </div>
      </section>

      {/* Why Refinance */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Do Borrowers Choose Education Loan Refinancing?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Reduce monthly EMIs",
              "Get lower interest rates",
              "Switch from variable to fixed rates",
              "Extend repayment tenure",
              "Consolidate multiple loans",
              "Better loan management",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow flex items-start gap-3"
              >
                <CheckCircle className="text-teal-600 mt-1" />
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Savings Example */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            How Does Refinancing Save You Money?
          </h2>

          <div className="max-w-4xl mx-auto bg-blue-50 p-8 rounded-xl shadow">
            <p className="mb-4 text-gray-700">
              A student loan of <strong>₹20 lakhs at 12%</strong> for 9 years
              results in an interest payment of <strong>₹19,68,553</strong>.
            </p>
            <p className="mb-4 text-gray-700">
              Refinancing the same loan at <strong>10%</strong> after graduation
              reduces interest payable to <strong>₹11,39,007</strong>.
            </p>
            <p className="font-bold text-green-700 text-lg">
              Total Savings: ₹8,29,546
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            How Does Education Loan Refinancing Work?
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Apply for New Loan",
                icon: <ClipboardList />,
                desc: "Apply with a new lender offering better terms",
              },
              {
                title: "Credit Review",
                icon: <TrendingDown />,
                desc: "Lender checks income, credit score, and history",
              },
              {
                title: "Loan Payoff",
                icon: <IndianRupee />,
                desc: "New lender pays off your existing loan",
              },
              {
                title: "Start Repayment",
                icon: <Layers />,
                desc: "You repay under the new loan terms",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow text-center"
              >
                <div className="flex justify-center mb-4 text-teal-600">
                  {step.icon}
                </div>
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Documents Required for Education Loan Refinancing
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              "Loan application form",
              "Passport-size photographs",
              "KYC documents",
              "Identity & address proof",
              "Bank statements (6 months)",
              "Existing loan documents",
              "Income proof & ITR (if required)",
            ].map((doc, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg"
              >
                <FileText className="text-blue-600" />
                <span>{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            FAQs on Education Loan Refinancing
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "Can you refinance while studying?",
                a: "Yes, some lenders allow refinancing during the course.",
              },
              {
                q: "How do I refinance my education loan?",
                a: "Choose a new lender offering better terms and apply.",
              },
              {
                q: "Why refinance with SRI MEDHA GlobalConnect?",
                a: "Flexible repayment options and personalized guidance.",
              },
              {
                q: "How long does refinancing take?",
                a: "The timeline varies depending on the lender.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow">
                <div className="flex gap-3 items-start">
                  <HelpCircle className="text-teal-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">{faq.q}</h3>
                    <p className="text-gray-600 text-sm">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Refinance Your Education Loan?
        </h2>
        <p className="mb-6">
          Get expert guidance and reduce your financial burden today.
        </p>
          <button
            onClick={copyPhoneNumber}
            className="bg-white text-teal-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
          >
            Talk to Our Expert
          </button>
      </section>

      <Footer />
    </div>
  );
}
