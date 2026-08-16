import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal"
import { Magnetic } from "@/components/motion/magnetic"
import { BENEFITS } from "@/lib/data"

export function WhyBraxova() {
  // overflow-hidden clips the decorative .section-glow, which is offset past
  // the right edge and would otherwise widen the page.
  return (
    <section id="por-que" className="relative overflow-hidden py-28 lg:py-36">
      <div className="section-glow" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Reveal>
              <span className="eyebrow">Beneficios</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
                Tecnología que simplifica tu negocio.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Cada solución está pensada para resolver problemas reales:
                ahorrar tiempo, ordenar procesos y ayudarte a hacer crecer tu
                negocio.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <Magnetic className="mt-9 inline-block">
                <Button asChild className="btn-glow h-11 rounded-xl px-6">
                  <Link href="#contacto">Hablemos de tu proyecto</Link>
                </Button>
              </Magnetic>
            </Reveal>
          </div>

          <RevealGroup className="grid gap-4 sm:grid-cols-2">
            {BENEFITS.map((benefit) => {
              const Icon = benefit.icon
              return (
                <RevealItem key={benefit.title}>
                  <div className="benefit-card h-full">
                    <div className="benefit-icon">
                      <Icon className="size-4.5" strokeWidth={1.7} />
                    </div>
                    <div>
                      <h3 className="mb-1 font-display text-base font-bold">
                        {benefit.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                </RevealItem>
              )
            })}
          </RevealGroup>
        </div>
      </div>
    </section>
  )
}
