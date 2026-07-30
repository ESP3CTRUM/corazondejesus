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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-ink mb-4">
            Nuestras Sucursales
          </h2>
          <p className="text-ink-secondary text-lg">
            Dos ubicaciones estratégicas para tu conveniencia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sucursales.map((sucursal) => (
            <LocationCard key={sucursal.id} sucursal={sucursal} />
          ))}
        </div>
      </div>
    </section>
  </main>
  <Footer />
</>);}