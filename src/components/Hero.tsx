import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  const calendarUrl = 'https://calendar.macawminds.com'; // poné acá tu URL exacta

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          {/* Text content */}
          <div className="lg:col-span-6">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                Impulsa tu{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                  negocio digital
                </span>{' '}
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Transformamos tu visión en realidad con landing pages de alta conversión,
                agentes de IA inteligentes y campañas publicitarias que generan resultados medibles.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                {/* Agendar demo -> Calendar */}
                <a
                  href={calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  Agendar una demo
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Ver servicios -> #servicios */}
                <a
                  href="#servicios"
                  className="group border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 dark:hover:border-gray-500 transition-colors flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <Play size={20} className="mr-2" />
                  Ver servicios
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex -space-x-2 mr-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 border-2 border-white dark:border-gray-950"></div>
                  <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 border-2 border-white dark:border-gray-950"></div>
                  <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 border-2 border-white dark:border-gray-950"></div>
                </div>
                <div className="flex items-center gap-2">
                  🔒 <span>Sin contratos largos</span>
                </div>
                <div className="flex items-center gap-2">
                  💡 <span>Atención personalizada</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image/visual content */}
          <div className="lg:col-span-6 mt-12 lg:mt-0">
            <div className="relative">
              <div className="relative z-10 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 ring-1 ring-black/5 dark:ring-white/10">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
                  <h3 className="text-lg font-semibold mb-2">Dashboard Analytics</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm sm:text-base">
                      <span>Conversiones</span>
                      <span className="font-bold">+347%</span>
                    </div>
                    <div className="flex justify-between items-center text-sm sm:text-base">
                      <span>Tráfico</span>
                      <span className="font-bold">+892%</span>
                    </div>
                    <div className="flex justify-between items-center text-sm sm:text-base">
                      <span>ROI</span>
                      <span className="font-bold">+1,240%</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Landing Page optimizada</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">IA Chatbot activo</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Ads campaigns running</span>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
