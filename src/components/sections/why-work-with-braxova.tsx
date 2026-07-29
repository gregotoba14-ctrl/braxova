import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal"
import { WORKING_COMMITMENTS } from "@/lib/data"

export function WhyWorkWithBraxova() {
  return (
    <section id="compromiso" className="py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">Compromiso</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
              ¿Por qué trabajar con BRAXOVA?
            </h2>
          </Reveal>
        </div>

        <RevealGroup
          className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2"
          stagger={0.08}
        >
          {WORKING_COMMITMENTS.map((item) => {
            const Icon = item.icon
            return (
              <RevealItem key={item.title}>
                <div className="benefit-card h-full">
                  <div className="benefit-icon">
                    <Icon className="size-4.5" strokeWidth={1.7} />
                  </div>
                  <div>
                    <h3 className="mb-1 font-display text-base font-bold">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </RevealItem>
            )
          })}
        </RevealGroup>
      </div>
    </section>
  )
}
