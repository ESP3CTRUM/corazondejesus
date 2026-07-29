export function AboutPreview() {
  return (
    <section className="grid gap-6 rounded-3xl bg-stone-900 p-8 text-stone-100 shadow-sm lg:grid-cols-[1fr_0.8fr] lg:p-10">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">Nosotros</p>
        <h2 className="mt-3 text-2xl font-semibold">Una tradición hecha para compartir</h2>
        <p className="mt-4 max-w-xl text-base text-stone-300">
          Cada plato nace con el deseo de ofrecer un espacio cercano, con sabor auténtico y atención cuidada.
        </p>
      </div>
      <div className="rounded-2xl border border-stone-700 bg-stone-800 p-6">
        <p className="text-sm text-stone-300">Próximamente</p>
        <p className="mt-2 text-xl font-semibold">Historia, valores y detalles del restaurante</p>
      </div>
    </section>
  );
}
