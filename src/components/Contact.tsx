import React from 'react';
import { Mail, Phone, MessageCircle, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Listo para{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              transformar tu negocio?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contáctanos hoy mismo y comienza a ver resultados en 24 horas. 
            Nuestro equipo está listo para impulsar tu éxito digital.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Agenda tu consulta gratuita</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Tu empresa"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Servicio de interés
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="landing">Landing Pages</option>
                      <option value="ai">Agentes de IA</option>
                      <option value="ads">Gestión de Ads</option>
                      <option value="all">Todos los servicios</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Cuéntanos sobre tu proyecto
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Describe tu proyecto, objetivos y timeline..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center group"
                >
                  Enviar mensaje
                  <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
              
              <p className="text-xs text-gray-500 mt-4 text-center">
                * Responderemos en menos de 2 horas durante horario comercial
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Otras formas de contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors cursor-pointer">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <MessageCircle size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-blue-600">Respuesta inmediata</p>
                  </div>
                </div>
                
                <div className="flex items-center p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-colors cursor-pointer">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">hello@macawminds.com</p>
                    <p className="text-sm text-green-600">Respuesta en 2 horas</p>
                  </div>
                </div>
                
                <div className="flex items-center p-6 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors cursor-pointer">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Teléfono</h4>
                    <p className="text-gray-600">+1 (555) 987-6543</p>
                    <p className="text-sm text-purple-600">Lun-Vie 9AM-6PM EST</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">⚡ Consulta Express</h4>
              <p className="text-gray-300 mb-6">
                ¿Necesitas una respuesta rápida? Agenda una videollamada de 15 minutos 
                y obtén una estrategia personalizada sin costo.
              </p>
              <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Agendar ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}