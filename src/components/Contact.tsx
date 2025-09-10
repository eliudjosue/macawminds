'use client';

import React from 'react';
import { Mail, Phone, MessageCircle, Send } from 'lucide-react';

export default function Contact() {
  const calendarUrl = 'https://calendar.app.google/cBSkP4qoqcictUXG7'; // reemplazá por tu URL exacta

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',      // <- agregado para coincidir con la API
    company: '',
    service: '',
    message: ''
  });

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    const body = new URLSearchParams();
    body.append('name', formData.name);
    body.append('email', formData.email);
    body.append('phone', formData.phone);
    body.append('company', formData.company);
    body.append('message', formData.message);
    body.append('service', formData.service || ''); // opcional
    body.append('_captcha', 'false');
    // body.append('_next', 'https://www.macawminds.com.ar');
    body.append('_next', 'https://macawminds-xi.vercel.app/');

    try {
      const res = await fetch('https://calendar.app.google/cBSkP4qoqcictUXG7', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Listo para{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              transformar tu negocio?
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Contáctanos hoy mismo y comienza a ver resultados en 24 horas.
            Nuestro equipo está listo para impulsar tu éxito digital.
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact Form */}
          <div>
            <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                Agenda tu consulta gratuita
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+54 9 11 2387-8173"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      autoComplete="organization"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tu empresa"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
                  <div className="md:col-span-2">
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Servicio de interés
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y"
                    placeholder="Describe tu proyecto, objetivos y timeline..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center group disabled:opacity-70"
                >
                  {loading ? 'Enviando...' : 'Enviar mensaje'}
                  {!loading && <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />}
                </button>

                {success && (
                  <p className="text-green-600 text-sm text-center">
                    ¡Mensaje enviado con éxito!
                  </p>
                )}
                {error && (
                  <p className="text-red-600 text-sm text-center">
                    Ocurrió un error al enviar. Intenta nuevamente.
                  </p>
                )}
              </form>

              <p className="text-xs text-gray-500 mt-4 text-center">
                * Responderemos en menos de 2 horas durante horario comercial
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Otras formas de contacto
              </h3>

              <div className="space-y-4 sm:space-y-6">
                <a
                  href="https://wa.me/549112388173?text=Hola%2C%20me%20gustar%C3%ADa%20hacer%20una%20consulta%20sobre%20los%20servicios%20de%20MacawMinds"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 sm:p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
                >
                  <div className="w-12 h-12 shrink-0 bg-blue-600 rounded-lg grid place-items-center">
                    <MessageCircle size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                    <p className="text-gray-600">+54 (11) 238-8173</p>
                    <p className="text-sm text-blue-600">Respuesta inmediata</p>
                  </div>
                </a>

                <a
                  href="mailto:macawmindsmarketing@gmail.com"
                  className="flex items-start gap-4 p-5 sm:p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-colors"
                >
                  <div className="w-12 h-12 shrink-0 bg-green-600 rounded-lg grid place-items-center">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600 break-all">macawmindsmarketing@gmail.com</p>
                    <p className="text-sm text-green-600">Respuesta en 2 horas</p>
                  </div>
                </a>

                <a
                  href="tel:+541123881873"
                  className="flex items-start gap-4 p-5 sm:p-6 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors"
                >
                  <div className="w-12 h-12 shrink-0 bg-purple-600 rounded-lg grid place-items-center">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Teléfono</h4>
                    <p className="text-gray-600">+54 (11) 238-8173</p>
                    <p className="text-sm text-purple-600">Lun-Vie 9 a 18 hs</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 sm:p-7 md:p-8 text-white">
              <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">⚡ Consulta Express</h4>
              <p className="text-gray-300 mb-5 sm:mb-6">
                ¿Necesitas una respuesta rápida? Agenda una videollamada de 15 minutos
                y obtén una estrategia personalizada sin costo.
              </p>
              <a
                href={calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex justify-center items-center bg-white text-gray-900 px-5 sm:px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Agendar ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
