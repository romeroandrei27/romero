import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.png"
          alt="Perfume de lujo Romero"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/40" />
      </div>

      <div className="relative mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <span className="inline-block rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold-soft">
            Perfumería de lujo
          </span>
          <h1 className="mt-5 font-serif text-5xl leading-[1.05] text-cream sm:text-6xl lg:text-7xl">
            Descubre tu <span className="text-gold">aroma perfecto</span>
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-cream/80">
            Perfumes originales de las mejores marcas, entregados en tu puerta en
            toda la República Mexicana.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#catalogo"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink transition-all hover:bg-gold-soft active:scale-[0.98]"
            >
              Ver catálogo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#marcas"
              className="inline-flex items-center justify-center rounded-full border border-cream/30 px-7 py-3.5 text-sm font-semibold text-cream backdrop-blur-sm transition-colors hover:bg-cream/10"
            >
              Conocer marcas
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
