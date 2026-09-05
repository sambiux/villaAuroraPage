// Datos del menú — precios de picadas confirmados en el brief.
// Los platos de sopas/almuerzos NO tienen precio definido: usar placeholder editable.

export const picadas = [
  {
    id: 'picada-personal',
    nombre: 'Picada Personal',
    descripcion: 'Plátano, chicharrón, papa salada, plátano maduro y carne.',
    precio: 42000,
    imagen: '/images/picada-personal.jpg', // placeholder
  },
  {
    id: 'picada-doble',
    nombre: 'Picada Doble',
    descripcion: 'Plátano, chicharrón, papa salada, plátano maduro y carne, para compartir entre dos.',
    precio: 84000,
    imagen: '/images/picada-doble.jpg', // placeholder
  },
  {
    id: 'picada-triple',
    nombre: 'Picada Triple',
    descripcion: 'Plátano, chicharrón, papa salada, plátano maduro y carne, ideal para compartir en familia.',
    precio: 126000,
    imagen: '/images/picada-triple.jpg', // placeholder
  },
]

export const sopasYAlmuerzos = [
  {
    id: 'sancocho-res',
    nombre: 'Sancocho de res',
    descripcion: '[Descripción editable]',
    precio: null, // PLACEHOLDER — precio no proporcionado
    imagen: '/images/sancocho-res.jpg', // placeholder
  },
  {
    id: 'frijolada-llanera',
    nombre: 'Frijolada llanera',
    descripcion: '[Descripción editable]',
    precio: null,
    imagen: '/images/frijolada-llanera.jpg',
  },
  {
    id: 'sudado-pata',
    nombre: 'Sudado de pata',
    descripcion: '[Descripción editable]',
    precio: null,
    imagen: '/images/sudado-pata.jpg',
  },
  {
    id: 'sopa-cebada',
    nombre: 'Sopa de cebada perlada',
    descripcion: '[Descripción editable]',
    precio: null,
    imagen: '/images/sopa-cebada.jpg',
  },
]

export const categorias = [
  {
    id: 'picadas',
    nombre: 'Picadas',
    descripcion: 'Para compartir, en tres tamaños distintos.',
    imagen: '/images/categoria-picadas.jpg',
  },
  {
    id: 'almuerzos',
    nombre: 'Almuerzos',
    descripcion: 'Preparaciones caseras de todos los días.',
    imagen: '/images/categoria-almuerzos.jpg',
  },
  {
    id: 'sopas',
    nombre: 'Sopas y preparaciones tradicionales',
    descripcion: 'Sabores de nuestra tierra, hechos como en casa.',
    imagen: '/images/categoria-sopas.jpg',
  },
]

export const generosMusicales = [
  'Boleros clásicos',
  'Baladas',
  'Pop',
  'Vallenato',
  'Otros géneros',
]

export function formatearPrecio(valor) {
  if (valor === null || valor === undefined) return 'Precio a confirmar'
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(valor)
}