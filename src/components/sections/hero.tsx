"use client"

import * as React from "react"
import Link from "next/link"
import gsap from "gsap"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/motion/reveal"
import { GsapCounter } from "@/components/motion/gsap-counter"
import { Magnetic } from "@/components/motion/magnetic"
import { DeviceFrame } from "@/components/device-frame"
import { getProjectBySlug, type DeviceType } from "@/lib/projects"

// Kept deliberately spare — the devices themselves now carry most of the
// visual richness (depth, shadow, reflection), so fewer chips read as
// more premium rather than less.
const CHIPS = [
  { label: "SEO", color: "bg-emerald-400", className: "top-[4%] left-[2%]", delay: "0s" },
  { label: "Performance", color: "bg-blue-400", className: "top-[16%] right-[4%]", delay: "0.7s" },
  { label: "Automation", color: "bg-amber-400", className: "bottom-[22%] right-[-2%]", delay: "2.1s" },
  { label: "Analytics", color: "bg-pink-400", className: "bottom-[8%] left-[8%]", delay: "2.8s" },
  { label: "AI", color: "bg-indigo-400", className: "bottom-[46%] right-[15%] hidden sm:flex", delay: "1s" },
]

// One project per industry so the composition reads as a portfolio at a
// glance: gym, health, real estate, podiatry.
const HERO_DEVICES: { device: DeviceType; slug: string }[] = [
  { device: "desktop", slug: "gym-olimpo" },
  { device: "macbook", slug: "centro-de-kinesiologia" },
  { device: "ipad", slug: "aeroagro" },
  { device: "iphone", slug: "plantar" },
]

// Cifras reales y verificables únicamente — nada de conteos inflados.
// 5 proyectos, 4 sectores distintos (ver industryLabel en lib/projects.ts),
// y el 100% es un compromiso de proceso (todo se entrega responsive), no
// una estadística de resultados de terceros.
const STATS = [
  { target: 5, suffix: "+", label: "Proyectos desarrollados" },
  { target: 4, suffix: "", label: "Sectores" },
  { target: 100, suffix: "%", label: "Responsive" },
]

export function Hero() {
  const sceneRef = React.useRef<HTMLDivElement>(null)
  const deviceRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const scene = sceneRef.current
    const device = deviceRef.current
    if (!scene || !device) return
    if (!window.matchMedia("(pointer: fine)").matches) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    // Targeted GSAP usage: buttery mouse-parallax tilt on the hero device
    // composition via quickTo, isolated to this one interaction.
    const rotateY = gsap.quickTo(device, "rotationY", { duration: 0.7, ease: "power3.out" })
    const rotateX = gsap.quickTo(device, "rotationX", { duration: 0.7, ease: "power3.out" })

    function onMouseMove(e: MouseEvent) {
      const rect = scene!.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      rotateY(x * 8)
      rotateX(-y * 8)
    }
    function onMouseLeave() {
      rotateY(0)
      rotateX(0)
    }

    scene.addEventListener("mousemove", onMouseMove)
    scene.addEventListener("mouseleave", onMouseLeave)
    return () => {
      scene.removeEventListener("mousemove", onMouseMove)
      scene.removeEventListener("mouseleave", onMouseLeave)
    }
  }, [])

  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-28 lg:pt-48 lg:pb-36">
      <div className="hero-glow" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-8">
          <div className="max-w-xl">
            <Reveal>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.6)]" />
                Disponibles para nuevos proyectos
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="font-display text-[2.6rem] font-extrabold leading-[1.08] tracking-tight sm:text-6xl sm:leading-[1.05]">
                Software diseñado para empresas que quieren{" "}
                <span className="text-gradient">crecer</span>.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Creamos páginas web profesionales, sistemas de gestión y
                automatizaciones que ayudan a vender más, ahorrar tiempo y
                escalar tu negocio.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-5 border-l-2 border-accent-blue/50 pl-4 text-base leading-relaxed text-white/85">
                Soluciones desarrolladas para salud, fitness, comercios e
                inmobiliarias.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Magnetic className="inline-block">
                  <Button asChild size="lg" className="btn-glow group h-12 rounded-xl px-7 text-base">
                    <Link href="#contacto">
                      Contame tu proyecto
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </Magnetic>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-xl border-white/12 bg-white/4 px-7 text-base hover:bg-white/8"
                >
                  <Link href="#portafolio">Ver proyectos</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-14 grid grid-cols-3 gap-x-6 gap-y-6">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <div className="font-display text-2xl font-bold">
                      <GsapCounter target={stat.target} suffix={stat.suffix} />
                    </div>
                    <div className="mt-0.5 text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.16}>
            <div
              ref={sceneRef}
              className="relative h-[460px] sm:h-[540px] lg:h-[580px] [perspective:1800px]"
            >
              {CHIPS.map((chip) => (
                <div
                  key={chip.label}
                  className={`float-chip ${chip.className}`}
                  style={{ animationDelay: chip.delay }}
                >
                  <span className={`chip-dot ${chip.color}`} />
                  {chip.label}
                </div>
              ))}

              <div
                ref={deviceRef}
                className="device-scene"
                style={{ transformStyle: "preserve-3d" }}
              >
                {HERO_DEVICES.map(({ device, slug }) => {
                  const project = getProjectBySlug(slug)
                  if (!project) return null
                  return <DeviceFrame key={slug} device={device} project={project} />
                })}
                <div className="device-glow" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
