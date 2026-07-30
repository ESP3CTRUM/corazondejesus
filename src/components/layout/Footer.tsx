import { motion } from 'motion/react';
import { motionVariants } from '@/lib/motion';

export default function Footer() {
return (
<motion.footer
initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}variants={motionVariants.fadeIn}className="bg-dark text-text-on-dark py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/* Marca */}
<div>
<h3 className="font-heading text-2xl font-semibold mb-4">
Parador Corazón de Jesús
</h3>
<p className="text-text-on-dark/80">
Comida criolla dominicana y barbacoa a la leña. Tradición familiar en la región del Cibao.
</p>
</div>
      {/* Horario */}
      <div>
        <h4 className="font-heading text-xl font-semibold mb-4">
          Horario
        </h4>
        <p className="text-text-on-dark/80">
          Lunes a Domingo<br />
          9:00 a.m. - 10:00 p.m.
        </p>
      </div>

      {/* Contacto */}
      <div>
        <h4 className="font-heading text-xl font-semibold mb-4">
          Contacto
        </h4>
        <div className="space-y-2 text-text-on-dark/80">
          <p>Jarabacoa: +1 809-865-4811</p>
          <p>Bonao: +1 809-865-2711</p>
        </div>
      </div>
    </div>

    <div className="mt-12 pt-8 border-t border-wood/30 text-center text-text-on-dark/60">
      <p>&copy; {new Date().getFullYear()} Parador Corazón de Jesús. Todos los derechos reservados.</p>
    </div>
  </div>
</motion.footer>);}