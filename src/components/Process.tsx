import React from 'react';
import { Calendar, FileText, Rocket } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: Calendar,
      step: '01',
      title: 'Reunión inicial',
      description: 'Analizamos tu negocio, objetivos y necesidades específicas para crear la estrategia perfecta.',
      time: '30 min'
    },
    {
      icon: FileText,
      step: '02',
      title: 'Propuesta personalizada',
      description: 'Diseñamos una solución a medida con timeline claro, presupuesto y entregables específicos.',
      time: '2 horas'
    },
    {
      icon: Rocket,
      step: '03',
      title: 'Entrega en 24h',
      description: 'Implementamos y entregamos tu proyecto listo para generar resultados inmediatos.',
      time: '24 horas'
    }
  ];

  return (
    <section id="proceso" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cómo{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              trabajamos
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un proceso simple y efectivo que nos permite entregarte resultados 
            excepcionales en tiempo récord.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection lines */}
          <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200"></div>
          
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative text-center">
                <div className="relative z-10 inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg mb-6 group hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-16 h-16 flex items-center justify-center">
                    <IconComponent size={28} className="text-white" />
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-bold px-4 py-2 rounded-full mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                  <div className="inline-flex items-center text-sm text-blue-600 font-semibold">
                    ⏱️ {step.time}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}