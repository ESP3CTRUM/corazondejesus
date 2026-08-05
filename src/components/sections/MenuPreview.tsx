'use client';
import { motion } from 'motion/react';
import { motionVariants } from '@/lib/motion';
import { menu } from '@/data/menu';
import Link from 'next/link';
export default function MenuPreview() {
const platosDestacados = menu.flatMap(categoria =>
categoria.items.filter(item => item.destacado)
).slice(0, 3);
return (
<section className="py-16 bg-surface">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<motion.div
initial="hidden"
whileInView="visible"
viewport={{ once: true, margin: "-60px" }}
variants={motionVariants.staggerContainer}
className="text-center mb-12"
>
<motion.h2
variants={motionVariants.fadeInUp}
className="font-heading text-4xl md:text-5xl font-semibold text-(--text-primary)">
Especialidades
</motion.h2>
<motion.p
variants={motionVariants.fadeInUp}
className="text-(--text-on-dark) text-lg max-w-2xl mx-auto"
>
Preparadas a la leña con las recetas tradicionales de la casa
</motion.p>
</motion.div>
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={motionVariants.staggerContainer}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
    >
      {platosDestacados.map((plato, index) => (
        <motion.div
          key={index}
          variants={motionVariants.staggerItem}
          className="bg-white rounded-lg p-6 shadow-warm border border-wood/10"
        >
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-heading text-xl font-semibold text-(--text-on-white)">
              {plato.nombre}
            </h3>
            <span className="bg-wood/10 text-(--text-on-white) text-xs font-semibold px-2 py-1 rounded">
              {plato.categoria}
            </span>
          </div>
          {plato.descripcion && (
            <p className="text-(--text-on-white) text-sm">
              {plato.descripcion}
            </p>
          )}
        </motion.div>
      ))}
    </motion.div>

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={motionVariants.fadeInUp}
      className="text-center"
    >
      <Link
        href="/menu"
        className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-(--text-on-white) font-semibold px-8 py-4 rounded-md transition-all duration-300"
      >
        Ver menú completo
      </Link>
    </motion.div>
  </div>
</section>);}