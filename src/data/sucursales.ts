export interface Sucursal {
id: string;
nombre: string;
direccion: string;
telefono: string;
caracteristicas: string[];
mapaUrl: string;
imagenes: string[];
}

export const sucursales: Sucursal[] = [
{
id: "jarabacoa",
nombre: "Jarabacoa",
direccion: "Km 9 de la Carretera Federico Basilis, Jarabacoa, La Vega, República Dominicana",
telefono: "+1 809-865-4811",
caracteristicas: [
"Vistas panorámicas a las montañas",
"Ambiente fresco",
"Decoración rústica campestre con flores"
],
mapaUrl: "https://www.google.com/maps?q=Km+9+Carretera+Federico+Basilis+Jarabacoa+La+Vega+Republica+Dominicana&output=embed",
imagenes: [
"/images/jarabacoa/foto-exterior-restaurante.webp",
"/images/jarabacoa/vista-montaña-balcón-restaurant.webp",
"/images/jarabacoa/restaurante-lleno.webp"
]
},
{
id: "bonao",
nombre: "Bonao",
direccion: "Autopista Juan Pablo Duarte, Bonao, Monseñor Nouel, República Dominicana",
telefono: "+1 809-865-2711",
caracteristicas: [
"Ubicación estratégica sobre la autopista principal",
"Ideal para viajeros entre Santo Domingo y la región norte (Cibao)"
],
mapaUrl: "https://www.google.com/maps?q=Autopista+Juan+Pablo+Duarte+Bonao+Monseñor+Nouel+Republica+Dominicana&output=embed",
imagenes: [
"/images/Bonao/Foto-exterior+letrero.webp",
"/images/Bonao/foto-exterior-fachada.webp",
"/images/Bonao/foto-de-plato-comida.webp"
]
}
];