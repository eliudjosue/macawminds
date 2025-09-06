import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'María González',
      role: 'CEO, EcoTech Solutions',
      image: 'https://images.pexels.com/photos/3727464/pexels-photo-3727464.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      comment: 'MacawMinds transformó completamente nuestra presencia digital. En solo 24 horas teníamos una landing page que triplicó nuestras conversiones.',
      result: '+300% conversiones'
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Director Marketing, InnovaCorp',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      comment: 'El chatbot de IA que nos desarrollaron atiende el 80% de las consultas automáticamente. Nuestro equipo ahora se enfoca en cerrar ventas.',
      result: '80% automatización'
    },
    {
      name: 'Ana Martínez',
      role: 'Fundadora, Digital Dreams',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      comment: 'Las campañas de Google Ads que manejan han reducido nuestro costo por cliente en un 60% mientras duplican los leads calificados.',
      result: '-60% costo, +200% leads'
    }
  ];

  return (
    <section id="casos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              clientes
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Casos reales de empresas que han transformado su negocio digital con MacawMinds.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.comment}"
              </blockquote>
              
              <div className="inline-block bg-gradient-to-r from-green-100 to-blue-100 text-green-800 text-sm font-semibold px-4 py-2 rounded-full">
                📈 {testimonial.result}
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-blue-100">Proyectos entregados</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24h</div>
              <div className="text-blue-100">Tiempo promedio</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9★</div>
              <div className="text-blue-100">Valoración promedio</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">340%</div>
              <div className="text-blue-100">ROI promedio</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}