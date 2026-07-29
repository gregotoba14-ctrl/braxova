import { Reveal } from "@/components/motion/reveal"
import { PROJECTS } from "@/lib/projects"

export function TrustLogos() {
  const words = PROJECTS.map((p) => p.name.toUpperCase())
  const track = [...words, ...words]

  return (
    <section className="border-y border-white/[0.06] py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <p className="mb-10 text-center text-sm uppercase tracking-[0.2em] text-muted-foreground/70">
            Empresas que confiaron en BRAXOVA
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="logo-marquee">
            <div className="logo-track">
              {track.map((word, i) => (
                <span key={`${word}-${i}`} className="logo-word">
                  {word}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
