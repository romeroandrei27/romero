import { Reveal } from '@/components/reveal'

const brandNames = [
  'BVG',
  'Armani',
  'Carolina Herrera',
  'Paco Rabanne',
  'Hugo Boss',
  'Lattafa',
  'Versace',
  'Dior',
]

export function BrandsStrip() {
  return (
    <section id="marcas" className="border-y border-ink/8 bg-white py-10">
      <Reveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink/40">
          Marcas nacionales e internacionales
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {brandNames.map((brand) => (
            <span
              key={brand}
              className="font-serif text-xl text-ink/60 transition-colors hover:text-gold sm:text-2xl"
            >
              {brand}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
