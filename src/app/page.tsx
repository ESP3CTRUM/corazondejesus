import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import MenuPreview from '@/components/sections/MenuPreview';
import AboutPreview from '@/components/sections/AboutPreview';
import LocationCard from '@/components/sections/LocationCard';
import { sucursales } from '@/data/sucursales';

export default function Home() {
return (
<>
<Header />
<main>
<Hero />
<MenuPreview />
<AboutPreview />
    {/* Sección de Sucursales */}
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-4 border-(--accent)">
        <p>Añadir el iframe de maps a las cards</p>
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-(--text-primary)">
            Nuestras Sucursales
          </h2>
          <p className="text-ink-secondary text-lg">
            Nuestras ubicaciones están estratégicamente situadas para ofrecerte la mejor experiencia culinaria. <br /> Ven y disfruta de nuestros platos en cualquiera de nuestras sucursales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 rounded-lg">
          {sucursales.map((sucursal) => (
            <LocationCard key={sucursal.id} sucursal={sucursal} />
          ))}
        </div>
      </div>
    </section>
  </main>
  <Footer />
</>);}