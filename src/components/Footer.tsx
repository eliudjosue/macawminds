import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'Casos de éxito', href: '#casos' },
    { name: 'Planes', href: '#planes' },
    { name: 'Contacto', href: '#contacto' }
  ];

  const services = [
    { name: 'Landing Pages', href: '#' },
    { name: 'Agentes de IA', href: '#' },
    { name: 'Gestión de Ads', href: '#' },
    { name: 'Consultoría Digital', href: '#' },
    { name: 'Desarrollo Web', href: '#' }
  ];

  const socialLinks = [
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Instagram, href: '#', label: 'Instagram' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
    { Icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">M</span>
              </div>
              <span className="text-2xl font-bold">MacawMinds</span>
            </div>
            
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Transformamos negocios a través de la tecnología. Creamos experiencias 
              digitales que generan resultados reales y impulsan el crecimiento de 
              nuestros clientes.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">Enlaces rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6">Servicios</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-6 lg:mb-0">
              <h4 className="font-semibold mb-2">Mantente actualizado</h4>
              <p className="text-gray-400">Recibe tips y estrategias digitales en tu inbox</p>
            </div>
            
            <div className="flex w-full max-w-md">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-500"
              />
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-r-lg transition-colors">
                Suscribirse
              </button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MacawMinds. Todos los derechos reservados.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}