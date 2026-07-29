import Link from "next/link";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Menú", href: "/menu" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Sucursal 2", href: "/sucursal-2" },
];

export function Header() {
  return (
    <header className="border-b border-stone-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold tracking-wide text-stone-900">
          Corazón de Jesús
        </Link>
        <nav className="flex gap-4 text-sm text-stone-700">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-stone-950">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
