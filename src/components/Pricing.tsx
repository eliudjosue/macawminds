import { ArrowRight, Check } from 'lucide-react';

export default function Pricing() {
  const phone = "5491123878173"; // tu número de WhatsApp

  const services = [
    {
      name: 'Landing Page',
      usd: 'USD 150',
      ars: '$190.000',
      period: 'por proyecto',
      description:
        'Landing moderna, rápida y enfocada en conversión. Entrega en 24–48h con SEO básico y diseño responsive.',
      features: [
        '1 sección larga o 4–5 bloques',
        'Diseño mobile-first',
        'Optimización SEO básica',
        'Implementación de analytics',
      ],
      accent: 'from-blue-600 to-cyan-600',
    },
    {
      name: 'Agente de IA (Chatbot)',
      usd: 'USD 500',
      ars: '$650.000',
      period: 'setup único',
      description:
        'Chatbot entrenado con tu contenido para captar leads y responder 24/7. Integración en tu web.',
      features: [
        'Entrenamiento con FAQs / docs',
        'Widget web embebible',
        'Integracion con whatsapp o telegram',
        'Captura de leads',
        'Panel básico de consultas',
      ],
      accent: 'from-purple-600 to-pink-600',
    },
    {
      name: 'Gestión de Ads',
      usd: 'USD 200',
      ars: '$260.000',
      period: 'por mes',
      description:
        'Campañas en Google adds con optimizaciones semanales, reportes y foco en ROI.',
      features: [
        'Setup y estructura de campañas',
        'Campaña de busquedas (Search Ads)',
        'Camapaña de máximo rendimiento',
        'Reporte mensual',
        'Soporte por email',
      ],
      accent: 'from-emerald-600 to-green-600',
    },
  ];

  return (
    <section id="planes" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Precios por{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              servicio
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Elegí exactamente lo que necesitás. Mostramos precios en{' '}
            <span className="font-semibold">USD</span> y{' '}
            <span className="font-semibold">ARS</span> para tu conveniencia.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((svc) => {
            const message = encodeURIComponent(
              `Hola, estoy interesado en el servicio de ${svc.name}. ¿Podrían darme más información?`
            );
            const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

            return (
              <div
                key={svc.name}
                className="relative bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-8">
                  {/* Title */}
                  <div
                    className={`inline-flex items-center justify-center rounded-full px-4 py-1.5 text-sm font-semibold text-white bg-gradient-to-r ${svc.accent} mb-5`}
                  >
                    {svc.name}
                  </div>

                  <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                    {svc.description}
                  </p>

                  {/* Prices */}
                  <div className="mb-6 space-y-3">
                    <div className="flex items-baseline gap-2">
                      <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/10">
                        USD
                      </span>
                      <span className="text-3xl font-bold text-gray-900">{svc.usd}</span>
                      <span className="text-gray-500 text-sm">/ {svc.period}</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-800 ring-1 ring-inset ring-gray-300">
                        ARS
                      </span>
                      <span className="text-3xl font-bold text-gray-900">{svc.ars}</span>
                      <span className="text-gray-500 text-sm">/ {svc.period}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                          <Check size={14} className="text-green-600" />
                        </div>
                        <span className="text-gray-700 text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
    w-full sm:w-auto
    px-6 sm:px-8
    py-3 sm:py-4
    rounded-lg sm:rounded-xl
    font-semibold
    text-base sm:text-lg
    transition-all duration-300
    flex items-center justify-center
    gap-2
    bg-gradient-to-r from-blue-600 to-purple-600
    text-white
    shadow-md hover:shadow-xl
    hover:from-blue-700 hover:to-purple-700
    focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
  "
                  >
                    Solicitar {svc.name}
                    <ArrowRight
                      size={20}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>


                  {/* Note */}
                  <p className="mt-4 text-xs text-gray-500">
                    * Precios de referencia. Impuestos no incluidos. Para ARS se
                    utiliza tipo de cambio de referencia del día al contratar.
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom block */}
        <div className="text-center mt-16" id='specific'>
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              ¿Necesitás algo a medida?
            </h3>
            <p className="text-gray-700 mb-6">
              Integramos todo (web, chatbot, campañas, reportes) en una solución
              a tu medida. Contanos tu caso y armamos un presupuesto claro.
            </p>
            <a
              href={`https://wa.me/${phone}?text=${encodeURIComponent(
                'Hola, estoy interesado en una solución personalizada. ¿Podemos hablar?'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
            >
              Hablar con un especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
