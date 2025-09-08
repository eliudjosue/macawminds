import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
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
import TermsPage from './components/TermsPage';

// 👇 Layout con nav y footer siempre visibles
function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet /> {/* aquí se inyectan las páginas */}
      </main>
      <Footer />
      <N8nChatFloating userId="eliud@example.com" />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout envuelve todas las rutas */}
        <Route path="/" element={<Layout />}>
          {/* Página principal */}
          <Route
            index
            element={
              <>
                <Hero />
                <Services />
                <Process />
                {/* <Testimonials /> */}
                <CTA />
                <Pricing />
                <Contact />
              </>
            }
          />

          {/* Otras páginas */}
          <Route path="terms" element={<TermsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
