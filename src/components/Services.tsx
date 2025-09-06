import React from 'react';
import { Globe, Bot, TrendingUp, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Landing Pages',
      subtitle: 'Diseño que convierte',
      description: 'Landing pages modernas y optimizadas para SEO que convierten visitantes en clientes. Diseño responsivo y entrega en 24 horas.',
      features: ['Diseño moderno', 'Optimización SEO', 'Entrega rápida', 'Mobile-first'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Bot,
      title: 'Agentes de IA',
      subtitle: 'Automatización inteligente',
      description: 'Chatbots inteligentes que atienden a tus clientes 24/7, generan leads y automatizan tu atención al cliente de forma natural.',
      features: ['Atención 24/7', 'Generación de leads', 'Integración web', 'IA conversacional'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Gestión de Ads',
      subtitle: 'Campañas que funcionan',
      description: 'Campañas publicitarias optimizadas en Google, Meta y LinkedIn. Resultados medibles y ROI comprobado para tu negocio.',
      features: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'ROI medible'],
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Servicios que{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              transforman negocios
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Combinamos diseño, tecnología e inteligencia artificial para impulsar 
            tu presencia digital y generar resultados reales.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="group relative bg-white rounded-2xl border border-gray-100 hover:border-gray-200 p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} mb-6`}>
                  <IconComponent size={28} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-500 font-medium mb-4">{service.subtitle}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="group/btn flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  Saber más
                  <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                {/* Hover effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}