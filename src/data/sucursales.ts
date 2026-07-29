export type Sucursal = {
  nombre: string;
  direccion: string;
  horario: string;
  foto: string;
};

export const sucursales: Sucursal[] = [
  {
    nombre: "Sucursal Principal",
    direccion: "Av. Principal #123, Santo Domingo",
    horario: "Lunes a Domingo · 10:00 AM - 10:00 PM",
    foto: "/images/local-1/portada.jpg",
  },
  {
    nombre: "Sucursal Norte",
    direccion: "Calle 5 #45, Santiago",
    horario: "Lunes a Sábado · 11:00 AM - 9:00 PM",
    foto: "/images/local-2/portada.jpg",
  },
];
