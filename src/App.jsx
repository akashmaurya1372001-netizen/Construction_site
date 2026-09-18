import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.jsx';
import { Hero} from './components/Hero.jsx';
import { MeasuringTape } from './components/MeasuringTape.jsx';
import { About } from './components/About.jsx';
import { Services } from './components/Services.jsx';
//import { Projects } from './components/Projects.jsx';
//import { Process } from './components/Process.jsx';
import { WhyChooseUs } from './components/WhyChooseUs.jsx';
//import { Testimonials } from './components/Testimonials.jsx';
import { ContactQuote } from './components/ContactQuote.jsx';
import { Footer } from './components/Footer.jsx';
//import {ChromaticImageCarouselDemo} from './components/Media.jsx'
export function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [preselectedService, setPreselectedService] = useState('');

  // Smooth scroll handler to target section ID
  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenQuote = (serviceName = '') => {
    if (serviceName) {
      setPreselectedService(serviceName);
    }
    scrollToSection('contact');
  };

  // Observe active section when scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'projects', 'process', 'why-us', 'testimonials', 'contact'];
      const scrollY = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen  text-stone-100 font-sans antialiased selection:bg-amber-500 ">
      {/* Top Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Hero Section */}
      <Hero
        onExploreServices={() => scrollToSection('services')}
        onRequestQuote={() => handleOpenQuote()}
      />

      {/* Measuring Tape Graphic Divider */}
      <MeasuringTape label="TOLERANCE ± 1.5MM • STRUCTURAL GRADE CONCRETE & STEEL" />

      {/* About Company Section */}
      <About />
      {/*<ChromaticImageCarouselDemo/>*/}

      {/* Services Section */}
      <Services
        onSelectServiceForQuote={(serviceTitle) => handleOpenQuote(serviceTitle)}
      />

      {/* Measuring Tape Graphic Divider */}
      <MeasuringTape label="ARCHITECTURAL ACCREDITED • LEED PLATINUM READY • ZERO DOWNTIME" />

      {/* Featured Projects Gallery*  
         /*<Projects
        onOpenQuote={(projectName) => handleOpenQuote(`Inquiry: ${projectName}`)}
      />

      {/* Construction Process Stages *
      <Process />*/}

      {/* Why Choose Us / Pillars */}
      <WhyChooseUs />

      {/* Testimonials *}
      <Testimonials />*/}

      {/* Measuring Tape Graphic Divider */}
      <MeasuringTape label="GUARANTEED MAXIMUM PRICE • OPEN-BOOK TRANSPARENCY • BONDED" />

      {/* Contact & Dynamic Quote Estimator */}
      <ContactQuote
        preselectedService={preselectedService}
      />

      {/* Footer */}
      <Footer
        onNavigate={scrollToSection}
      />
    </div>
  );
}

export default App;
