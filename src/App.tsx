import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import N8nChatFloating from './components/N8nChatFloating';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Process />
      <Testimonials />
      <CTA />
      <Pricing />
      <Contact />
      <Footer />
      <N8nChatFloating userId="eliud@example.com" />
    </div>
  );
}

export default App;