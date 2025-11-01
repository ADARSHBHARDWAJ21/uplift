// import Navigation from './components/Navigation';
// import Hero from './components/Hero';
// import Clients from './components/Clients';
// import CaseStudies from './components/CaseStudies';
// import ServicesOverview from './components/ServicesOverview';
// import FeatureGrid from './components/FeatureGrid';
// import Process from './components/Process';
// import Results from './components/Results';
// import WhyContent from './components/WhyContent';
// import Faq from './components/Faq';
// import KeyBenefits from './components/KeyBenifits'; // <-- Corrected spelling 'KeyBenefits'
// import ContactForm from './components/ContactForm';
// import Cta from './components/Cta';
// import Footer from './components/Footer';
// import Testimonials from './components/Testimonials'; // <-- Removed duplicate import

// function App() {
//   return (
//     <div className="min-h-screen bg-black text-white overflow-hidden relative">
//       {/* All components are rendered in a relative container to stack them */}
//       <div className="relative z-10">
//         <Navigation />
//         <Hero />
//         <Clients />
//         <FeatureGrid />
//         {/* These lines were commented out, causing the "unused" errors */}
//         <ServicesOverview id="services" />
    
//         <Process />
//         <Results id="results" />
//         <CaseStudies id="case-studies" />
//         <KeyBenefits id="benefits" />
//         <WhyContent id="about" />
//         <Testimonials id="testimonials" />
  
//         <Faq id="faq" />
//         <Cta />
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default App;
// UPDATED: Import useState and the new BookingPage
// import { useState } from 'react';
// import BookingPage from './components/BookingPage'; // <-- NEW

// import Navigation from './components/Navigation';
// import Hero from './components/Hero';
// import Clients from './components/Clients';
// import CaseStudies from './components/CaseStudies';
// import ServicesOverview from './components/ServicesOverview';
// import FeatureGrid from './components/FeatureGrid';
// import Process from './components/Process';
// import Results from './components/Results';
// import WhyContent from './components/WhyContent';
// import Faq from './components/Faq';
// import KeyBenefits from './components/KeyBenifits';
// import ContactForm from './components/ContactForm';
// import Cta from './components/Cta';
// import Footer from './components/Footer';
// import Testimonials from './components/Testimonials';

// function App() {
//   // NEW: State to control which page is visible
//   const [isBookingPageVisible, setIsBookingPageVisible] = useState(false);

//   return (
//     <div className="min-h-screen bg-black text-white overflow-hidden relative">
//       {/* All components are rendered in a relative container to stack them */}
//       <div className="relative z-10">
        
//         {/* Navigation is always visible */}
//         <Navigation /> 

//         {/* UPDATED: Conditionally render the Booking Page or the Main Content */}
//         {isBookingPageVisible ? (
//           <BookingPage setIsBookingPageVisible={setIsBookingPageVisible} />
//         ) : (
//           <>
//             <Hero />
//             <Clients />
//             <FeatureGrid />
//             <ServicesOverview id="services" />
//             <Process />
//             <Results id="results" />
//             <CaseStudies id="case-studies" />
//             <KeyBenefits id="benefits" />
//             <WhyContent id="about" />
//             <Testimonials id="testimonials" />
//             <Faq id="faq" />
//             {/* UPDATED: Pass the state setter to Cta and add id */}
//             <Cta id="cta" setIsBookingPageVisible={setIsBookingPageVisible} />
//             <ContactForm id="contact" />
//           </>
//         )}
        
//         {/* Footer is always visible */}
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default App;
import { useState } from 'react';
import BookingPage from './components/BookingPage';

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
import KeyBenefits from './components/KeyBenifits';
// UPDATED: Removed the ContactForm import
import Cta from './components/Cta';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';

function App() {
  const [isBookingPageVisible, setIsBookingPageVisible] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* All components are rendered in a relative container to stack them */}
      <div className="relative z-10">
        
        <Navigation /> 

        {isBookingPageVisible ? (
          <BookingPage setIsBookingPageVisible={setIsBookingPageVisible} />
        ) : (
          <>
            <Hero />
            <Clients />
            <FeatureGrid />
            <ServicesOverview id="services" />
            <Process />
            <Results id="results" />
            <CaseStudies id="case-studies" />
            <KeyBenefits id="benefits" />
            <WhyContent id="about" />
            <Testimonials id="testimonials" />
            <Faq id="faq" />
            <Cta id="cta" setIsBookingPageVisible={setIsBookingPageVisible} />
            {/* UPDATED: Removed the <ContactForm /> component from here */}
          </>
        )}
        
        <Footer />
      </div>
    </div>
  );
}

export default App;