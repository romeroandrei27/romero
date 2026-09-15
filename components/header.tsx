'use client'

import { useState } from 'react'
import { Search, ShoppingBag, User, Menu, X, Droplet } from 'lucide-react'
import { useCart } from '@/components/cart-provider'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Catálogo', href: '#catalogo' },
  { label: 'Marcas', href: '#marcas' },
  { label: 'Ofertas', href: '#ofertas' },
  { label: 'Contacto', href: '#contacto' },
]

export function Header() {
  const { count, openCart } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-ink py-2 text-center text-xs font-medium tracking-wide text-cream">
        <span aria-hidden="true">🚚</span> Envíos a toda la República Mexicana
        <span className="hidden sm:inline"> · Compras seguras 100% originales</span>
      </div>

      <div className="border-b border-ink/8 bg-cream/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a href="#inicio" className="flex items-center gap-1.5 shrink-0">
            <Droplet className="h-5 w-5 fill-gold text-gold" />
            <span className="font-serif text-2xl font-bold tracking-[0.2em] text-ink">
              ROMERO
            </span>
          </a>

          <div className="relative ml-auto hidden max-w-sm flex-1 md:block lg:ml-8">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40" />
            <input
              type="search"
              placeholder="Buscar perfumes, marcas..."
              aria-label="Buscar productos"
              className="w-full rounded-full border border-ink/12 bg-white py-2.5 pl-10 pr-4 text-sm text-ink placeholder:text-ink/40 outline-none transition-colors focus:border-gold"
            />
          </div>

          <div className="flex items-center gap-1 md:ml-auto lg:ml-0">
            <button
              type="button"
              aria-label="Perfil de usuario"
              className="hidden rounded-full p-2.5 text-ink transition-colors hover:bg-ink/5 sm:block"
            >
              <User className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={openCart}
              aria-label={`Carrito de compras, ${count} productos`}
              className="relative rounded-full p-2.5 text-ink transition-colors hover:bg-ink/5"
            >
              <ShoppingBag className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-wine px-1 text-[10px] font-bold text-white">
                  {count}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Abrir menú"
              aria-expanded={menuOpen}
              className="rounded-full p-2.5 text-ink transition-colors hover:bg-ink/5 lg:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <nav className="mx-auto hidden max-w-7xl px-4 pb-3 sm:px-6 lg:block lg:px-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative text-sm font-medium text-ink/70 transition-colors hover:text-ink after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-b border-ink/8 bg-cream transition-[max-height] duration-300 lg:hidden',
          menuOpen ? 'max-h-96' : 'max-h-0',
        )}
      >
        <div className="space-y-3 px-4 py-4 sm:px-6">
          <div className="relative md:hidden">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40" />
            <input
              type="search"
              placeholder="Buscar perfumes, marcas..."
              aria-label="Buscar productos"
              className="w-full rounded-full border border-ink/12 bg-white py-2.5 pl-10 pr-4 text-sm text-ink placeholder:text-ink/40 outline-none focus:border-gold"
            />
          </div>
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2.5 text-sm font-medium text-ink/80 transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
