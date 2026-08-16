import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal"
import { IndustryMap } from "@/components/sections/industry-map"
import { INDUSTRIES } from "@/lib/data"

export function Industries() {
  // overflow-hidden clips the decorative .section-glow, which is offset past
  // the right edge and would otherwise widen the page.
  return (
    <section id="industrias" className="relative overflow-hidden py-28 lg:py-36">
      <div className="section-glow" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center lg:mb-4">
          <Reveal>
            <span className="eyebrow">Industrias</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
              Soluciones para distintos tipos de negocio
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Diseñamos cada proyecto según las necesidades y procesos de tu
              negocio.
            </p>
          </Reveal>
        </div>

        {/* Desktop: hub-and-spoke map. Mobile: the same six industries as
            cards, which stay readable at small widths where the radial
            layout would collapse. */}
        <div className="hidden lg:block">
          <IndustryMap />
        </div>

        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:hidden">
          {INDUSTRIES.map((industry) => {
            const Icon = industry.icon
            return (
              <RevealItem key={industry.label}>
                <div className="industry-card h-full">
                  <div className="industry-icon">
                    <Icon className="size-5" strokeWidth={1.7} />
                  </div>
                  <div>
                    <h3 className="mb-1.5 font-display text-lg font-bold">
                      {industry.label}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {industry.desc}
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
