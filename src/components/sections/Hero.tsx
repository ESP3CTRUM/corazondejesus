export function Hero() {
  return (
    <section className="grid gap-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-stone-200 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Bienvenido</p>
        <h1 className="text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
          Deliciosa comida y un ambiente que te invita a volver.
        </h1>
        <p className="max-w-xl text-lg text-stone-600">
          Explora nuestro menú, conoce nuestra historia y descubre la sucursal más cercana.
        </p>
      </div>
      <div className="rounded-2xl bg-stone-100 p-6">
        <p className="text-sm font-medium text-stone-700">Próximamente</p>
        <p className="mt-2 text-2xl font-semibold text-stone-900">Galería de platos y ubicaciones</p>
      </div>
    </section>
  );
}
