import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function PromoBanner() {
  return (
    <section id="ofertas" className="bg-ink py-20">
      <Reveal className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">
          Ofertas exclusivas
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl font-serif text-4xl leading-tight text-cream sm:text-5xl">
          Hasta <span className="text-gold">30% de descuento</span> en marcas
          seleccionadas
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-cream/70">
          Aprovecha precios especiales en fragancias originales por tiempo
          limitado. Envío gratis en compras mayores a $1,500 MXN.
        </p>
        <a
          href="#catalogo"
          className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-ink transition-all hover:bg-gold-soft active:scale-[0.98]"
        >
          Ver ofertas
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </Reveal>
    </section>
  )
}
