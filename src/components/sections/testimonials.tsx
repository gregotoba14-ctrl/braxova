import { Star, Quote } from "lucide-react"

import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal"
import { TESTIMONIALS } from "@/lib/data"

export function Testimonials() {
  return (
    <section id="testimonios" className="py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">Testimonios</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
              Empresas que ya escalaron con nosotros
            </h2>
          </Reveal>
        </div>

        <RevealGroup className="grid gap-6 md:grid-cols-3" stagger={0.1}>
          {TESTIMONIALS.map((t) => (
            <RevealItem key={t.name}>
              <div className="testimonial-card h-full">
                <div className="mb-4 flex gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4" fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <Quote className="mb-2 size-6 text-accent-blue/50" />
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  {t.text}
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="avatar-circle"
                    style={{ background: t.gradient }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
