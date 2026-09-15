'use client'

import { useMemo, useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import { products, brands, formatMXN } from '@/lib/products'
import { ProductCard } from '@/components/product-card'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

type SortKey = 'popularidad' | 'precio-asc' | 'precio-desc' | 'novedades'

const maxPrice = Math.max(...products.map((p) => p.price))

export function FeaturedProducts() {
  const [activeBrand, setActiveBrand] = useState<string | null>(null)
  const [priceLimit, setPriceLimit] = useState(maxPrice)
  const [sort, setSort] = useState<SortKey>('popularidad')

  const visible = useMemo(() => {
    let list = products.filter(
      (p) =>
        (!activeBrand || p.brand === activeBrand) && p.price <= priceLimit,
    )
    switch (sort) {
      case 'precio-asc':
        list = [...list].sort((a, b) => a.price - b.price)
        break
      case 'precio-desc':
        list = [...list].sort((a, b) => b.price - a.price)
        break
      case 'popularidad':
        list = [...list].sort((a, b) => b.reviews - a.reviews)
        break
      case 'novedades':
        list = [...list].sort(
          (a, b) =>
            Number(b.badge === 'Novedad') - Number(a.badge === 'Novedad'),
        )
        break
    }
    return list
  }, [activeBrand, priceLimit, sort])

  return (
    <section id="catalogo" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Selección
            </p>
            <h2 className="mt-2 font-serif text-4xl text-ink">
              Productos destacados
            </h2>
          </div>
          <label className="flex items-center gap-2 text-sm text-ink/70">
            <span className="whitespace-nowrap">Ordenar por</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="rounded-full border border-ink/15 bg-cream px-4 py-2 text-sm font-medium text-ink outline-none transition-colors focus:border-gold"
            >
              <option value="popularidad">Popularidad</option>
              <option value="precio-asc">Precio: menor a mayor</option>
              <option value="precio-desc">Precio: mayor a menor</option>
              <option value="novedades">Novedades</option>
            </select>
          </label>
        </Reveal>

        <Reveal className="mb-8 rounded-2xl border border-ink/8 bg-cream p-5">
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-ink">
            <SlidersHorizontal className="h-4 w-4 text-gold" />
            Filtros
          </div>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setActiveBrand(null)}
                className={cn(
                  'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
                  activeBrand === null
                    ? 'bg-ink text-cream'
                    : 'bg-white text-ink/70 ring-1 ring-ink/12 hover:ring-gold',
                )}
              >
                Todas
              </button>
              {brands.map((brand) => (
                <button
                  key={brand}
                  type="button"
                  onClick={() => setActiveBrand(brand)}
                  className={cn(
                    'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
                    activeBrand === brand
                      ? 'bg-ink text-cream'
                      : 'bg-white text-ink/70 ring-1 ring-ink/12 hover:ring-gold',
                  )}
                >
                  {brand}
                </button>
              ))}
            </div>

            <div className="w-full max-w-xs">
              <div className="mb-1.5 flex items-center justify-between text-xs text-ink/60">
                <span>Precio máximo</span>
                <span className="font-semibold text-ink">
                  {formatMXN(priceLimit)}
                </span>
              </div>
              <input
                type="range"
                min={500}
                max={maxPrice}
                step={100}
                value={priceLimit}
                onChange={(e) => setPriceLimit(Number(e.target.value))}
                aria-label="Precio máximo"
                className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-ink/15 accent-gold"
              />
            </div>
          </div>
        </Reveal>

        {visible.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
            {visible.map((product, i) => (
              <Reveal key={product.id} delay={(i % 4) * 60}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        ) : (
          <p className="py-16 text-center text-ink/50">
            No hay productos que coincidan con los filtros seleccionados.
          </p>
        )}
      </div>
    </section>
  )
}
