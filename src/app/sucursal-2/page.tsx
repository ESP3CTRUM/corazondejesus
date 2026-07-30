"use client";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { sucursales } from '@/data/sucursales';
import { motion } from 'motion/react';

export default function Sucursal2Page() {
const sucursal = sucursales.find((s: { id: string }) => s.id === 'bonao')!;
return (
<>
<Header />
<main className="min-h-screen bg-base">
{/* Hero Section */}
<section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img
src={sucursal.imagenes[0]}
alt={`Sucursal ${sucursal.nombre}`}
className="w-full h-full object-cover"
/>
<div className="absolute inset-0 bg-dark/60" />
</div>
<motion.div
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
className="relative z-10 text-center px-4"
>
<h1 className="font-heading text-5xl md:text-7xl font-semibold text-white mb-4">
Sucursal {sucursal.nombre}
</h1>
<p className="text-xl text-white/90 max-w-2xl mx-auto">
{sucursal.caracteristicas[0]}
</p>
</motion.div>
</section>
    {/* Content */}
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl font-semibold text-ink mb-6">
              Información de la sucursal
            </h2>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-ink-secondary text-sm font-semibold mb-2 uppercase tracking-wide">
                  Dirección
                </h3>
                <p className="text-ink text-lg">{sucursal.direccion}</p>
              </div>

              <div>
                <h3 className="text-ink-secondary text-sm font-semibold mb-2 uppercase tracking-wide">
                  Teléfono
                </h3>
                <a
                  href={`tel:${sucursal.telefono}`}
                  className="text-accent hover:text-accent-hover text-2xl font-semibold transition-colors"
                >
                  {sucursal.telefono}
                </a>
              </div>

              <div>
                <h3 className="text-ink-secondary text-sm font-semibold mb-2 uppercase tracking-wide">
                  Horario
                </h3>
                <p className="text-ink text-lg">
                  Lunes a Domingo<br />
                  9:00 a.m. - 10:00 p.m.
                </p>
              </div>

              <div>
                <h3 className="text-ink-secondary text-sm font-semibold mb-3 uppercase tracking-wide">
                  Características
                </h3>
                <ul className="space-y-2">
                  {sucursal.caracteristicas.map((caracteristica: string, index: number) => (
                    <li key={index} className="text-ink flex items-start">
                      <span className="text-wood mr-3 mt-1 text-xl">•</span>
                      <span>{caracteristica}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href={`tel:${sucursal.telefono}`}
              className="inline-block bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-md transition-colors duration-300 shadow-warm"
            >
              Llamar ahora
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg p-4 shadow-warm border border-wood/10"
          >
            <iframe
              src={sucursal.mapaUrl}
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Mapa de ${sucursal.nombre}`}
            />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Gallery */}
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-4xl font-semibold text-ink text-center mb-12"
        >
          Conoce nuestra sucursal
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sucursal.imagenes.map((src: string, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="photo-frame"
            >
              <img
                src={src}
                alt={`${sucursal.nombre} - Imagen ${index + 1}`}
                className="w-full h-64 object-cover rounded-md"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </main>
  <Footer />
</>
);
}