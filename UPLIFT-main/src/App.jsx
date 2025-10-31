import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Clients from './components/Clients';
import CaseStudies from './components/CaseStudies';
import ServicesOverview from './components/ServicesOverview';
import FeatureGrid from './components/FeatureGrid';
import Process from './components/Process';
import Results from './components/Results';
import WhyContent from './components/WhyContent';
import Faq from './components/Faq';
import KeyBenefits from './components/KeyBenifits'; // <-- Corrected spelling 'KeyBenefits'
import ContactForm from './components/ContactForm';
import Cta from './components/Cta';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials'; // <-- Removed duplicate import

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* All components are rendered in a relative container to stack them */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <FeatureGrid />
        {/* These lines were commented out, causing the "unused" errors */}
        <ServicesOverview id="services" />
    
        <Process />
        <Results id="results" />
        <CaseStudies id="case-studies" />
        <KeyBenefits id="benefits" />
        <WhyContent id="about" />
        <Testimonials id="testimonials" />
        <Clients />
        <Faq id="faq" />
        <Cta />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;