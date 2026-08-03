"use client";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { sucursales } from '@/data/sucursales';
import { motion } from 'motion/react';
import { useEffect, useState, type ReactNode } from 'react';

function InfoCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-wood/15 bg-white p-6 shadow-warm">
      <h3 className="text-(--text-on-white) text-sm font-semibold mb-3 uppercase tracking-wide">
        {title}
      </h3>
      <div className="text-(--wood)">{children}</div>
    </div>
  );
}

export default function Sucursal2Page() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const sucursal = sucursales.find((s: { id: string }) => s.id === 'bonao')!;

  useEffect(() => {
    if (!selectedImage) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

return (
<>
<Header />
<main className="min-h-screen bg-base">
{/* Hero Section */}
<section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img
src={sucursal.imagenes[0]}
alt={`Sucursal ${sucursal.nombre}`}
className="w-full h-full object-cover"
/>
{/*overlay*/}
<div className='absolute inset-0 z-10 bg-black opacity-40'>
</div>
</div>
<motion.div
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
className="relative z-10 text-center px-4"
>
<h1 className="font-heading text-5xl md:text-7xl font-semibold text-(--text-on-dark) mb-4">
{sucursal.nombre}
</h1>
<p className="text-xl text-white/90 max-w-2xl mx-auto">
{sucursal.caracteristicas[0]}
</p>
</motion.div>
</section>
  {/* Gallery */}
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-6xl font-semibold text-(--text-primary) text-center mb-12"
        >
          Galería
        </motion.h2>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {sucursal.imagenes.map((src: string, index: number) => (
            <motion.button
              key={`${src}-${index}`}
              type="button"
              onClick={() => setSelectedImage(src)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="photo-frame mb-6 block w-full cursor-pointer overflow-hidden break-inside-avoid"
            >
              <img
                src={src}
                alt={`${sucursal.nombre} - Imagen ${index + 1}`}
                className="w-full h-auto rounded-md object-contain"
                loading="lazy"
              />
            </motion.button>
          ))}
        </div>
      </div>
    </section>

    {selectedImage && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
        role="dialog"
        aria-modal="true"
        aria-label="Vista ampliada de la imagen"
        onClick={() => setSelectedImage(null)}
      >
        <div className="relative max-h-[90vh] max-w-[90vw]" onClick={(event) => event.stopPropagation()}>
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-xl text-white transition hover:bg-black/90"
            aria-label="Cerrar imagen"
          >
            X
          </button>
          <img
            src={selectedImage}
            alt="Vista ampliada de la sucursal"
            className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
          />
        </div>
      </div>
    )}
    {/* Mapa y Contacto */}
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
            <h2 className="font-heading text-4xl font-semibold text-(--text-primary) mb-6">
              Información
            </h2>

            <div className="columns-1 md:columns-2 gap-4 mb-8 space-y-4">
              <div className="break-inside-avoid">
                <InfoCard title="Teléfono">
                  <a
                    href={`tel:${sucursal.telefono}`}
                    className="text-accent hover:text-accent-hover text-lg font-semibold transition-colors"
                  >
                    {sucursal.telefono}
                  </a>
                </InfoCard>
              </div>

              <div className="break-inside-avoid">
                <InfoCard title="Horario">
                  <p className="text-lg leading-relaxed">
                    <span className="font-semibold">Lunes a Domingo</span><br />
                    9:00 a.m. - 10:00 p.m.
                  </p>
                </InfoCard>
              </div>
            </div>

            <a
              href={`tel:${sucursal.telefono}`}
              className="inline-block bg-accent hover:bg-accent-hover text-(--text-on-dark) font-semibold px-8 py-4 rounded-md transition-colors duration-300 shadow-warm"
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
            className="rounded-2xl border border-wood/15 bg-white p-4 shadow-warm"
          >
            <div className="mb-4">
              <h3 className="text-(--text-on-white) text-sm font-semibold uppercase tracking-wide">
                Ubicación
              </h3>
            </div>
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
  </main>
  <Footer />
</>
);
}