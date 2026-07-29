import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"

import { DeviceFrame } from "@/components/device-frame"
import { BrowserMockup } from "@/components/browser-mockup"
import { Reveal } from "@/components/motion/reveal"
import { Button } from "@/components/ui/button"
import { PROJECTS, getProjectBySlug } from "@/lib/projects"

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}

  return {
    title: project.name,
    description: project.shortDescription,
    alternates: { canonical: `/portafolio/${project.slug}` },
    openGraph: {
      title: `${project.name} · BRAXOVA`,
      description: project.shortDescription,
    },
  }
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug)
  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length]
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length]

  return (
    <main id="contenido">
      <section className="relative overflow-hidden pt-36 pb-20 lg:pt-44">
        <div className="hero-glow" />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
          <Reveal>
            <Link
              href="/#portafolio"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-white"
            >
              <ArrowLeft className="size-4" />
              Volver al portafolio
            </Link>
          </Reveal>

          <Reveal delay={0.06}>
            <span className="eyebrow">{project.category}</span>
          </Reveal>
          <Reveal delay={0.12}>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              {project.name}
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-7 flex flex-wrap gap-2">
              {project.technologies.map((tag) => (
                <span key={tag} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative pb-8">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {project.gallery && project.gallery.length > 0 ? (
            <>
              <Reveal>
                <BrowserMockup {...project.gallery[0]} priority />
              </Reveal>
              {project.gallery.length > 1 && (
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  {project.gallery.slice(1).map((image, i) => (
                    <Reveal key={image.src} delay={0.08 + i * 0.06}>
                      <BrowserMockup {...image} />
                    </Reveal>
                  ))}
                </div>
              )}
            </>
          ) : (
            <>
              <Reveal>
                <div className="mx-auto w-full max-w-md [perspective:1800px]">
                  <DeviceFrame device={project.device} project={project} standalone />
                </div>
              </Reveal>

              <div className="mx-auto mt-10 grid max-w-md grid-cols-2 gap-8">
                <Reveal delay={0.08}>
                  <div className="[perspective:1800px]">
                    <DeviceFrame device="ipad" project={project} standalone />
                  </div>
                </Reveal>
                <Reveal delay={0.14}>
                  <div className="mx-auto w-[62%] [perspective:1800px]">
                    <DeviceFrame device="iphone" project={project} standalone />
                  </div>
                </Reveal>
              </div>
            </>
          )}
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-5xl gap-6 px-6 sm:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-7">
              <span className="eyebrow mb-4 block">El desafío</span>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.challenge}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-7">
              <span className="eyebrow mb-4 block">La solución</span>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.solution}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mx-auto mt-6 max-w-5xl px-6 lg:px-8">
          <Reveal delay={0.14}>
            <div className="glass-panel rounded-3xl p-8">
              <span className="eyebrow mb-6 block">Resultados</span>
              <ul className="grid gap-4 sm:grid-cols-3">
                {project.results.map((result) => (
                  <li key={result} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent-blue" />
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {result}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* overflow-hidden clips the decorative .hero-glow, which is wider than
          narrow viewports and would otherwise widen the page. */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="hero-glow hero-glow-bottom" />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              ¿Querés un proyecto como este?
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Contanos qué necesitás y te armamos una propuesta clara en
              menos de 24&nbsp;hs.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <Button asChild size="lg" className="btn-glow mt-8 h-12 rounded-xl px-7 text-base">
              <Link href="/#contacto">
                Empezá tu proyecto
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <nav className="border-t border-white/[0.06] py-10">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 lg:px-8">
          <Link
            href={`/portafolio/${prevProject.slug}`}
            className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-white"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            {prevProject.name}
          </Link>
          <Link
            href={`/portafolio/${nextProject.slug}`}
            className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-white"
          >
            {nextProject.name}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </nav>
    </main>
  )
}
