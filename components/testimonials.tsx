import { Quote } from 'lucide-react'
import { StarRating } from '@/components/star-rating'
import { Reveal } from '@/components/reveal'

const testimonials = [
  {
    name: 'Mariana G.',
    location: 'Guadalajara, Jal.',
    rating: 5,
    text: 'Mi perfume llegó en dos días y perfectamente empacado. 100% original, exactamente como lo esperaba. Volveré a comprar sin duda.',
  },
  {
    name: 'Carlos R.',
    location: 'Monterrey, N.L.',
    rating: 5,
    text: 'Excelente atención por WhatsApp, me ayudaron a elegir la fragancia ideal. Los precios son los mejores que encontré en México.',
  },
  {
    name: 'Andrea M.',
    location: 'CDMX',
    rating: 4.5,
    text: 'Gran variedad de marcas, incluyendo perfumes árabes que no encuentras fácil. El envío fue rápido y seguro. Muy recomendados.',
  },
]

export function Testimonials() {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            Testimonios
          </p>
          <h2 className="mt-2 font-serif text-4xl text-ink">
            Lo que dicen nuestros clientes
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <figure className="flex h-full flex-col rounded-2xl border border-ink/8 bg-white p-6 shadow-sm">
                <Quote className="h-8 w-8 text-gold/30" />
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink/75">
                  {t.text}
                </blockquote>
                <StarRating rating={t.rating} className="mt-5" />
                <figcaption className="mt-3 border-t border-ink/8 pt-3">
                  <p className="font-serif text-base text-ink">{t.name}</p>
                  <p className="text-xs text-ink/50">{t.location}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
