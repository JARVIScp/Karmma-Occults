import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Graphology from './components/Graphology';
import Health from './components/Health';
import Services from './components/Services';
import LogoAnalysis from './components/LogoAnalysis';
import WhyWorkWith from './components/WhyWorkWith';
import WhoCanBenefit from './components/WhoCanBenefit';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import EnquireButton from './components/EnquireButton';

function App() {
  return (
    <main className="bg-background min-h-screen selection:bg-foreground selection:text-background">
      <Navbar />
      <Hero />
      <About />
      <Graphology />
      <Health />
      <Services />
      <LogoAnalysis />
      <WhyWorkWith />
      <WhoCanBenefit />
      <CTA />
      <Footer />
      <ConsultationModal />
      <EnquireButton />
    </main>
  );
}

export default App;
