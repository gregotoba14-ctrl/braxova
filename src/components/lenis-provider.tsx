"use client"

import * as React from "react"
import { ReactLenis } from "lenis/react"

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const [smoothScrollEnabled, setSmoothScrollEnabled] = React.useState(true)

  React.useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)")
    setSmoothScrollEnabled(!query.matches)
    const onChange = () => setSmoothScrollEnabled(!query.matches)
    query.addEventListener("change", onChange)
    return () => query.removeEventListener("change", onChange)
  }, [])

  if (!smoothScrollEnabled) {
    return <>{children}</>
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.11,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.2,
      }}
    >
      {children}
    </ReactLenis>
  )
}
