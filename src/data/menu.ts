export interface MenuItem {
nombre: string;
descripcion?: string;
categoria: string;
destacado?: boolean;
}

export interface MenuCategoria {
nombre: string;
items: MenuItem[];
}
export const menu: MenuCategoria[] = [
{
nombre: "Especialidades de Carne (A la leña / Parrilla)",
items: [
{
nombre: "costillitas de cerdo a la leña",
descripcion: "Preparadas con el método tradicional de la casa. Cómpralas por libra.",
categoria: "A la leña",
destacado: true
},
{
nombre: "Chivo asado",
descripcion: "Preparado a la leña con el sazón tradicional dominicano.",
categoria: "A la leña"
},
{
nombre: "Pollo a la leña",
descripcion: "Pollo entero o por piezas, cocinado a la leña",
categoria: "A la leña"
}
]
},
{
nombre: "Acompañamientos Tradicionales",
items: [
{
nombre: "Yuca frita",
descripcion: "Plato acompañante altamente recomendado. Crujiente por fuera, suave por dentro.",
categoria: "Acompañamiento",
destacado: true
},
{
nombre: "Tostones",
descripcion: "Frito verde de plátano, dorado y crujiente.",
categoria: "Acompañamiento"
},
{
nombre: "Ensaladas mixtas",
descripcion: "Vegetales frescos de la región.",
categoria: "Acompañamiento"
}
]
},
{
nombre: "Bebidas",
items: [
{
nombre: "Fresa frozen con alcohol",
descripcion: "Especialidad de la casa. Coctel refrescante preparado con fresas frescas.",
categoria: "Cocteles",
destacado: true
},
{
nombre: "Cervezas nacionales e internacionales",
descripcion: "Amplia selección de cervezas frías.",
categoria: "Bebidas"
},
{
nombre: "Café tradicional",
descripcion: "Café dominicano preparado al estilo clásico.",
categoria: "Bebidas"
}
]
}
];