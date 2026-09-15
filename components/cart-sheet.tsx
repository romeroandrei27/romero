'use client'

import Image from 'next/image'
import { X, Plus, Minus, Trash2, ShoppingBag, Truck } from 'lucide-react'
import { useCart } from '@/components/cart-provider'
import { formatMXN, FREE_SHIPPING_THRESHOLD } from '@/lib/products'
import { cn } from '@/lib/utils'

export function CartSheet() {
  const { items, total, count, isOpen, closeCart, updateQuantity, removeItem } =
    useCart()

  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - total)
  const progress = Math.min(100, (total / FREE_SHIPPING_THRESHOLD) * 100)

  return (
    <>
      <div
        onClick={closeCart}
        aria-hidden="true"
        className={cn(
          'fixed inset-0 z-50 bg-ink/50 backdrop-blur-sm transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      />

      <aside
        role="dialog"
        aria-label="Carrito de compras"
        aria-modal="true"
        className={cn(
          'fixed right-0 top-0 z-50 flex h-dvh w-full max-w-md flex-col bg-cream shadow-2xl transition-transform duration-300 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex items-center justify-between border-b border-ink/10 px-5 py-4">
          <h2 className="flex items-center gap-2 font-serif text-xl text-ink">
            <ShoppingBag className="h-5 w-5 text-gold" />
            Tu carrito
            <span className="text-sm font-sans text-ink/50">({count})</span>
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Cerrar carrito"
            className="rounded-full p-2 text-ink transition-colors hover:bg-ink/5"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length > 0 && (
          <div className="border-b border-ink/10 bg-white/60 px-5 py-4">
            <div className="mb-2 flex items-center gap-2 text-xs text-ink/70">
              <Truck className="h-4 w-4 text-gold" />
              {remaining > 0 ? (
                <span>
                  Te faltan{' '}
                  <span className="font-semibold text-ink">
                    {formatMXN(remaining)}
                  </span>{' '}
                  para envío gratis
                </span>
              ) : (
                <span className="font-semibold text-wine">
                  ¡Felicidades! Tienes envío gratis 🎉
                </span>
              )}
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-ink/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-gold to-wine transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag className="h-12 w-12 text-ink/20" />
              <p className="mt-4 font-serif text-lg text-ink">
                Tu carrito está vacío
              </p>
              <p className="mt-1 text-sm text-ink/50">
                Descubre nuestros perfumes y agrégalos aquí.
              </p>
              <button
                type="button"
                onClick={closeCart}
                className="mt-6 rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-wine"
              >
                Ver catálogo
              </button>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map(({ product, quantity }) => (
                <li
                  key={product.id}
                  className="flex gap-3 rounded-xl border border-ink/8 bg-white p-3"
                >
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-cream">
                    <Image
                      src={product.image || '/placeholder.svg'}
                      alt={`${product.brand} ${product.name}`}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-gold">
                      {product.brand}
                    </p>
                    <p className="font-serif text-base leading-tight text-ink">
                      {product.name}
                    </p>
                    <p className="text-xs text-ink/50">{product.size}</p>
                    <div className="mt-auto flex items-center justify-between pt-2">
                      <div className="flex items-center rounded-full border border-ink/12">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(product.id, quantity - 1)
                          }
                          aria-label="Reducir cantidad"
                          className="p-1.5 text-ink transition-colors hover:text-wine"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-7 text-center text-sm font-medium text-ink">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(product.id, quantity + 1)
                          }
                          aria-label="Aumentar cantidad"
                          className="p-1.5 text-ink transition-colors hover:text-gold"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <span className="font-serif text-sm text-ink">
                        {formatMXN(product.price * quantity)}
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(product.id)}
                    aria-label={`Quitar ${product.name}`}
                    className="self-start rounded-full p-1.5 text-ink/40 transition-colors hover:bg-wine/10 hover:text-wine"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-ink/10 bg-white px-5 py-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm text-ink/60">Total</span>
              <span className="font-serif text-2xl text-ink">
                {formatMXN(total)}
              </span>
            </div>
            <button
              type="button"
              className="w-full rounded-full bg-ink py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-wine"
            >
              Proceder al pago
            </button>
            <p className="mt-2 text-center text-[11px] text-ink/40">
              Pago con tarjeta, PayPal y transferencia
            </p>
          </div>
        )}
      </aside>
    </>
  )
}
