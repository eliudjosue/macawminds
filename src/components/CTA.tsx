import { ArrowRight, Zap } from 'lucide-react';

export default function CTA() {
  const phone = "5491123878173"; // tu número en formato internacional
  const message = encodeURIComponent(
    "Hola, quiero más información para comenzar con mi negocio digital 🚀"
  );
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 overflow-hidden relative" id='cta'>
      {/* Decorativos sutiles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-24 h-24 bg-blue-300/20 dark:bg-blue-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-indigo-200/20 dark:bg-indigo-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600/10 text-blue-700 dark:text-blue-300 text-sm font-medium mb-8">
          <Zap size={16} className="mr-2" />
          Oferta limitada - Solo este mes
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          Tu negocio puede estar{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-indigo-400 dark:to-fuchsia-400">
            en línea mañana mismo
          </span>
        </h2>

        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          No esperes más para digitalizar tu negocio. En 24 horas tendrás
          una presencia digital que genera resultados reales.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-blue-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all duration-300 flex items-center shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Comenzar ahora
            <ArrowRight
              size={24}
              className="ml-3 group-hover:translate-x-1 transition-transform"
            />
          </a>

          <div className="text-gray-700 dark:text-gray-300 text-sm space-y-1 text-left sm:text-center">
            <div className="font-semibold">✅ Sin compromisos iniciales</div>
            <div>✅ Garantía de satisfacción 100%</div>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-12 text-gray-700 dark:text-gray-300">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3">
              ✓
            </div>
            Setup en 24 horas
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3">
              ✓
            </div>
            Soporte personalizado
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3">
              ✓
            </div>
            Resultados garantizados
          </div>
        </div>
      </div>
    </section>
  );
}
