'use client'

import Image from 'next/image'
import { ShoppingBag } from 'lucide-react'
import { type Product, formatMXN } from '@/lib/products'
import { useCart } from '@/components/cart-provider'
import { StarRating } from '@/components/star-rating'
import { cn } from '@/lib/utils'

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()
  const discount =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) *
            100,
        )
      : 0

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-ink/8 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl hover:shadow-ink/5">
      <div className="relative aspect-square overflow-hidden bg-cream">
        <Image
          src={product.image || '/placeholder.svg'}
          alt={`${product.brand} ${product.name}`}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className={cn(
            'object-cover transition-transform duration-500 group-hover:scale-105',
            !product.inStock && 'opacity-60 grayscale',
          )}
        />

        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          {discount > 0 && (
            <span className="rounded-full bg-wine px-2.5 py-1 text-[11px] font-semibold tracking-wide text-white">
              -{discount}%
            </span>
          )}
          {product.badge && (
            <span className="rounded-full bg-ink/90 px-2.5 py-1 text-[11px] font-medium tracking-wide text-cream">
              {product.badge}
            </span>
          )}
        </div>

        {!product.inStock && (
          <div className="group/stock absolute right-3 top-3">
            <span className="cursor-default rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-wine shadow-sm ring-1 ring-wine/20">
              Agotado
            </span>
            <span
              role="tooltip"
              className="pointer-events-none absolute right-0 top-full z-10 mt-1.5 w-max max-w-[180px] rounded-lg bg-ink px-3 py-1.5 text-[11px] text-cream opacity-0 shadow-lg transition-opacity duration-200 group-hover/stock:opacity-100"
            >
              Producto temporalmente sin stock
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gold">
          {product.brand}
        </p>
        <h3 className="mt-1 font-serif text-lg leading-tight text-ink">
          {product.name}
        </h3>
        <p className="mt-0.5 text-xs text-ink/50">{product.size}</p>

        <div className="mt-2">
          <StarRating rating={product.rating} reviews={product.reviews} />
        </div>

        <div className="mt-3 flex items-baseline gap-2">
          <span className="font-serif text-xl text-ink">
            {formatMXN(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-ink/40 line-through">
              {formatMXN(product.originalPrice)}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={() => addItem(product)}
          disabled={!product.inStock}
          className={cn(
            'mt-4 flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-200',
            product.inStock
              ? 'bg-ink text-cream hover:bg-wine active:scale-[0.98]'
              : 'cursor-not-allowed bg-ink/10 text-ink/40',
          )}
        >
          <ShoppingBag className="h-4 w-4" />
          {product.inStock ? 'Agregar al carrito' : 'Agotado'}
        </button>
      </div>
    </article>
  )
}
