import { Hero } from "@/components/sections/hero"
import { TrustLogos } from "@/components/sections/trust-logos"
import { Services } from "@/components/sections/services"
import { WhyBraxova } from "@/components/sections/why-braxova"
import { Portfolio } from "@/components/sections/portfolio"
import { Industries } from "@/components/sections/industries"
import { Process } from "@/components/sections/process"
import { Technologies } from "@/components/sections/technologies"
import { Engineering } from "@/components/sections/engineering"
import { WhyWorkWithBraxova } from "@/components/sections/why-work-with-braxova"
import { Faq } from "@/components/sections/faq"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <main id="contenido">
      <Hero />
      <TrustLogos />
      <Services />
      <WhyBraxova />
      <Portfolio />
      <Industries />
      <Process />
      <Technologies />
      <Engineering />
      <WhyWorkWithBraxova />
      <Faq />
      <Contact />
    </main>
  )
}
