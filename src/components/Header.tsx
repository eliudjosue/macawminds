import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-xl font-bold text-gray-900">MacawMinds</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#servicios" className="text-gray-700 hover:text-blue-600 transition-colors">Servicios</a>
            <a href="#proceso" className="text-gray-700 hover:text-blue-600 transition-colors">Proceso</a>
            <a href="#casos" className="text-gray-700 hover:text-blue-600 transition-colors">Casos</a>
            <a href="#planes" className="text-gray-700 hover:text-blue-600 transition-colors">Planes</a>
            <a href="#contacto" className="text-gray-700 hover:text-blue-600 transition-colors">Contacto</a>
          </nav>

          <div className="hidden md:flex space-x-4">
            <button className="text-blue-600 hover:text-blue-700 transition-colors">
              Iniciar Sesión
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Agendar Demo
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a href="#servicios" className="text-gray-700">Servicios</a>
              <a href="#proceso" className="text-gray-700">Proceso</a>
              <a href="#casos" className="text-gray-700">Casos</a>
              <a href="#planes" className="text-gray-700">Planes</a>
              <a href="#contacto" className="text-gray-700">Contacto</a>
              <div className="pt-4 border-t border-gray-100">
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
                  Agendar Demo
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}