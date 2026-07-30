import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion } from 'motion/react';

export default function NosotrosPage() {
return (
<>
<Header />
<main className="min-h-screen bg-base">
{/* Hero Section */}
<section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img
src="/images/jarabacoa/restaurante-lleno-2.webp"
alt="Interior del restaurante"
className="w-full h-full object-cover"
/>
<div className="absolute inset-0 bg-dark/70" />
</div>
<motion.div
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
className="relative z-10 text-center px-4"
>
<h1 className="font-heading text-5xl md:text-7xl font-semibold text-white mb-4">
Nuestra Historia
</h1>
<p className="text-xl text-white/90 max-w-2xl mx-auto">
Tradición, sabor y familia en el corazón del Cibao
</p>
</motion.div>
</section>
    {/* Content */}
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="prose prose-lg max-w-none"
        >
          <h2 className="font-heading text-4xl font-semibold text-ink mb-6">
            El alto rústico en carretera
          </h2>
          
          <p className="text-ink-secondary text-lg leading-relaxed mb-6">
            El Parador Corazón de Jesús nació como un lugar donde las familias pueden detenerse en su camino 
            por la carretera y disfrutar de una comida auténtica, preparada con el método tradicional de la leña. 
            No somos un restaurante de ciudad ni una cadena corporativa: somos un parador campestre donde el fuego, 
            la madera y el sabor criollo son los protagonistas.
          </p>

          <p className="text-ink-secondary text-lg leading-relaxed mb-6">
            Nuestra especialidad son las costillas de cerdo preparadas a la leña, cocinadas lentamente sobre brasas 
            naturales para lograr ese sabor ahumado distintivo que nos ha hecho famosos en toda la región del Cibao. 
            Cada pieza de carne, cada acompañamiento, cada bebida refleja nuestra dedicación a la tradición y la calidad.
          </p>

          <h3 className="font-heading text-3xl font-semibold text-ink mb-4 mt-12">
            Dos sucursales, un mismo alma
          </h3>

          <p className="text-ink-secondary text-lg leading-relaxed mb-6">
            Hoy contamos con dos establecimientos estratégicos, cada uno con su propio carácter pero compartiendo 
            la misma esencia:
          </p>

          <div className="bg-surface rounded-lg p-6 mb-6 border border-wood/15">
            <h4 className="font-heading text-2xl font-semibold text-ink mb-3">
              Jarabacoa - Vista panorámica
            </h4>
            <p className="text-ink-secondary leading-relaxed">
              Nuestra sucursal principal en las montañas de Jarabacoa ofrece un ambiente fresco y contemplativo, 
              con decoración rústica campestre adornada con flores. El lugar perfecto para disfrutar de una comida 
              mientras contemplas las vistas panorámicas de la región.
            </p>
          </div>

          <div className="bg-surface rounded-lg p-6 mb-6 border border-wood/15">
            <h4 className="font-heading text-2xl font-semibold text-ink mb-3">
              Bonao - Parada estratégica
            </h4>
            <p className="text-ink-secondary leading-relaxed">
              Ubicada sobre la Autopista Juan Pablo Duarte, nuestra sucursal de Bonao es la parada ideal para 
              viajeros que transitan entre Santo Domingo y la región norte. Un lugar donde el camino se detiene 
              para disfrutar del buen comer.
            </p>
          </div>

          <h3 className="font-heading text-3xl font-semibold text-ink mb-4 mt-12">
            Tradición que no se modifica
          </h3>

          <p className="text-ink-secondary text-lg leading-relaxed mb-6">
            En el Parador Corazón de Jesús, las recetas de la casa no se modifican. Esta es nuestra fortaleza: 
            la autenticidad. No seguimos modas ni fusiones experimentales. Cada plato se prepara como siempre 
            se ha hecho, con los mismos métodos tradicionales que han satisfecho a generaciones de familias dominicanas.
          </p>

          <p className="text-ink-secondary text-lg leading-relaxed">
            Te invitamos a ser parte de esta tradición. Ya sea que vengas desde lejos o pases por nuestro camino, 
            en el Parador Corazón de Jesús siempre habrá un lugar para ti alrededor de la mesa.
          </p>
        </motion.div>
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
          Nuestro ambiente
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            "/images/jarabacoa/vista-balcón-2.webp",
            "/images/jarabacoa/restaurante-lleno-3.webp",
            "/images/Bonao/foto-mesas-vacías.webp"
          ].map((src, index) => (
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
                alt={`Ambiente del restaurante ${index + 1}`}
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