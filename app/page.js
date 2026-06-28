import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WorkSection from '../components/WorkSection'
import ContactCTA from '../components/ContactCTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WorkSection />
      <ContactCTA />
      <Footer />
    </main>
  )
}
