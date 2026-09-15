import { CartProvider } from '@/components/cart-provider'
import { Header } from '@/components/header'
import { CartSheet } from '@/components/cart-sheet'
import { Hero } from '@/components/hero'
import { BrandsStrip } from '@/components/brands-strip'
import { Categories } from '@/components/categories'
import { FeaturedProducts } from '@/components/featured-products'
import { PromoBanner } from '@/components/promo-banner'
import { TrustSection } from '@/components/trust-section'
import { Testimonials } from '@/components/testimonials'
import { Newsletter } from '@/components/newsletter'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <CartProvider>
      <div className="min-h-dvh bg-cream text-ink">
        <Header />
        <main>
          <Hero />
          <BrandsStrip />
          <Categories />
          <FeaturedProducts />
          <PromoBanner />
          <TrustSection />
          <Testimonials />
          <Newsletter />
        </main>
        <Footer />
        <CartSheet />
      </div>
    </CartProvider>
  )
}
