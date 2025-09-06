import React from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-6">
            <div className="animate-fadeInUp">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
                <Sparkles size={16} className="mr-2" />
                Resultados garantizados en 24 horas
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Impulsa tu{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  negocio digital
                </span>{' '}
                en 24 horas
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transformamos tu visión en realidad con landing pages de alta conversión, 
                agentes de IA inteligentes y campañas publicitarias que generan resultados medibles.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="group bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center">
                  Agendar una demo
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 transition-colors flex items-center justify-center">
                  <Play size={20} className="mr-2" />
                  Ver servicios
                </button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center">
                  <div className="flex -space-x-2 mr-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-green-100 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-purple-100 border-2 border-white"></div>
                  </div>
                  +200 clientes satisfechos
                </div>
                <div>⭐ 4.9/5 valoración</div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-6 mt-12 lg:mt-0">
            <div className="relative animate-fadeInRight">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white">
                  <h3 className="text-lg font-semibold mb-2">Dashboard Analytics</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Conversiones</span>
                      <span className="font-bold">+347%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Tráfico</span>
                      <span className="font-bold">+892%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>ROI</span>
                      <span className="font-bold">+1,240%</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Landing Page optimizada</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">IA Chatbot activo</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Ads campaigns running</span>
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