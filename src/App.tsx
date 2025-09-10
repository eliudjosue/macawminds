import React, { useState } from 'react';
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
import MacawChatWidget from './components/MacawChatWidget';

// 👇 Layout con nav y footer siempre visibles
function Layout() {
const [position, setPosition] = useState<'bottom-right' | 'bottom-left'>('bottom-right');
  // Demo webhook URL (replace with your n8n webhook)
  const webhookUrl = 'https://automaize-n8n.lk6rjd.easypanel.host/webhook/b18a5a93-95ac-47be-b48e-449df610742d'; // Replace with actual n8n webhook
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet /> {/* aquí se inyectan las páginas */}
      </main>
      <Footer />
       {/* Floating widget */}
        <MacawChatWidget
          mode="floating"
          position={position}
          webhookUrl={webhookUrl}
          openOnLoad={false}
          // onSend={(payload) => console.log('Sent:', payload)}
          // onResponse={(data) => console.log('Response:', data)}
          onError={(error) => console.error('Error:', error)}
        />


    </div>
    // https://automaize-n8n.lk6rjd.easypanel.host/webhook/b18a5a93-95ac-47be-b48e-449df610742d
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
