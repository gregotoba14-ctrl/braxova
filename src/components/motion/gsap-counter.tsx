"use client"

import * as React from "react"
import gsap from "gsap"

type GsapCounterProps = {
  target: number
  suffix?: string
  className?: string
}

/**
 * One-off GSAP usage (per the stack requirement to reserve GSAP for
 * targeted animations): counts up once the element enters the viewport,
 * driven by a ScrollTrigger-free IntersectionObserver + gsap.to tween.
 */
export function GsapCounter({ target, suffix = "", className }: GsapCounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const hasRun = React.useRef(false)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (prefersReducedMotion) {
      el.textContent = `${target}${suffix}`
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || hasRun.current) return
          hasRun.current = true
          const counter = { value: 0 }
          gsap.to(counter, {
            value: target,
            duration: 1.4,
            ease: "power3.out",
            onUpdate: () => {
              if (el) el.textContent = `${Math.round(counter.value)}${suffix}`
            },
          })
          observer.disconnect()
        })
      },
      { threshold: 0.6 }
    )
    observer.observe(el)

    return () => observer.disconnect()
  }, [target, suffix])

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  )
}
