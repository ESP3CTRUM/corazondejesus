'use client';

import { motion } from 'motion/react';
import { motionVariants } from '@/lib/motion';
import Link from 'next/link';
export default function AboutPreview() {
return (
<section className="py-16 bg-base">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
{/* Image */}
<motion.div
initial="hidden"
whileInView="visible"
viewport={{ once: true, margin: "-100px" }}
variants={motionVariants.fadeInLeft}
className="photo-frame"
>
<img
src="/images/jarabacoa/Chef-en-parrillada.webp"
alt="Chef preparando carne a la leña"
className="w-full h-auto rounded-md"
/>
</motion.div>
      {/* Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={motionVariants.fadeInRight}
      >
        <h2 className="font-heading text-4xl md:text-5xl font-semibold text-ink mb-6">
          Tradición familiar desde el corazón del Cibao
        </h2>
        <p className="text-ink-secondary text-lg mb-6 leading-relaxed">
          Somos un restaurante familiar icónico en la región del Cibao, famoso por nuestras costillas preparadas a la leña. 
          Cada plato es cocinado con el método tradicional que nos ha distinguido por años, usando leña natural para lograr 
          ese sabor ahumado único que nuestros clientes aman.
        </p>
        <p className="text-ink-secondary text-lg mb-8 leading-relaxed">
          Con dos sucursales estratégicas en Jarabacoa y Bonao, somos la parada perfecta para quienes buscan 
          buena comida criolla dominicana en un ambiente campestre y acogedor.
        </p>
        <Link
          href="/nosotros"
          className="inline-block border-2 border-wood text-ink hover:bg-wood hover:text-white font-semibold px-8 py-3 rounded-md transition-all duration-300"
        >
          Conoce nuestra historia
        </Link>
      </motion.div>
    </div>
  </div>
</section>);}