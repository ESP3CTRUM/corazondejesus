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
"Nuestra Sucursal principal",
"Vistas panorámicas a las montañas",
"Ambiente fresco"
],
mapaUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.907638034005!2d-70.58520092576173!3d19.19923604809405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb02db6d33be309%3A0x3b2af14068f47545!2sParador%20Coraz%C3%B3n%20de%20Jes%C3%BAs!5e0!3m2!1ses!2sdo!4v1785895093417!5m2!1ses!2sdo",
imagenes: [
"/images/Jarabacoa/foto-exterior-restaurante.webp",
"/images/Jarabacoa/vista-montana-balcon-restaurant.webp",
"/images/Jarabacoa/Restaurante-lleno.webp"
]
},
{
id: "bonao",
nombre: "Bonao",
telefono: "+1 809-865-2711",
caracteristicas: [
"Un pedacito de Jarabacoa en Bonao, extendimos nuestro Alcance para que puedas disfrutar nuestras recetas mas frecuentemente",
"Ideal para viajeros entre Santo Domingo y el Cibao"
],
mapaUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2088.856439019339!2d-70.43135679245219!3d18.988723139152984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eafd9a1b16de7df%3A0x414cca271aa9d04d!2sParador%20Coraz%C3%B3n%20De%20Jes%C3%BAs!5e0!3m2!1ses!2sdo!4v1785455039445!5m2!1ses!2sdo",
imagenes: [
"/images/Bonao/Foto-exterior+letrero.webp",
"/images/Bonao/foto-mesas-vacias.webp",
"/images/Bonao/foto-de-plato-comida.webp",
"/images/Bonao/sirviendo-bandeja-cafe-greca-decorada-colores-blanco-rojo-acento.webp",
"/images/Bonao/foto-exterior-fachada.webp",
]
}
];
