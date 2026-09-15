export type Product = {
  id: string
  name: string
  brand: string
  size: string
  price: number
  originalPrice?: number
  rating: number
  reviews: number
  image: string
  category: string
  inStock: boolean
  badge?: string
}

export const products: Product[] = [
  {
    id: 'bvg-blue',
    name: 'Blue Intense',
    brand: 'BVG',
    size: '100 ml',
    price: 899,
    originalPrice: 1199,
    rating: 4.5,
    reviews: 128,
    image: '/images/p1.png',
    category: 'Hombre',
    inStock: true,
    badge: 'Oferta',
  },
  {
    id: 'armani-acqua',
    name: 'Acqua di Giò',
    brand: 'Armani',
    size: '100 ml',
    price: 2499,
    originalPrice: 2999,
    rating: 5,
    reviews: 342,
    image: '/images/p2.png',
    category: 'Hombre',
    inStock: true,
    badge: 'Más vendido',
  },
  {
    id: 'ch-good-girl',
    name: 'Good Girl',
    brand: 'Carolina Herrera',
    size: '80 ml',
    price: 2799,
    rating: 4.5,
    reviews: 210,
    image: '/images/p3.png',
    category: 'Mujer',
    inStock: true,
  },
  {
    id: 'paco-1million',
    name: '1 Million',
    brand: 'Paco Rabanne',
    size: '100 ml',
    price: 2299,
    originalPrice: 2699,
    rating: 4.5,
    reviews: 289,
    image: '/images/p4.png',
    category: 'Hombre',
    inStock: true,
    badge: 'Oferta',
  },
  {
    id: 'hugo-boss-bottled',
    name: 'Boss Bottled',
    brand: 'Hugo Boss',
    size: '100 ml',
    price: 1899,
    rating: 4,
    reviews: 156,
    image: '/images/p5.png',
    category: 'Hombre',
    inStock: false,
  },
  {
    id: 'lattafa-asad',
    name: 'Asad',
    brand: 'Lattafa',
    size: '100 ml',
    price: 749,
    originalPrice: 999,
    rating: 4.5,
    reviews: 198,
    image: '/images/p6.png',
    category: 'Árabes',
    inStock: true,
    badge: 'Novedad',
  },
  {
    id: 'ch-212-vip',
    name: '212 VIP Rosé',
    brand: 'Carolina Herrera',
    size: '80 ml',
    price: 2599,
    rating: 5,
    reviews: 174,
    image: '/images/p7.png',
    category: 'Mujer',
    inStock: true,
    badge: 'Más vendido',
  },
  {
    id: 'armani-si',
    name: 'Sì Passione',
    brand: 'Armani',
    size: '100 ml',
    price: 2899,
    originalPrice: 3299,
    rating: 4.5,
    reviews: 231,
    image: '/images/p8.png',
    category: 'Mujer',
    inStock: true,
    badge: 'Oferta',
  },
]

export const brands = [
  'BVG',
  'Armani',
  'Carolina Herrera',
  'Paco Rabanne',
  'Hugo Boss',
  'Lattafa',
]

export type Category = {
  id: string
  name: string
  image: string
}

export const categories: Category[] = [
  { id: 'hombre', name: 'Perfumes de Hombre', image: '/images/cat-hombre.png' },
  { id: 'mujer', name: 'Perfumes de Mujer', image: '/images/cat-mujer.png' },
  { id: 'unisex', name: 'Perfumes Unisex', image: '/images/cat-unisex.png' },
  { id: 'sets', name: 'Sets y Estuches', image: '/images/cat-sets.png' },
  { id: 'miniaturas', name: 'Miniaturas', image: '/images/cat-mini.png' },
  { id: 'arabes', name: 'Perfumes Árabes', image: '/images/cat-arabes.png' },
]

export const FREE_SHIPPING_THRESHOLD = 1500

export function formatMXN(value: number): string {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2,
  }).format(value)
}
