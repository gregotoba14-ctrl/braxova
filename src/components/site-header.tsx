"use client"

import * as React from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { BraxovaMark } from "@/components/brand-mark"
import { Magnetic } from "@/components/motion/magnetic"
import { NAV_LINKS } from "@/lib/data"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false)
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("")

  React.useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.slice(1))

    function onScroll() {
      setScrolled(window.scrollY > 24)

      let current = ""
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        if (window.scrollY >= el.offsetTop - 140) current = id
      }
      setActiveSection(current)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  React.useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={cn(
            "flex items-center justify-between h-[72px] rounded-2xl px-2 transition-all duration-300",
            scrolled &&
              "mt-3 border border-white/10 bg-background/70 px-5 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.6)] backdrop-blur-xl"
          )}
        >
          <Link
            href="#top"
            className="group flex items-center gap-2.5"
            aria-label="BRAXOVA — inicio"
          >
            <span className="drop-shadow-[0_4px_14px_rgba(37,99,235,0.45)] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
              <BraxovaMark size={30} />
            </span>
            <span className="font-display text-[19px] font-extrabold tracking-tight">
              BRAXOVA
            </span>
          </Link>

          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Navegación principal"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-white",
                  activeSection === link.href.slice(1) && "text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Magnetic className="inline-block">
              <Button asChild className="btn-glow rounded-xl px-5 h-10">
                <Link href="#contacto">Hablemos</Link>
              </Button>
            </Magnetic>
          </div>

          <button
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 lg:hidden"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="size-4.5" /> : <Menu className="size-4.5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mx-4 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-background/90 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-1 p-4" aria-label="Navegación móvil">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="btn-glow mt-2 justify-center rounded-xl"
                onClick={() => setMenuOpen(false)}
              >
                <Link href="#contacto">Hablemos</Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
