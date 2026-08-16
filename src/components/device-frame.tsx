"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"

import { BraxovaMark } from "@/components/brand-mark"
import { INDUSTRY_ICONS } from "@/lib/industry-icons"
import type { DeviceType, Project } from "@/lib/projects"

const IMAGE_KEY: Record<DeviceType, keyof NonNullable<Project["images"]>> = {
  macbook: "desktop",
  desktop: "desktop",
  ipad: "tablet",
  iphone: "mobile",
}

// Physical depth (translateZ) and float rhythm per device — furthest-back
// devices drift the least; closest devices drift most. Combined with the
// shared parent's mouse-driven rotation, this is what sells the parallax.
const DEVICE_PHYSICS: Record<
  DeviceType,
  { z: number; floatY: number; duration: number; delay: number }
> = {
  desktop: { z: -70, floatY: 10, duration: 8, delay: 0.1 },
  macbook: { z: 0, floatY: 13, duration: 7, delay: 0 },
  ipad: { z: 34, floatY: 9, duration: 6.2, delay: 0.35 },
  iphone: { z: 64, floatY: 9, duration: 6.6, delay: 0.55 },
}

function ScreenContent({
  project,
  device,
}: {
  project: Project
  device: DeviceType
}) {
  const src = project.images?.[IMAGE_KEY[device]]

  if (src) {
    return (
      <>
        <Image
          src={src}
          alt={`Captura de pantalla del proyecto ${project.name}`}
          fill
          className="object-cover object-top"
          style={project.imagePosition ? { objectPosition: project.imagePosition } : undefined}
          sizes="(max-width: 768px) 90vw, 600px"
        />
        <div className="device-sheen" />
      </>
    )
  }

  // Honest placeholder — laid out like an actual site (nav strip, left-
  // aligned headline) rather than a centered title card, so the screen
  // reads as a screen and not a business card. Never a fabricated
  // interface: no invented copy or fake product UI, just abstract
  // skeleton shapes plus the industry icon so the "what is this" lands
  // instantly, until the real screenshot is supplied.
  const Icon = INDUSTRY_ICONS[project.industryIcon]
  return (
    <div
      className="absolute inset-0 flex flex-col overflow-hidden"
      style={{
        background: `linear-gradient(160deg, ${project.brand.c1}, ${project.brand.c2})`,
      }}
    >
      <div
        className="pointer-events-none absolute -right-[15%] -top-[25%] h-2/3 w-2/3 rounded-full opacity-30 blur-2xl"
        style={{ background: project.brand.c1 }}
      />

      <div className="relative flex items-center gap-2 border-b border-white/10 px-[9%] py-[5%]">
        <BraxovaMark size={11} />
        <div className="ml-auto flex items-center gap-1.5">
          <span className="h-[3px] w-3 rounded-full bg-white/25" />
          <span className="h-[3px] w-3 rounded-full bg-white/25" />
          <span className="h-[3px] w-4 rounded-full bg-white/40" />
        </div>
      </div>

      <div className="relative flex flex-1 flex-col justify-center gap-2 px-[9%]">
        <span className="mb-1 flex size-8 items-center justify-center rounded-lg border border-white/15 bg-white/10 backdrop-blur-sm">
          <Icon className="size-4 text-white" strokeWidth={1.6} />
        </span>
        <span className="font-display text-sm font-bold leading-tight text-white/95 sm:text-base">
          {project.name}
        </span>
        <span className="text-[9px] uppercase tracking-wider text-white/45">
          {project.industryLabel}
        </span>
        <span className="mt-1.5 h-[7px] w-11 rounded-full bg-white/25" />
      </div>

      <div className="device-sheen" />
    </div>
  )
}

export function DeviceFrame({
  device,
  project,
  standalone = false,
}: {
  device: DeviceType
  project: Project
  /** Render in normal document flow (project detail pages) instead of
   *  the hero's absolutely-positioned floating scene. */
  standalone?: boolean
}) {
  const staticClass = standalone ? " static" : ""
  const physics = DEVICE_PHYSICS[device]
  const prefersReducedMotion = useReducedMotion()

  const motionProps = prefersReducedMotion
    ? { style: { transformStyle: "preserve-3d" as const, z: physics.z } }
    : {
        style: { transformStyle: "preserve-3d" as const, z: physics.z },
        animate: { y: [0, -physics.floatY, 0] },
        transition: {
          duration: physics.duration,
          delay: physics.delay,
          repeat: Infinity,
          ease: "easeInOut" as const,
        },
      }

  if (device === "macbook") {
    return (
      <motion.div className="device laptop" {...motionProps}>
        <div className="laptop-screen">
          <ScreenContent project={project} device={device} />
        </div>
        <div className="laptop-hinge" />
        <div className="laptop-base" />
      </motion.div>
    )
  }

  if (device === "ipad") {
    return (
      <motion.div className={`device tablet${staticClass}`} {...motionProps}>
        <div className="tablet-screen">
          <ScreenContent project={project} device={device} />
        </div>
      </motion.div>
    )
  }

  if (device === "iphone") {
    return (
      <motion.div className={`device phone${staticClass}`} {...motionProps}>
        <div className="phone-screen">
          <div className="phone-island" />
          <ScreenContent project={project} device={device} />
          <div className="phone-home-indicator" />
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div className={`device monitor${staticClass}`} {...motionProps}>
      <div className="monitor-screen">
        <ScreenContent project={project} device={device} />
      </div>
      <div className="monitor-neck" />
      <div className="monitor-base" />
    </motion.div>
  )
}
