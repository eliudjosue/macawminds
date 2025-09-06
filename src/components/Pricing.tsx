import React from 'react';
import { Check, ArrowRight, Star } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Básico',
      price: '$497',
      period: 'proyecto',
      description: 'Perfecto para emprendedores y pequeños negocios que necesitan presencia digital rápida.',
      features: [
        'Landing page optimizada',
        'Diseño responsive',
        'Optimización SEO básica',
        '1 revisión incluida',
        'Entrega en 24-48h',
        'Soporte por email'
      ],
      popular: false,
      color: 'from-gray-600 to-gray-700'
    },
    {
      name: 'Profesional',
      price: '$997',
      period: 'proyecto',
      description: 'La opción más popular para empresas que buscan maximizar conversiones y automatizar procesos.',
      features: [
        'Todo lo del plan Básico',
        'Chatbot IA integrado',
        'Análisis de competencia',
        'Optimización de conversiones',
        '3 revisiones incluidas',
        'Setup de Google Analytics',
        'Soporte prioritario'
      ],
      popular: true,
      color: 'from-blue-600 to-purple-600'
    },
    {
      name: 'Premium',
      price: '$1,997',
      period: 'proyecto',
      description: 'Solución completa para empresas que quieren dominar su mercado digital.',
      features: [
        'Todo lo del plan Profesional',
        'Gestión de Ads (3 meses)',
        'Chatbot IA avanzado',
        'A/B testing incluido',
        'Revisiones ilimitadas',
        'Dashboard personalizado',
        'Consultoría estratégica',
        'Soporte 24/7'
      ],
      popular: false,
      color: 'from-purple-600 to-pink-600'
    }
  ];

  return (
    <section id="planes" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Planes diseñados para{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              tu crecimiento
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Elige el plan que mejor se adapte a tus objetivos. Todos incluyen 
            garantía de satisfacción y resultados medibles.
          </p>
          
          <div className="inline-flex items-center bg-green-100 text-green-800 px-6 py-3 rounded-full text-sm font-semibold">
            🎉 Descuento especial del 20% para los primeros 50 clientes
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ${plan.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center">
                    <Star size={16} className="mr-2 fill-current" />
                    Más Popular
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{plan.description}</p>
                
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500 ml-2">/{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <Check size={14} className="text-green-600" />
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center group ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25' 
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}>
                  Elegir {plan.name}
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              ¿Necesitas algo personalizado?
            </h3>
            <p className="text-gray-600 mb-6">
              Ofrecemos soluciones empresariales a medida con integraciones personalizadas, 
              desarrollo de aplicaciones y consultoría estratégica completa.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Hablar con un especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}