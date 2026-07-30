import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
subsets: ["latin"],
weight: ["600"],
variable: "--font-heading",
display: "swap",
});
const workSans = Work_Sans({
subsets: ["latin"],
weight: ["400", "500", "600"],
variable: "--font-body",
display: "swap",
});
export const metadata: Metadata = {
title: "Parador Corazón de Jesús - Comida Criolla y Barbacoa a la Leña",
description: "Restaurante familiar icónico en la región del Cibao, famoso por sus costillas preparadas a la leña. Dos sucursales: Jarabacoa y Bonao.",
keywords: "restaurante, comida criolla, barbacoa, leña, Jarabacoa, Bonao, República Dominicana",
};
export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode;
}>) {
return (
<html lang="es">
<body className={`${fraunces.variable} ${workSans.variable} font-body`}>
{children}
</body>
</html>
);
}