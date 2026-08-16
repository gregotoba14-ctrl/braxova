"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"

import { BraxovaMark } from "@/components/brand-mark"
import { INDUSTRY_ICONS } from "@/lib/industry-icons"
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal"
import { PROJECTS, type Project } from "@/lib/projects"

export function Portfolio() {
  return (
    <section id="portafolio" className="py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">Portafolio</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
              Proyectos que convierten ideas en soluciones reales
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Sitios web y sistemas desarrollados para resolver necesidades
              concretas de cada negocio.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="grid gap-8 lg:grid-cols-2" stagger={0.14}>
          {PROJECTS.map((project) => (
            <RevealItem key={project.slug} variant="emerge">
              <PortfolioCard project={project} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}

function PortfolioCard({ project }: { project: Project }) {
  const ref = React.useRef<HTMLDivElement>(null)
  const Icon = INDUSTRY_ICONS[project.industryIcon]

  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const springConfig = { stiffness: 200, damping: 22, mass: 0.4 }
  const sx = useSpring(mx, springConfig)
  const sy = useSpring(my, springConfig)
  const rotateX = useTransform(sy, [0, 1], [4, -4])
  const rotateY = useTransform(sx, [0, 1], [-5, 5])

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mx.set((e.clientX - rect.left) / rect.width)
    my.set((e.clientY - rect.top) / rect.height)
  }

  function onMouseLeave() {
    mx.set(0.5)
    my.set(0.5)
  }

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      className="portfolio-card h-full"
    >
      <div className="portfolio-card-inner flex h-full flex-col">
        {/* Cover — now the dominant element of the card */}
        <div
          className="portfolio-frame"
          style={
            {
              "--pf1": project.brand.c1,
              "--pf2": project.brand.c2,
            } as React.CSSProperties
          }
        >
          <div className="portfolio-frame-media">
            {project.images?.desktop ? (
              <Image
                src={project.images.desktop}
                alt={`Captura de pantalla del proyecto ${project.name}`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-3">
                <span className="flex size-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm">
                  <Icon className="size-6 text-white" strokeWidth={1.6} />
                </span>
                <span className="font-display text-lg font-bold text-white/90">
                  {project.name}
                </span>
                <span className="absolute left-4 top-4 opacity-40">
                  <BraxovaMark size={16} />
                </span>
              </div>
            )}
          </div>

        </div>

        <div className="flex flex-1 flex-col p-7 sm:p-8">
          <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-accent-blue/30 bg-accent-blue/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-accent-blue">
            <Icon className="size-3.5" strokeWidth={2.2} />
            {project.industryLabel}
          </span>
          <h3 className="mb-3 font-display text-2xl font-bold tracking-tight">
            {project.name}
          </h3>
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
            {project.shortDescription}
          </p>

          {/* What was actually built */}
          <ul className="mb-6 grid gap-2">
            {project.deliverables.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-white/80">
                <Check className="size-3.5 shrink-0 text-accent-blue" strokeWidth={2.5} />
                {item}
              </li>
            ))}
          </ul>

          <div className="mb-7 flex flex-wrap gap-2">
            {project.technologies.map((tag) => (
              <span key={tag} className="tag-pill">
                {tag}
              </span>
            ))}
          </div>

          <Link
            href={`/portafolio/${project.slug}`}
            className="group/cta mt-auto inline-flex h-11 w-fit items-center gap-2 rounded-xl border border-white/12 bg-white/[0.04] px-5 text-sm font-medium transition-colors hover:border-accent-blue/40 hover:bg-accent-blue/10"
          >
            Ver proyecto
            <ArrowRight className="size-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
