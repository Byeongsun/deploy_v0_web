import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Values from "@/components/values"
import Philosophy from "@/components/philosophy"
import Story from "@/components/story"
import Team from "@/components/team"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ScrollHandler from "@/components/scroll-handler"

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollHandler />
      <Navigation />
      <Hero />
      <Values />
      <Philosophy />
      <Story />
      <Team />
      <Contact />
      <Footer />
    </main>
  )
}
