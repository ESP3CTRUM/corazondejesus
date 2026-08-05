'use client';
import { motion } from 'motion/react';
import { motionVariants } from '@/lib/motion';

// 1. Importamos el valor 'sucursales' (sin la palabra 'type' porque es una constante)
import { sucursales } from '@/data/sucursales';

// 2. LA MAGIA: Le decimos a TypeScript que extraiga el tipo de UN elemento del arreglo
type TipoDeUnaSucursal = (typeof sucursales)[number];

interface LocationCardProps {
  // 3. Usamos ese tipo extraído
  sucursal: TipoDeUnaSucursal;
}

export default function LocationCard({ sucursal }: LocationCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={motionVariants.fadeInUp}
      className="bg-(--white) rounded-lg border border-wood/15 p-6 shadow-warm"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-heading text-2xl font-semibold text-(--accent)">
          {sucursal.nombre}
        </h3>
        <span className="bg-sage text-(--text-on-white) text-xs font-semibold px-3 py-1 rounded-full">
          {sucursal.id === 'jarabacoa' ? 'Vista panorámica' : 'Extensión de la familia'}
        </span>
      </div>  
      
      <div className="space-y-3 mb-6">
        <div>
          <p className="text-(--text-on-white) text-lg font-semibold mb-1">Teléfono</p>
          <a
            href={`tel:${sucursal.telefono}`}
            className="text-(--text-on-white) hover:text-accent-hover  transition-colors"
          >
            {sucursal.telefono}
          </a>
        </div>

        <div>
          <p className="text-(--text-on-white) text-lg font-semibold mb-2">Características</p>
          <ul className="space-y-1">
            {sucursal.caracteristicas.map((caracteristica: string, index: number) => (
              <li key={index} className="text-(--text-on-white) text-sm flex items-start">
                <span className="text-wood mr-2 inline-flex items-center">•</span>
                {caracteristica}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mb-6">
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
      </div>
      <a
        href={`tel:${sucursal.telefono}`}
        className="block w-full text-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-(--text-on-white) font-semibold px-8 py-4 rounded-md transition-all duration-300"
      >
        Llamar ahora
      </a>
    </motion.div>
  );
}