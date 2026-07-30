"use client";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { menu } from '@/data/menu';
import { motion } from 'motion/react';

export default function MenuPage() {
return (
<>
<Header />
<main className="min-h-screen bg-base py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<motion.div
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
className="text-center mb-12"
>
<h1 className="font-heading text-5xl md:text-6xl font-semibold text-[var(--text-primary)] mb-4">
Nuestro Menú
</h1>
<p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
Especialidades preparadas a la leña con las recetas tradicionales de la casa
</p>
</motion.div>
      <div className="space-y-12">
        {menu.map((categoria, categoriaIndex) => (
          <motion.section
            key={categoriaIndex}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: categoriaIndex * 0.1 }}
          >
            <h2 className="font-heading text-3xl font-semibold text-ink mb-6 pb-3 border-b-2 border-wood/20">
              {categoria.nombre}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categoria.items.map((item, itemIndex) => (
                <motion.div
                  key={itemIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: itemIndex * 0.05 }}
                  className="bg-white rounded-lg p-6 shadow-warm border border-wood/10"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-heading text-xl font-semibold text-ink flex-1">
                      {item.nombre}
                    </h3>
                    {item.destacado && (
                      <span className="bg-accent text-white text-xs font-semibold px-2 py-1 rounded ml-2">
                        Especialidad
                      </span>
                    )}
                  </div>
                  <span className="inline-block bg-wood/10 text-wood text-xs font-semibold px-2 py-1 rounded mb-3">
                    {item.categoria}
                  </span>
                  {item.descripcion && (
                    <p className="text-ink-secondary text-sm leading-relaxed">
                      {item.descripcion}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>

      {/* Nota sobre recetas */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16 bg-surface rounded-lg p-8 text-center border border-wood/15"
      >
        <h3 className="font-heading text-2xl font-semibold text-[var(--text-primary)] mb-3">
          Nuestras recetas son tradición
        </h3>
        <p className="text-[var(--text-secondary)]">
          Las recetas de la casa no se modifican. Cada plato se prepara con el método tradicional 
          que nos ha distinguido por años, manteniendo la autenticidad del sabor criollo dominicano.
        </p>
      </motion.div>
    </div>
  </main>
  <Footer />
</>);}