import { featuredMenu } from "@/data/menu";

export function MenuPreview() {
  return (
    <section className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Menú</p>
          <h2 className="text-2xl font-semibold text-stone-900">Platos destacados</h2>
        </div>
        <a href="/menu" className="text-sm font-medium text-stone-700 hover:text-stone-950">
          Ver todo
        </a>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {featuredMenu.map((item) => (
          <article key={item.name} className="rounded-2xl bg-stone-50 p-5 ring-1 ring-stone-200">
            <p className="text-sm font-semibold text-amber-700">{item.category}</p>
            <h3 className="mt-2 text-lg font-semibold text-stone-900">{item.name}</h3>
            <p className="mt-2 text-sm text-stone-600">{item.description}</p>
            <p className="mt-4 text-base font-semibold text-stone-900">RD$ {item.price}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
