import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white opacity-10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-white opacity-5 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 text-white text-sm font-medium mb-8 backdrop-blur-sm">
          <Zap size={16} className="mr-2" />
          Oferta limitada - Solo este mes
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Tu negocio puede estar{' '}
          <span className="text-yellow-300">en línea mañana mismo</span>
        </h2>
        
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          No esperes más para digitalizar tu negocio. En 24 horas tendrás 
          una presencia digital que genera resultados reales.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all duration-300 flex items-center shadow-2xl">
            Comenzar ahora
            <ArrowRight size={24} className="ml-3 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="text-white/80 text-sm">
            <div className="font-semibold">✅ Sin compromisos iniciales</div>
            <div>✅ Garantía de satisfacción 100%</div>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-12 text-white/80">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
              ✓
            </div>
            Setup en 24 horas
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
              ✓
            </div>
            Soporte personalizado
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
              ✓
            </div>
            Resultados garantizados
          </div>
        </div>
      </div>
    </section>
  );
}