export type MenuItem = {
  name: string;
  description: string;
  price: number;
  category: string;
};

export const menu: MenuItem[] = [
  {
    name: "Pollo a la plancha",
    description: "Con arroz, ensalada y guarnición.",
    price: 450,
    category: "Platos fuertes",
  },
  {
    name: "Tacos de carne",
    description: "Servidos con salsa casera y vegetales.",
    price: 320,
    category: "Especialidades",
  },
  {
    name: "Ensalada tropical",
    description: "Con frutas frescas y aderezo ligero.",
    price: 280,
    category: "Entradas",
  },
];

export const featuredMenu = menu.slice(0, 3);
