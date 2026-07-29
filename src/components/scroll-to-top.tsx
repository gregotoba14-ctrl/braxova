"use client"

import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUp } from "lucide-react"
import { useLenis } from "lenis/react"

export function ScrollToTop() {
  const [visible, setVisible] = React.useState(false)
  const lenis = useLenis()

  React.useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 600)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  function handleClick() {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 })
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          onClick={handleClick}
          aria-label="Volver arriba"
          className="fixed bottom-6 right-6 z-40 flex size-11 items-center justify-center rounded-full border border-white/12 bg-background/85 text-white backdrop-blur-md transition-colors hover:bg-primary hover:border-primary"
        >
          <ArrowUp className="size-4" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
