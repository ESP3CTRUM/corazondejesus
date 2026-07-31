'use client';

import { motion } from 'motion/react';
import { motionVariants } from '@/lib/motion';
import type { Sucursales as SucursalType } from '@/data/sucursales';

interface LocationCardProps {
  sucursal: SucursalType;
}

export default function LocationCard({ sucursal }: LocationCardProps) {
return (
<motion.div
initial="hidden"
whileInView="visible"
viewport={{ once: true, margin: "-50px" }}
variants={motionVariants.fadeInUp}
className="bg-surface rounded-lg border border-wood/15 p-6 shadow-warm"
>
<div className="flex items-start justify-between mb-4">
<h3 className="font-heading text-2xl font-semibold text-ink">
{sucursal.nombre}
</h3>
<span className="bg-sage text-white text-xs font-semibold px-3 py-1 rounded-full">
{sucursal.id === 'jarabacoa' ? 'Vista panorámica' : 'Sobre autopista'}
</span>
</div>  <div className="space-y-3 mb-6">
    <div>
      <p className="text-ink-secondary text-sm font-medium mb-1">Dirección</p>
      <p className="text-ink">{sucursal.direccion}</p>
    </div>

    <div>
      <p className="text-ink-secondary text-sm font-medium mb-1">Teléfono</p>
      <a
        href={`tel:${sucursal.telefono}`}
        className="text-accent hover:text-accent-hover font-semibold transition-colors"
      >
        {sucursal.telefono}
      </a>
    </div>

    <div>
      <p className="text-ink-secondary text-sm font-medium mb-2">Características</p>
      <ul className="space-y-1">
        {sucursal.caracteristicas.map((caracteristica: string, index: number) => (
          <li key={index} className="text-ink text-sm flex items-start">
            <span className="text-wood mr-2 mt-1">•</span>
            {caracteristica}
          </li>
        ))}
      </ul>
    </div>
  </div>

  <a
    href={`tel:${sucursal.telefono}`}
    className="block w-full bg-accent hover:bg-accent-hover text-white font-semibold text-center py-3 rounded-md transition-colors duration-300"
  >
    Llamar ahora
  </a>
</motion.div>);}