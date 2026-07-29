"use client"

import * as React from "react"
import { motion, useReducedMotion, type Variants } from "framer-motion"

type RevealProps = {
  children: React.ReactNode
  delay?: number
  className?: string
  as?: "div" | "span"
}

const variants: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

// "Emerge from behind" — scales up out of a heavier blur with more travel,
// like the element is arriving from just behind the viewport. Reserved for
// moments that should feel like a reveal, not routine content (e.g. the
// portfolio grid), so it stays opt-in rather than the default.
const emergeVariants: Variants = {
  hidden: { opacity: 0, y: 56, scale: 0.9, filter: "blur(14px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
}

export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const prefersReducedMotion = useReducedMotion()
  const Component = motion[as]

  if (prefersReducedMotion) {
    const Static = as
    return <Static className={className}>{children}</Static>
  }

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </Component>
  )
}

export function RevealGroup({
  children,
  className,
  stagger = 0.08,
}: {
  children: React.ReactNode
  className?: string
  stagger?: number
}) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({
  children,
  className,
  variant = "default",
}: {
  children: React.ReactNode
  className?: string
  variant?: "default" | "emerge"
}) {
  return (
    <motion.div
      className={className}
      variants={variant === "emerge" ? emergeVariants : variants}
    >
      {children}
    </motion.div>
  )
}
