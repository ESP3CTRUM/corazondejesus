export interface Sucursal {
id: string;
nombre: string;
telefono: string;
caracteristicas: string[];
mapaUrl: string;
imagenes: string[];
}

export const sucursales: Sucursal[] = [
{
id: "jarabacoa",
nombre: "Jarabacoa",
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
telefono: "+1 809-865-2711",
caracteristicas: [
"Ubicación estratégica sobre la autopista principal",
"Ideal para viajeros entre Santo Domingo y la región norte (Cibao)"
],
mapaUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2088.856439019339!2d-70.43135679245219!3d18.988723139152984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eafd9a1b16de7df%3A0x414cca271aa9d04d!2sParador%20Coraz%C3%B3n%20De%20Jes%C3%BAs!5e0!3m2!1ses!2sdo!4v1785455039445!5m2!1ses!2sdo",
imagenes: [
"/images/Bonao/Foto-exterior+letrero.webp",
"/images/Bonao/foto-exterior-fachada.webp",
"/images/Bonao/foto-de-plato-comida.webp"
]
}
];
