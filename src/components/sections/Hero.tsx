'use client';

import { motion } from 'motion/react';
import { motionVariants } from '@/lib/motion';
import Link from 'next/link';
export default function Hero() {
return (
<section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
{/* Background Image */}
<div className="absolute inset-0 z-0">
<img
src="/images/jarabacoa/vista-montaña-balcón-restaurant.webp"
alt="Vista del restaurante"
className="w-full h-full object-cover"
/>
<div className="absolute inset-0 bg-dark/60" />
</div>
  {/* Content */}
  <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <motion.div
      initial="hidden"
      animate="visible"
      variants={motionVariants.staggerContainer}
    >
      <motion.h1
        variants={motionVariants.fadeInUp}
        className="font-heading text-5xl md:text-7xl font-semibold text-(--text-on-dark)"
      >
        Parador Corazón de Jesús
      </motion.h1>

      <motion.p
        variants={motionVariants.fadeInUp}
        className="text-xl md:text-2xl text-(--text-on-dark)/90 mb-8 font-body"
      >
        Comida criolla y Carnes a la leña. Tradición familiar en el corazón del Cibao.
      </motion.p>

      <motion.div
        variants={motionVariants.fadeInUp}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Link
          href="/menu"
          className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-(--text-on-white) font-semibold px-8 py-4 rounded-md transition-all duration-300"
        >
          Ver Menú
        </Link>
      </motion.div>
    </motion.div>
  </div>
</section>);}