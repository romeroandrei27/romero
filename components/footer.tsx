import { Droplet, Camera, ThumbsUp, MessageCircle, Mail, Phone } from 'lucide-react'

const linkGroups = [
  {
    title: 'Tienda',
    links: ['Catálogo', 'Marcas', 'Ofertas', 'Novedades'],
  },
  {
    title: 'Ayuda',
    links: ['Envíos', 'Devoluciones', 'Preguntas frecuentes', 'Aviso de privacidad'],
  },
]

export function Footer() {
  return (
    <footer id="contacto" className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <a href="#inicio" className="flex items-center gap-1.5">
              <Droplet className="h-5 w-5 fill-gold text-gold" />
              <span className="font-serif text-2xl font-bold tracking-[0.2em]">
                ROMERO
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
              Tu tienda mexicana de perfumes originales de las mejores marcas
              nacionales e internacionales, con envíos a toda la República.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { icon: Camera, label: 'Instagram' },
                { icon: ThumbsUp, label: 'Facebook' },
                { icon: MessageCircle, label: 'WhatsApp' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-gold hover:text-ink"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-serif text-lg text-gold-soft">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-cream/60 transition-colors hover:text-gold"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-serif text-lg text-gold-soft">Contacto</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:hola@romeroperfumes.mx"
                  className="flex items-center gap-2 text-sm text-cream/60 transition-colors hover:text-gold"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  hola@romeroperfumes.mx
                </a>
              </li>
              <li>
                <a
                  href="tel:+523300000000"
                  className="flex items-center gap-2 text-sm text-cream/60 transition-colors hover:text-gold"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  +52 33 0000 0000
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-6 text-center">
          <p className="text-xs text-cream/50">
            © 2026 Romero Perfumes — Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
