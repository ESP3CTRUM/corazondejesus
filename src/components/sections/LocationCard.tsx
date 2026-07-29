import { sucursales } from "@/data/sucursales";

export function LocationCard() {
  const sucursal = sucursales[0];

  return (
    <section className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Sucursal</p>
          <h2 className="text-2xl font-semibold text-stone-900">{sucursal.nombre}</h2>
          <p className="mt-2 text-stone-600">{sucursal.direccion}</p>
        </div>
        <div className="rounded-2xl bg-stone-100 px-5 py-4 text-sm text-stone-700">
          <p className="font-semibold text-stone-900">Horario</p>
          <p>{sucursal.horario}</p>
        </div>
      </div>
    </section>
  );
}
