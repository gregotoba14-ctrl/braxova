import { Check } from "lucide-react"

import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal"
import { ENGINEERING_STANDARDS } from "@/lib/data"

export function Engineering() {
  return (
    <section id="ingenieria" className="py-28 lg:py-36">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">Ingeniería</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
              ¿Por qué elegir BRAXOVA?
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              No desde el marketing, desde la ingeniería. Esto es lo que
              incluye cada proyecto que entregamos.
            </p>
          </Reveal>
        </div>

        <RevealGroup
          className="grid gap-x-10 gap-y-6 sm:grid-cols-2"
          stagger={0.06}
        >
          {ENGINEERING_STANDARDS.map((item) => (
            <RevealItem key={item.title}>
              <div className="flex items-start gap-3.5 border-b border-white/[0.07] pb-6">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent-blue/15 ring-1 ring-accent-blue/35">
                  <Check className="size-3 text-accent-blue" strokeWidth={3} />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
