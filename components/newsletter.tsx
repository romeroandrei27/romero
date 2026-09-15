'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <Reveal className="relative overflow-hidden rounded-3xl border border-gold/25 bg-wine px-6 py-14 text-center sm:px-12">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-gold/10 blur-3xl" />
        <div className="relative mx-auto max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
            10% de descuento en tu primera compra
          </p>
          <h2 className="mt-3 font-serif text-4xl text-cream">
            Únete a Romero
          </h2>
          <p className="mt-3 text-cream/75">
            Suscríbete y recibe ofertas exclusivas, lanzamientos y un cupón de
            bienvenida.
          </p>

          {subscribed ? (
            <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-cream/15 px-6 py-3 text-sm font-medium text-cream">
              <Check className="h-4 w-4 text-gold-soft" />
              ¡Gracias por suscribirte! Revisa tu correo.
            </p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                if (email) setSubscribed(true)
              }}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                aria-label="Correo electrónico"
                className="w-full rounded-full border border-cream/20 bg-cream/10 px-5 py-3.5 text-sm text-cream placeholder:text-cream/50 outline-none transition-colors focus:border-gold"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-gold-soft active:scale-[0.98]"
              >
                Suscribirme
              </button>
            </form>
          )}
        </div>
      </Reveal>
    </section>
  )
}
