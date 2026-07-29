import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal"
import { PROCESS } from "@/lib/data"

export function Process() {
  return (
    <section id="proceso" className="relative overflow-hidden py-28 lg:py-36">
      <div className="section-glow section-glow-alt" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">Proceso</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
              Un método claro, de principio a fin
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Seis etapas para pasar de una idea a un producto en producción,
              sin sorpresas.
            </p>
          </Reveal>
        </div>

        <div className="relative">
          <div className="timeline-line" />
          <RevealGroup className="grid gap-8 lg:grid-cols-6 lg:gap-4" stagger={0.08}>
            {PROCESS.map((step) => (
              <RevealItem key={step.n} className="timeline-step">
                <div className="text-left">
                  <div className="timeline-num">{step.n}</div>
                  <h3 className="mb-1.5 font-display text-base font-bold">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  )
}
