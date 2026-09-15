import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import type { Category } from '@/lib/products'

export function CategoryCard({ category }: { category: Category }) {
  return (
    <a
      href="#catalogo"
      className="group relative flex aspect-[4/5] items-end overflow-hidden rounded-2xl"
    >
      <Image
        src={category.image || '/placeholder.svg'}
        alt={category.name}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
      <div className="relative w-full p-4">
        <h3 className="font-serif text-lg leading-tight text-cream">
          {category.name}
        </h3>
        <span className="mt-1 flex items-center gap-1 text-xs font-medium text-gold-soft opacity-0 transition-all duration-300 group-hover:opacity-100">
          Ver productos
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </a>
  )
}
