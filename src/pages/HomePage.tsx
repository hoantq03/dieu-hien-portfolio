import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Projects } from '../components/Projects'
import { Stats } from '../components/Stats'
import { CTA } from '../components/CTA'
import { Clients } from '../components/Clients'
import { Footer } from '../components/Footer'

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Stats />
      <CTA />
      <Clients />
      <Footer />
    </>
  )
}
