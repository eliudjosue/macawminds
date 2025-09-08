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
    <footer className="bg-gray-950 text-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 grid place-items-center shadow-lg shadow-blue-600/20">
                <span className="text-white font-bold">M</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">MacawMinds</span>
            </div>

            <p className="text-gray-400/90 mb-6 max-w-md leading-relaxed">
              Transformamos negocios a través de la tecnología. Creamos experiencias
              digitales que generan resultados reales y impulsan el crecimiento de
              nuestros clientes.
            </p>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="h-10 w-10 grid place-items-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wide text-white/90">
              Enlaces rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wide text-white/90">
              Servicios
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h4 className="font-semibold text-white/90 mb-2">Mantente actualizado</h4>
              <p className="text-gray-400">Recibe tips y estrategias digitales en tu inbox</p>
            </div>

            <div className="flex w-full max-w-md">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 min-w-0 px-4 py-3 rounded-l-xl bg-white/5 text-gray-100 placeholder:text-gray-500 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                className="px-6 py-3 rounded-r-xl bg-blue-600 hover:bg-blue-700 transition-colors font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MacawMinds. Todos los derechos reservados.</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
              Términos de Servicio
            </a>
            <a href="#" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
