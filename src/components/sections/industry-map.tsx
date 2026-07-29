"use client"

import { motion, useReducedMotion } from "framer-motion"

import { BraxovaMark } from "@/components/brand-mark"
import { INDUSTRIES } from "@/lib/data"

// Six nodes evenly spaced around the hub, starting at 12 o'clock.
// Positions are percentages of the (square) container so the SVG
// connector lines and the absolutely-positioned nodes share one
// coordinate space.
const RADIUS = 37
const NODES = INDUSTRIES.map((industry, i) => {
  const angle = (-90 + i * 60) * (Math.PI / 180)
  return {
    ...industry,
    x: 50 + RADIUS * Math.cos(angle),
    y: 50 + RADIUS * Math.sin(angle),
  }
})

export function IndustryMap() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[620px]">
      {/* Connector lines + orbit ring */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="spoke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.08" />
          </linearGradient>
        </defs>

        <circle
          cx="50"
          cy="50"
          r={RADIUS}
          fill="none"
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="0.25"
        />

        {NODES.map((node) => (
          <motion.line
            key={node.label}
            x1="50"
            y1="50"
            x2={node.x}
            y2={node.y}
            stroke="url(#spoke)"
            strokeWidth="0.3"
            initial={prefersReducedMotion ? undefined : { pathLength: 0, opacity: 0 }}
            whileInView={prefersReducedMotion ? undefined : { pathLength: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
      </svg>

      {/* Ambient hub glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.28),transparent_70%)] blur-2xl" />

      {/* Hub */}
      <motion.div
        className="absolute left-1/2 top-1/2 flex size-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-1.5 rounded-full border border-white/12 bg-card/80 backdrop-blur-md"
        initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.85 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <BraxovaMark size={26} />
        <span className="font-display text-[11px] font-extrabold tracking-widest text-white/80">
          BRAXOVA
        </span>
      </motion.div>

      {/* Industry nodes */}
      {NODES.map((node, i) => {
        const Icon = node.icon
        return (
          <motion.div
            key={node.label}
            className="absolute flex w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2.5 text-center"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.8 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.55,
              delay: 0.25 + i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <span className="map-node-icon">
              <Icon className="size-5" strokeWidth={1.7} />
            </span>
            <span className="font-display text-sm font-bold text-white">
              {node.label}
            </span>
          </motion.div>
        )
      })}
    </div>
  )
}
