import { Truck, BadgeCheck, CreditCard, MessageCircle } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const items = [
  {
    icon: Truck,
    title: 'Envíos seguros a todo México',
    description: 'Entrega confiable y rastreable a toda la República Mexicana.',
  },
  {
    icon: BadgeCheck,
    title: '100% originales',
    description: 'Garantía de autenticidad en todas nuestras fragancias.',
  },
  {
    icon: CreditCard,
    title: 'Pago flexible',
    description: 'Tarjeta, PayPal y transferencia bancaria disponibles.',
  },
  {
    icon: MessageCircle,
    title: 'Atención por WhatsApp',
    description: 'Asesoría personalizada antes y después de tu compra.',
  },
]

export function TrustSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <Reveal className="mx-auto mb-12 max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
          Compra con confianza
        </p>
        <h2 className="mt-2 font-serif text-4xl text-ink">
          Una nueva forma de comprar perfumes
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={i * 70}>
            <div className="flex h-full flex-col items-center rounded-2xl border border-ink/8 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg hover:shadow-ink/5">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/12 text-gold">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-serif text-lg text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                {item.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
