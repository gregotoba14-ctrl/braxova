import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal"
import { TECHNOLOGIES } from "@/lib/data"

export function Technologies() {
  return (
    <section id="tecnologias" className="py-28 lg:py-36">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">Stack</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
              Tecnologías
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Herramientas modernas y probadas, elegidas según lo que necesita
              cada proyecto.
            </p>
          </Reveal>
        </div>

        <RevealGroup
          className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-3"
          stagger={0.05}
        >
          {TECHNOLOGIES.map((tech) => (
            <RevealItem key={tech}>
              <span className="tech-pill">{tech}</span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
