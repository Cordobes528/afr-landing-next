import { HashLegacyFixer } from '@/components/hash-legacy-fixer'
import Nav from '@/components/nav'
import Hero from '@/components/hero'
import LeadMagnet from '@/components/lead-magnet'
import Footer from '@/components/footer'

export default function Page(){
  return (
    <>
      <HashLegacyFixer />
      <Nav />
      <Hero />
      <LeadMagnet />
      <Footer />
    </>
  )
}
