import React from "react";

const TermsPage: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Términos y{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-indigo-400 dark:to-fuchsia-400">
              Condiciones de Uso
            </span>
          </h1>

          <p className="mt-3">
            <span className="inline-flex items-center rounded-full bg-blue-600/10 text-blue-700 dark:text-blue-300 px-3 py-1 text-sm font-medium">
              Vigentes desde: <span className="ml-2 font-semibold">25/11/2024</span>
            </span>
          </p>
        </header>

        {/* Body */}
        <article className="prose prose-gray max-w-none dark:prose-invert">
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm ring-1 ring-black/5 dark:ring-white/10 p-6 sm:p-8">
            {/* 1 */}
            <section id="introduccion" className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. Introducción</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Bienvenido a MacawMinds, un sitio web que ofrece servicios de marketing digital y software como servicio (SaaS)
                especializado en soluciones para PYMEs. Estos términos y condiciones (“Términos”) rigen el uso de nuestro sitio web
                y los servicios ofrecidos. Al acceder o utilizar nuestro sitio, aceptás estar sujeto a estos Términos.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Si tenés alguna consulta, podés contactarnos en:
              </p>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                <li>Correo: <a href="mailto:contact@MacawMinds.com" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline-offset-2 hover:underline">contact@MacawMinds.com</a></li>
                <li>Teléfono: <a href="tel:+541123878173" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline-offset-2 hover:underline">+54 11 2387-8173</a></li>
              </ul>
            </section>

            {/* 2 */}
            <section id="servicios" className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">2. Servicios Ofrecidos</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-3">Ofrecemos:</p>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li>
                  <strong>Marketing Digital:</strong> Gestión de campañas (por ejemplo, Google Ads) incluyendo búsqueda, display y remarketing.
                </li>
                <li>
                  <strong>SaaS para PYMEs:</strong> Plataforma para crear y gestionar landing pages, análisis de datos y automatización de marketing.
                </li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">
                Nos reservamos el derecho de modificar, actualizar o discontinuar los servicios en cualquier momento sin previo aviso.
              </p>
            </section>

            {/* 3 */}
            <section id="condiciones-uso" className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3. Condiciones de Uso</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-3">Para utilizar nuestros servicios:</p>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                <li>Debés ser mayor de edad (18 años en Argentina).</li>
                <li>No debés utilizar nuestros servicios para actividades ilegales, difamatorias o que violen derechos de terceros.</li>
              </ul>
            </section>

            {/* 4 */}
            <section id="responsabilidades" className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4. Responsabilidades del Cliente</h2>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                <li>Proporcionar información veraz y actualizada.</li>
                <li>Garantizar el pago puntual de los servicios contratados.</li>
                <li>Cumplir con todas las normativas locales aplicables a su actividad comercial.</li>
              </ul>
            </section>

            {/* 5 */}
            <section id="pagos" className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">5. Pagos y Tarifas</h2>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Los precios se detallan en la sección correspondiente de nuestro sitio web y pueden variar según el servicio contratado.</li>
                <li>Los pagos deben realizarse mediante los métodos indicados (tarjeta de crédito, transferencia bancaria, etc.).</li>
                <li>No se realizan reembolsos, salvo en circunstancias excepcionales que serán evaluadas caso por caso.</li>
              </ul>
            </section>

            {/* 6 */}
            <section id="propiedad-intelectual" className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">6. Propiedad Intelectual</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Todo el contenido de MacawMinds, incluyendo texto, gráficos, logos y software, es propiedad de MacawMinds o de sus licenciantes.
                No se permite su reproducción, distribución o uso sin autorización previa.
              </p>
            </section>

            {/* 7 */}
            <section id="datos" className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">7. Protección de Datos</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Cumplimos con la Ley 25.326 de Protección de Datos Personales de Argentina. Los datos recopilados serán utilizados exclusivamente
                para la prestación de servicios. Consultá nuestra{' '}
                <a href="/privacy" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline-offset-2 hover:underline">
                  Política de Privacidad
                </a>{' '}
                para más detalles.
              </p>
            </section>

            {/* 8 */}
            <section id="limitacion" className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">8. Limitación de Responsabilidad</h2>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
                <li>
                  MacawMinds no se responsabiliza por resultados obtenidos a través de campañas publicitarias, los cuales dependen de múltiples factores externos.
                </li>
                <li>Interrupciones temporales del servicio SaaS debido a mantenimiento o problemas técnicos.</li>
              </ul>
            </section>

            {/* 9 */}
            <section id="modificaciones" className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">9. Modificaciones a los Términos</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Nos reservamos el derecho de modificar estos Términos en cualquier momento. Los cambios entrarán en vigor inmediatamente
                después de su publicación en el sitio web.
              </p>
            </section>

            {/* 10 */}
            <section id="jurisdiccion" className="mb-2">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">10. Jurisdicción y Ley Aplicable</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Estos Términos se rigen por las leyes de la República Argentina. Cualquier disputa relacionada con los servicios será resuelta
                por los tribunales competentes de [ciudad/provincia donde operás].
              </p>
            </section>

            <hr className="my-6 border-gray-200 dark:border-white/10" />

            <p className="text-gray-700 dark:text-gray-300">
              Si tenés preguntas sobre estos Términos, contactanos en{' '}
              <a href="macawmindsmarketing@gmail.com" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline-offset-2 hover:underline">
                macawmindsmarketing@gmail.com
              </a>.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default TermsPage;
