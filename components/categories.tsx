import { categories } from '@/lib/products'
import { CategoryCard } from '@/components/category-card'
import { Reveal } from '@/components/reveal'

export function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <Reveal className="mx-auto mb-12 max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
          Explora
        </p>
        <h2 className="mt-2 font-serif text-4xl text-ink">
          Compra por categoría
        </h2>
        <p className="mt-3 text-ink/60">
          Encuentra la fragancia ideal para cada ocasión y estilo.
        </p>
      </Reveal>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {categories.map((category, i) => (
          <Reveal key={category.id} delay={i * 60}>
            <CategoryCard category={category} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
