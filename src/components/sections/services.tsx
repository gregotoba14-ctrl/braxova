"use client"

import * as React from "react"
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal"
import { SERVICES } from "@/lib/data"

export function Services() {
  return (
    <section id="servicios" className="py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">Servicios</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
              Todo lo que tu empresa necesita para crecer
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Del diseño a la automatización: un solo equipo, un solo estándar
              de calidad.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <RevealItem key={service.title}>
              <ServiceCard service={service} index={i} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[number]
  index: number
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const Icon = service.icon

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`)
    el.style.setProperty("--my", `${e.clientY - rect.top}px`)
  }

  return (
    <div ref={ref} className="service-card h-full" onMouseMove={onMouseMove}>
      <span className="absolute right-5 top-5 font-display text-xs font-bold text-white/10">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="service-icon">
        <Icon className="size-5" strokeWidth={1.7} />
      </div>
      <h3 className="mb-2.5 font-display text-lg font-bold">{service.title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {service.desc}
      </p>
    </div>
  )
}
